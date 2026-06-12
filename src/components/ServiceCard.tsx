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
      whileHover={{ y: -4 }}
      className="group flex flex-col items-start gap-3 rounded-2xl border border-yovi-border bg-white p-5 text-left transition-colors hover:bg-yovi-primary hover:border-yovi-primary"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yovi-primary/10 text-yovi-primary transition-all group-hover:bg-white/20 group-hover:text-white group-hover:rotate-6">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-base font-semibold text-yovi-text transition-colors group-hover:text-white">
          {service.name}
        </p>
        <p className="mt-0.5 text-xs text-yovi-muted transition-colors group-hover:text-white/80">
          {service.available.toLocaleString()} available
        </p>
      </div>
    </motion.button>
  );
}