import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Sparkles, Headphones, ArrowRight } from "lucide-react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { FeatureCard } from "./FeatureCard";
import { ProductCard } from "./ProductCard";
import { ServiceCard } from "./ServiceCard";
import { TrustBanner } from "./TrustBanner";
import { products } from "@/data/products";
import { services } from "@/data/services";

const features = [
  { id: "escrow", icon: ShieldCheck, title: "Escrow Protection", description: "Your payments are safe until you confirm" },
  { id: "verified", icon: BadgeCheck, title: "Verified Users", description: "Trusted sellers and service providers" },
  { id: "quality", icon: Sparkles, title: "Quality Service", description: "Get the best professionals near you" },
  { id: "support", icon: Headphones, title: "24/7 Support", description: "We are here to help you anytime" },
];

export function Home() {
  return (
    <div className="min-h-screen bg-yovi-bg font-display text-yovi-text">
      <Header />
      <main>
        <Hero />

        {/* Trust features */}
        <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <FeatureCard key={f.id} icon={f.icon} title={f.title} description={f.description} index={i} />
            ))}
          </div>
        </section>

        {/* Featured products */}
        <section id="shop" className="mx-auto max-w-[1440px] px-4 pb-16 md:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-extrabold text-yovi-text sm:text-3xl"
            >
              Featured Products
            </motion.h2>
            <a href="#shop" className="group inline-flex items-center gap-1 text-sm font-semibold text-yovi-primary">
              View all products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* Popular services */}
        <section id="services" className="mx-auto max-w-[1440px] px-4 pb-16 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-2xl font-extrabold text-yovi-text sm:text-3xl"
          >
            Popular Service Near You
          </motion.h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
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