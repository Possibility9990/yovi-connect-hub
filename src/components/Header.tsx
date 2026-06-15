import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShoppingCart, Bell, Menu, X, ShieldCheck, MapPin } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { navigationItems } from "@/data/services";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yovi-border bg-white/95 backdrop-blur">
      {/* Top bar */}
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-3 md:gap-6 md:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="YOVI home">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-white text-yovi-primary ring-2 ring-yovi-primary/80">
            <ShieldCheck className="h-5 w-5" strokeWidth={2.5} />
            <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-yovi-orange text-white">
              <MapPin className="h-2 w-2" />
            </span>
          </span>
          <span className="leading-none">
            <span className="block text-xl font-extrabold tracking-tight">
              <span className="text-yovi-primary">YO</span>
              <span className="text-yovi-orange">Vi</span>
            </span>
            <span className="mt-0.5 hidden text-[9px] font-medium text-yovi-muted sm:block">
              Buy, Sell &amp; Find Trusted Services Near You
            </span>
          </span>
        </Link>

        <div className="hidden flex-1 md:block">
          <SearchBar />
        </div>

        <div className="ml-auto flex items-center gap-1 md:gap-3">
          <IconButton icon={<ShoppingCart className="h-5 w-5" />} label="Cart" dotColor="bg-yovi-primary" />
          <IconButton icon={<Bell className="h-5 w-5" />} label="Notifications" dotColor="bg-yovi-orange" />
          <button
            aria-label="Account"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-yovi-border bg-white text-yovi-muted transition hover:border-yovi-primary md:flex"
          />

          <div className="ml-2 hidden items-center gap-2 md:flex">
            <Link
              to="/auth/login"
              className="rounded-xl border border-yovi-border bg-white px-5 py-2 text-sm font-semibold text-yovi-text transition-all hover:-translate-y-0.5 hover:border-yovi-primary hover:text-yovi-primary"
            >
              Login
            </Link>
            <Link
              to="/auth/signup"
              className="rounded-xl bg-yovi-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-yovi-secondary"
            >
              Sign Up
            </Link>
          </div>

          <button
            aria-label="Open menu"
            className="rounded-md p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Nav row */}
      <nav className="hidden border-t border-yovi-border bg-white md:block">
        <ul className="mx-auto flex max-w-[1440px] items-center gap-10 px-8 py-3 text-sm">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label} className="relative">
                <a
                  href={item.href}
                  className={`group relative inline-flex items-center gap-2 pb-1 transition-colors ${
                    item.active ? "text-yovi-primary font-semibold" : "text-yovi-text hover:text-yovi-primary"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                  <span
                    className={`absolute -bottom-3 left-0 h-0.5 bg-yovi-primary transition-all duration-300 ${
                      item.active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-yovi-border bg-white px-4 py-4 md:hidden"
        >
          <SearchBar />
          <ul className="mt-4 space-y-2 text-sm">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block rounded-md px-3 py-2 ${
                    item.active ? "bg-yovi-bg text-yovi-primary font-semibold" : "text-yovi-text"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex gap-2">
            <button className="flex-1 rounded-xl border border-yovi-primary px-4 py-2 text-sm font-semibold text-yovi-primary">Login</button>
            <button className="flex-1 rounded-xl bg-yovi-primary px-4 py-2 text-sm font-semibold text-white">Sign Up</button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function IconButton({
  icon,
  label,
  dotColor,
}: {
  icon: React.ReactNode;
  label: string;
  dotColor?: string;
}) {
  return (
    <button
      aria-label={label}
      className="group relative inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-yovi-muted transition-all hover:text-yovi-primary"
    >
      <span className="relative inline-flex transition-transform group-hover:scale-110">
        {icon}
        {dotColor && (
          <span className={`absolute -right-1 -top-1 h-2 w-2 rounded-full ${dotColor}`} />
        )}
      </span>
      <span className="hidden text-xs font-medium text-yovi-muted lg:block">{label}</span>
    </button>
  );
}