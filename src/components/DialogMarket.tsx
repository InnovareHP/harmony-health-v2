import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

const STORAGE_KEY = "harmony:dialog-market-dismissed";

const DialogMarket = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY) !== "1") {
      setOpen(true);
    }
  }, []);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next && typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md text-center">
        <DialogHeader>
          <DialogTitle className="text-center">
            A New Era of Behavioral Psych Care for Seniors
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <p>
            Harmony Health opens with expanded services, a dedicated clinical
            team, and a mission rooted in meaningful support.
          </p>

          <p className="text-foreground font-bold">Now Accepting Patients</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogMarket;
