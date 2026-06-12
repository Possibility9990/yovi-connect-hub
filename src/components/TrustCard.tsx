import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface TrustCardProps {
  title: string;
  value: string;
  caption: string;
  icon: ReactNode;
  className?: string;
  delay?: number;
}

export function TrustCard({ title, value, caption, icon, className = "", delay = 0 }: TrustCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`pointer-events-auto rounded-2xl border border-yovi-border bg-white p-4 shadow-lg ${className}`}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex items-center gap-3"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yovi-primary/10 text-yovi-primary">
          {icon}
        </div>
        <div>
          <p className="text-xs font-medium text-yovi-muted">{title}</p>
          <p className="text-base font-bold text-yovi-text leading-tight">{value}</p>
          <p className="text-[11px] text-yovi-muted">{caption}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}