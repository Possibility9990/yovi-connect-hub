import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function TrustBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto max-w-[1440px] px-4 pb-16 md:px-8"
    >
      <div className="grid grid-cols-1 items-center gap-8 rounded-[28px] bg-gradient-to-br from-yovi-primary to-yovi-secondary p-8 text-white shadow-xl md:grid-cols-[1fr_auto] md:p-12">
        <div className="flex items-start gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
              Your Trust Is Our Priority
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/85 sm:text-base">
              Every transaction is protected with escrow, payment secure and only release funds when
              you&apos;re satisfied.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-20 items-center justify-center rounded-lg bg-white text-xs font-semibold text-yovi-text">
            Visa
          </div>
          <div className="flex h-12 w-20 items-center justify-center rounded-lg bg-white text-xs font-semibold text-yovi-text">
            Mastercard
          </div>
        </div>
      </div>
    </motion.section>
  );
}