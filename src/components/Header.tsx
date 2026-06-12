import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Bell, Menu, X } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { navigationItems } from "@/data/services";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yovi-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center gap-6 px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="logo-placeholder flex h-10 w-28 shrink-0 items-center justify-center rounded-md border border-dashed border-yovi-border bg-yovi-bg text-xs font-medium text-yovi-muted">
          Logo Here
        </div>

        {/* Search */}
        <div className="hidden flex-1 md:block">
          <SearchBar />
        </div>

        {/* Right cluster */}
        <div className="ml-auto flex items-center gap-3">
          <button aria-label="Cart" className="relative rounded-full p-2 transition-transform hover:scale-110">
            <ShoppingCart className="h-5 w-5 text-yovi-text" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-yovi-primary ring-2 ring-white" />
          </button>
          <button aria-label="Notifications" className="rounded-full p-2 transition-transform hover:scale-110">
            <Bell className="h-5 w-5 text-yovi-text" />
          </button>
          <div className="hidden h-9 w-9 shrink-0 rounded-full bg-yovi-bg ring-1 ring-yovi-border sm:block" aria-label="Profile" />
          <button className="hidden rounded-xl px-4 py-2 text-sm font-medium text-yovi-text transition-all hover:text-yovi-primary md:inline-block">
            Login
          </button>
          <button className="hidden rounded-xl bg-yovi-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-yovi-secondary md:inline-block">
            Sign Up
          </button>
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
                className={`group relative inline-flex pb-1 transition-colors ${
                  item.active ? "text-yovi-primary font-semibold" : "text-yovi-text hover:text-yovi-primary"
                }`}
              >
                {item.label}
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
            <button className="flex-1 rounded-xl border border-yovi-border px-4 py-2 text-sm font-medium">Login</button>
            <button className="flex-1 rounded-xl bg-yovi-primary px-4 py-2 text-sm font-semibold text-white">Sign Up</button>
          </div>
        </motion.div>
      )}
    </header>
  );
}