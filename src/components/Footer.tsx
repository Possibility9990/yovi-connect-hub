import { useState } from "react";
import { motion } from "framer-motion";
import { Apple, Play, ShieldCheck, MapPin } from "lucide-react";

const helpLinks = ["Chat with us", "Help Center", "Contact Us"];
const aboutLinks = ["About us", "Junia careers", "Corporate Website", "Terms and Conditions"];
const earnLinks = ["Sell on Junia", "Vendor hub", "Become a Sales Consultant"];
const countriesA = ["Egypt", "Ghana", "Kenya", "Ivory Coast"];
const countriesB = ["Morocco", "Senegal", "Uganda"];

export function Footer() {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <footer className="mt-8">
      {/* Newsletter / App download band */}
      <section className="bg-yovi-primary/90 text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-4 py-12 md:px-8 lg:grid-cols-[1fr_1.4fr_1fr]">
          {/* Logo block */}
          <div className="flex items-start">
            <div className="flex items-center gap-2">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-lg bg-white text-yovi-primary ring-2 ring-white/70">
                <ShieldCheck className="h-5 w-5" strokeWidth={2.5} />
                <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-yovi-orange text-white">
                  <MapPin className="h-2 w-2" />
                </span>
              </span>
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-white">YO</span>
                <span className="text-yovi-orange">Vi</span>
              </span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wide">New to YOVI?</h3>
            <p className="mt-2 max-w-md text-sm text-white/85">
              YOVI connects you with verified sellers and service providers in your community.
            </p>
            <p className="mt-4 text-xs text-white/80">
              To subscribe to our newsletter, you must first read and agree to YOVI&apos;s{" "}
              <a className="underline" href="#">Privacy Policy</a> and{" "}
              <a className="underline" href="#">Cookie Policy</a>.
            </p>
            <label className="mt-3 flex items-center gap-2 text-xs text-white/90">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="h-4 w-4 accent-yovi-orange"
              />
              I agree to YOVI&apos;s Privacy and Cookie Policy
            </label>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex w-full max-w-md overflow-hidden rounded-lg bg-white p-1 shadow"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter E-mail Address"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-yovi-text placeholder:text-yovi-muted focus:outline-none"
              />
              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={!agree}
                className="rounded-md bg-yovi-primary px-5 py-2 text-sm font-semibold text-white transition-opacity disabled:opacity-60"
              >
                Subscribe
              </motion.button>
            </form>
            <p className="mt-2 text-[11px] text-white/80">
              You can unsubscribe at any time as described in Privacy Policy.
            </p>
          </div>

          {/* App download */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wide">Download YOVI Free App</h3>
            <p className="mt-2 text-sm text-white/85">Get access to exclusive offers!</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#" className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white">
                <Apple className="h-6 w-6" />
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px]">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </span>
              </a>
              <a href="#" className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white">
                <Play className="h-6 w-6" />
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px]">Get it on</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dark links */}
      <section className="bg-[#0F172A] text-white/85">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4 md:px-8">
          <FooterCol title="NEED HELP?" items={helpLinks} />
          <FooterCol title="ABOUT YOVI" items={aboutLinks} />
          <FooterCol title="MAKE MONEY WITH YOVI" items={earnLinks} />
          <div>
            <h4 className="text-sm font-bold tracking-wide text-white">YOVI INTERNATIONAL</h4>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <ul className="space-y-2">
                {countriesA.map((c) => (
                  <li key={c}><a href="#" className="hover:text-white">{c}</a></li>
                ))}
              </ul>
              <ul className="space-y-2">
                {countriesB.map((c) => (
                  <li key={c}><a href="#" className="hover:text-white">{c}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1440px] px-4 py-4 text-xs text-white/60 md:px-8">
            © {new Date().getFullYear()} YOVI. All rights reserved.
          </div>
        </div>
      </section>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold tracking-wide text-white">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="hover:text-white">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}