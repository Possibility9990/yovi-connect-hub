import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const paymentLogos = ["Visa", "Mastercard", "Verve", "Flutterwave", "PCI DSS"];

export function TrustBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto max-w-[1440px] px-4 pb-16 md:px-8"
    >
      <div className="grid grid-cols-1 items-center gap-6 rounded-[20px] border border-yovi-border bg-white p-5 shadow-sm md:grid-cols-[1fr_auto] md:gap-8 md:p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yovi-primary/10 text-yovi-primary">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <h2 className="text-base font-bold text-yovi-text sm:text-lg">
              Your Trust is Our Priority
            </h2>
            <p className="mt-1 text-xs text-yovi-muted sm:text-sm">
              Every transaction is protected with escrow. Pay securely and only release funds when you&apos;re satisfied.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          {paymentLogos.map((name) => (
            <div
              key={name}
              className="flex h-9 min-w-[68px] items-center justify-center rounded-md border border-yovi-border bg-yovi-bg px-3 text-[11px] font-semibold text-yovi-muted"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}