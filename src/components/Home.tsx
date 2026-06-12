import { motion } from "framer-motion";
import {
  ShieldCheck,
  UserCheck,
  Award,
  Headphones,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ProductCard } from "./ProductCard";
import { ServiceCard } from "./ServiceCard";
import { TrustBanner } from "./TrustBanner";
import { products } from "@/data/products";
import { services } from "@/data/services";

const features = [
  { id: "escrow", icon: ShieldCheck, title: "Escrow Protection", description: "Your payments are safe until you confirm." },
  { id: "verified", icon: UserCheck, title: "Verified Users", description: "Trusted sellers and service providers." },
  { id: "quality", icon: Award, title: "Quality Services", description: "Get the best professionals near you." },
  { id: "support", icon: Headphones, title: "24/7 Support", description: "We're here to help you anytime." },
];

export function Home() {
  return (
    <div className="min-h-screen bg-yovi-bg font-display text-yovi-text">
      <Header />
      <main>
        <Hero />

        {/* Trust features — inline row with dividers */}
        <section className="border-y border-yovi-border bg-white">
          <div className="mx-auto max-w-[1440px] px-4 md:px-8">
            <div className="grid grid-cols-1 divide-y divide-yovi-border md:grid-cols-4 md:divide-x md:divide-y-0">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-3 px-4 py-5 md:px-6 md:py-6"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yovi-primary/10 text-yovi-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-yovi-text">{f.title}</p>
                      <p className="mt-1 text-xs text-yovi-muted">{f.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured products */}
        <section id="products" className="mx-auto max-w-[1440px] px-4 pt-12 pb-12 md:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-yovi-text sm:text-2xl"
            >
              Featured Products
            </motion.h2>
            <a href="#products" className="group inline-flex items-center gap-1 text-sm font-semibold text-yovi-primary">
              View all products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="relative">
            <button
              aria-label="Previous"
              className="absolute -left-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-yovi-border bg-white text-yovi-text shadow-md transition-all hover:text-yovi-primary lg:flex"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next"
              className="absolute -right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-yovi-border bg-white text-yovi-text shadow-md transition-all hover:text-yovi-primary lg:flex"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Popular services */}
        <section id="services" className="mx-auto max-w-[1440px] px-4 pb-12 md:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-yovi-text sm:text-2xl"
            >
              Popular Services Near You
            </motion.h2>
            <a href="#services" className="group inline-flex items-center gap-1 text-sm font-semibold text-yovi-primary">
              View all services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </section>

        <TrustBanner />
      </main>
    </div>
  );
}