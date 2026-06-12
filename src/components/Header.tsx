import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Bell, Menu, X, MessageCircle, Heart, ChevronDown, Search, ShoppingBag } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { navigationItems } from "@/data/services";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yovi-border bg-white/95 backdrop-blur">
      {/* Top bar */}
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-3 md:gap-6 md:px-8">
        {/* Logo lockup placeholder */}
        <a href="/" className="logo-placeholder flex shrink-0 items-center gap-2" aria-label="YOVI home">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yovi-primary/10 text-yovi-primary">
            <ShoppingBag className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-lg font-extrabold tracking-tight text-yovi-primary">YOVI</p>
            <p className="text-[10px] font-medium text-yovi-muted">Buy. Sell. Trust.</p>
          </div>
        </a>

        {/* Search */}
        <div className="hidden flex-1 md:block">
          <SearchBar />
        </div>

        {/* Right cluster */}
        <div className="ml-auto flex items-center gap-1 md:gap-2">
          <IconButton icon={<MessageCircle className="h-5 w-5" />} label="Messages" />
          <IconButton icon={<Heart className="h-5 w-5" />} label="Saved" />
          <IconButton icon={<Bell className="h-5 w-5" />} label="Notifications" badge={3} />
          <IconButton icon={<ShoppingCart className="h-5 w-5" />} label="Cart" badge={3} />

          <div className="ml-2 hidden items-center gap-2 md:flex">
            <button className="rounded-xl border border-yovi-primary px-4 py-2 text-sm font-semibold text-yovi-primary transition-all hover:-translate-y-0.5 hover:bg-yovi-primary/5">
              Login
            </button>
            <button className="rounded-xl bg-yovi-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-yovi-secondary">
              Sign Up
            </button>
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
        <ul className="mx-auto flex max-w-[1440px] items-center gap-8 px-8 py-3 text-sm">
          {navigationItems.map((item) => (
            <li key={item.label} className="relative">
              <a
                href={item.href}
                className={`group relative inline-flex items-center gap-1 pb-1 transition-colors ${
                  item.active ? "text-yovi-primary font-semibold" : "text-yovi-text hover:text-yovi-primary"
                }`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                <span
                  className={`absolute -bottom-3 left-0 h-0.5 bg-yovi-primary transition-all duration-300 ${
                    item.active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
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
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  badge?: number;
}) {
  return (
    <button
      aria-label={label}
      className="group relative flex flex-col items-center gap-0.5 rounded-lg px-2 py-1.5 text-yovi-muted transition-all hover:text-yovi-primary"
    >
      <span className="relative inline-flex transition-transform group-hover:scale-110">
        {icon}
        {badge !== undefined && (
          <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-yovi-orange px-1 text-[10px] font-bold text-white">
            {badge}
          </span>
        )}
      </span>
      <span className="hidden text-[10px] font-medium lg:block">{label}</span>
    </button>
  );
}