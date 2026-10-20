---
description: Run the seo-specialist agent, with live GA4 + Search Console data, over the whole site or given routes
argument-hint: [routes and/or goal]
---

Delegate to the `seo-specialist` agent (`.claude/agents/seo-specialist.md`).
The scope is `$ARGUMENTS` if given, otherwise every public route.

1. Run `pnpm build` first, so the agent can inspect the shipped HTML in
   `dist/`.
2. Pull fresh data:
   - use the `ga4`/`gsc` MCP tools if they're loaded (GA4
     `properties/557415911`, GSC `sc-domain:harmonyfortworth.com`);
   - otherwise run
     `MSYS_NO_PATHCONV=1 <analytics-mcp pipx python> seo_baseline.py harmonyfortworth.com --property properties/557415911`
     (script: vault `Projects/project-bootstrap/README.md`).
   Pass the relevant numbers to the agent.
3. The agent is advisory: no edits unless the user asks.
4. Relay its score snapshot, ranked findings, needs-data list and 30/60/90
   plan. Compare with the 2026-10-15 baseline (v2) on the vault page
   `wiki/entities/harmony-health-v2.md`.
