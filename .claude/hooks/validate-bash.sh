#!/usr/bin/env bash
# PreToolUse guard: blocks pushes, production deploys and destructive shell commands.
# Exit 2 blocks the call and returns stderr to Claude. Exit 0 allows.

input=$(cat)

# Extract the command string from the hook payload without requiring jq.
cmd=$(printf '%s' "$input" | sed -n 's/.*"command"[[:space:]]*:[[:space:]]*"\(.*\)".*/\1/p' | head -1)
[ -z "$cmd" ] && exit 0

# The greedy capture runs into later JSON fields; cut at the next key.
cmd=${cmd%%\",\"*}
# Match the first command line only; heredoc bodies and file content must not trip the guards.
esc_nl='\n'
cmd=${cmd%%"$esc_nl"*}

block() {
  echo "BLOCKED by .claude/hooks/validate-bash.sh: $1" >&2
  echo "Ask the user for explicit permission; they can run it themselves with the ! prefix." >&2
  exit 2
}

# --- core guards: keep in every repo -------------------------------------
case "$cmd" in
  *"git push --force"*|*"git push -f"*|*"push --force-with-lease"*)
    block "force push." ;;
  *"git push"*)
    block "push. Repo rule: never push." ;;
  *"git reset --hard"*|*"git clean -fd"*|*"git checkout -- "*)
    block "destructive git operation that discards uncommitted work." ;;
  *"rm -rf /"*|*"rm -rf ~"*|*"rm -fr /"*|*"rm -rf src"*|*"rm -rf public"*)
    block "recursive delete of a root, home or source path." ;;
  *"Remove-Item"*"-Recurse"*"src"*|*"Remove-Item"*"-Recurse"*"public"*)
    block "recursive delete of a source path." ;;
esac

# --- stack-specific guards ------------------------------------------------
case "$cmd" in
  # Netlify hosts the live site and holds the Resend env vars.
  *"netlify deploy"*|*"ntl deploy"*|*"netlify env:set"*|*"netlify env:unset"*|*"netlify env:import"*)
    block "Netlify deploy or env mutation against the live site." ;;
  # Resend sends real email to the intake inbox.
  *"api.resend.com"*)
    block "live Resend email API call." ;;
esac

exit 0
