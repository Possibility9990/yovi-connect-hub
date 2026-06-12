import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-yovi-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yovi-primary/10 text-yovi-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-base font-semibold text-yovi-text">{title}</h3>
      <p className="mt-2 text-sm text-yovi-muted">{description}</p>
    </motion.div>
  );
}