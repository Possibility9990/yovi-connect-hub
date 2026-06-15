import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, MapPin } from "lucide-react";

interface AuthShellProps {
  title: ReactNode;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}

const benefits = [
  "Secure Escrow Payment",
  "Verified Sellers",
  "Verified Service Providers",
  "Easy Product Discovery",
];

export function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  return (
    <div className="min-h-dvh bg-white">
      <div className="mx-auto grid min-h-dvh max-w-[1440px] grid-cols-1 lg:grid-cols-2">
        {/* Left brand panel */}
        <aside className="relative hidden flex-col justify-center bg-emerald-50/60 px-10 py-16 lg:flex xl:px-20">
          <YoviLogo />
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-14 max-w-md text-4xl font-extrabold leading-[1.15] tracking-tight text-yovi-text xl:text-5xl"
          >
            {title}
          </motion.h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-yovi-muted">{subtitle}</p>

          <ul className="mt-10 space-y-5">
            {benefits.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="flex items-center gap-4"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yovi-primary text-white shadow-sm">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="font-semibold text-yovi-text">{b}</span>
              </motion.li>
            ))}
          </ul>
        </aside>

        {/* Right form panel */}
        <section className="flex flex-col items-center justify-center px-5 py-10 sm:px-8 md:py-14">
          {/* Mobile logo */}
          <div className="mb-8 lg:hidden">
            <YoviLogo />
          </div>
          <div className="w-full max-w-[480px]">{children}</div>
          {footer ? <div className="mt-6 w-full max-w-[480px]">{footer}</div> : null}
        </section>
      </div>
    </div>
  );
}

export function YoviLogo() {
  return (
    <a href="/" className="inline-flex items-center gap-3" aria-label="YOVI home">
      <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white text-yovi-primary ring-2 ring-yovi-primary/80 shadow-sm">
        <ShieldCheck className="h-6 w-6" strokeWidth={2.5} />
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-yovi-orange text-white">
          <MapPin className="h-2.5 w-2.5" />
        </span>
      </span>
      <span className="leading-none">
        <span className="block text-3xl font-extrabold tracking-tight">
          <span className="text-yovi-primary">YO</span>
          <span className="text-yovi-orange">Vi</span>
        </span>
        <span className="mt-1 block text-[10px] font-medium text-yovi-muted">
          Buy, Sell &amp; Find Trusted Services Near You
        </span>
      </span>
    </a>
  );
}
