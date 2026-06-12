import { motion } from "framer-motion";
import { BadgeCheck, Lock, Check, Star } from "lucide-react";
import { TrustCard } from "./TrustCard";

export function Hero() {
  return (
    <section className="bg-yovi-bg">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-4 py-12 md:px-8 md:py-20 lg:grid-cols-2">
        {/* Left */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold leading-tight text-yovi-text sm:text-5xl lg:text-6xl"
          >
            Buy, Sell &amp; Find
            <br />
            <span className="text-yovi-primary">Trusted Services</span>
            <br />
            Near You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-lg text-base text-yovi-muted sm:text-lg"
          >
            YOVI connects you with verified sellers and service providers in your community.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
            }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {[
              { label: "Shop Products", primary: true },
              { label: "Find Services", primary: false },
            ].map((b) => (
              <motion.button
                key={b.label}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={
                  b.primary
                    ? "rounded-xl bg-yovi-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-yovi-secondary"
                    : "rounded-xl border border-yovi-border bg-white px-6 py-3 text-sm font-semibold text-yovi-text transition-colors hover:border-yovi-primary hover:text-yovi-primary"
                }
              >
                {b.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Trust chip row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-yovi-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-yovi-primary" /> Escrow Protected
            </span>
            <span className="text-yovi-border">•</span>
            <span>Secure Payments</span>
            <span className="text-yovi-border">•</span>
            <span>Verified Sellers &amp; Providers</span>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          {/* Green pill backdrop */}
          <div className="absolute left-1/2 top-1/2 -z-0 h-[88%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yovi-primary/15" />
          {/* Dotted pattern */}
          <div
            aria-hidden
            className="absolute -bottom-2 left-6 -z-0 hidden h-16 w-20 sm:block"
            style={{
              backgroundImage: "radial-gradient(var(--color-yovi-primary) 1.2px, transparent 1.2px)",
              backgroundSize: "10px 10px",
              opacity: 0.35,
            }}
          />
          <div className="hero-image-placeholder relative z-10 mx-auto flex aspect-[4/5] w-full max-w-[460px] items-center justify-center rounded-[28px] border border-dashed border-yovi-border bg-white/60 text-sm font-medium text-yovi-muted shadow-sm backdrop-blur-sm">
            Hero Image Here
          </div>

          {/* Floating trust cards */}
          <TrustCard
            title="Verified Sellers"
            value="12,450+"
            caption="Active on YOVI"
            icon={<BadgeCheck className="h-5 w-5" />}
            className="absolute -left-4 top-6 z-20 hidden w-52 sm:block"
            delay={0.2}
          />
          <TrustCard
            title="Happy Customers"
            value="98%"
            caption="Positive Reviews"
            icon={<Star className="h-5 w-5 fill-yovi-orange text-yovi-orange" />}
            className="absolute -right-4 top-16 z-20 hidden w-52 sm:block"
            delay={0.5}
          />
          <TrustCard
            title="Secure Transactions"
            value="₦2.48+"
            caption="Escrow Protected"
            icon={<Lock className="h-5 w-5" />}
            className="absolute -right-2 bottom-10 z-20 hidden w-52 sm:block"
            delay={0.8}
          />
        </motion.div>
      </div>
    </section>
  );
}