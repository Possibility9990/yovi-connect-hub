import { motion } from "framer-motion";
import type { Service } from "@/types/yovi";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -3 }}
      className="group flex items-center gap-3 rounded-xl border border-yovi-border bg-white px-4 py-3 text-left transition-colors hover:border-yovi-primary hover:bg-yovi-primary"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yovi-primary/10 text-yovi-primary transition-all group-hover:bg-white/20 group-hover:text-white group-hover:rotate-6">
        <Icon className="h-4.5 w-4.5" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-yovi-text transition-colors group-hover:text-white">
          {service.name}
        </p>
        <p className="mt-0.5 text-[11px] text-yovi-muted transition-colors group-hover:text-white/80">
          {service.available.toLocaleString()} available
        </p>
      </div>
    </motion.button>
  );
}