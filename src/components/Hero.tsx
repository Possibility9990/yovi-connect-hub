import { motion } from "framer-motion";
import { ShieldCheck, Users, Lock } from "lucide-react";
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
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="hero-image-placeholder mx-auto flex aspect-[4/5] w-full max-w-[480px] items-center justify-center rounded-[28px] border border-dashed border-yovi-border bg-white text-sm font-medium text-yovi-muted shadow-sm">
            Hero Image Here
          </div>

          {/* Floating trust cards */}
          <TrustCard
            title="Verified Sellers"
            value="13,000+"
            caption="Active on YOVI"
            icon={<Users className="h-5 w-5" />}
            className="absolute -left-4 top-10 hidden w-56 sm:flex"
            delay={0.2}
          />
          <TrustCard
            title="Happy Customers"
            value="98%"
            caption="Positive Reviews"
            icon={<ShieldCheck className="h-5 w-5" />}
            className="absolute -right-4 top-1/3 hidden w-56 sm:flex"
            delay={0.5}
          />
          <TrustCard
            title="Secure Transactions"
            value="₦2.48+"
            caption="Escrow Protected"
            icon={<Lock className="h-5 w-5" />}
            className="absolute -left-2 bottom-6 hidden w-56 sm:flex"
            delay={0.8}
          />
        </motion.div>
      </div>
    </section>
  );
}