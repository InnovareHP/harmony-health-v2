import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const DialogMarket = () => {
  const [open, setOpen] = useState(true);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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

          <p className="text-foreground font-bold">
            Booking begins early 2026. Stay tuned!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogMarket;
