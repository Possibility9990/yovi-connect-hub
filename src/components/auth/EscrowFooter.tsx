import { ShieldCheck } from "lucide-react";

export function EscrowFooter() {
  return (
    <div className="flex items-center justify-center gap-3 pt-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yovi-primary/10 text-yovi-primary">
        <ShieldCheck className="h-5 w-5" />
      </span>
      <p className="text-sm text-yovi-text">
        Protected by <span className="font-bold text-yovi-primary">YOVI</span>{" "}
        Escrow Security
      </p>
    </div>
  );
}
