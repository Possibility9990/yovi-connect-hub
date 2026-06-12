import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import type { Product } from "@/types/yovi";

const formatter = new Intl.NumberFormat("en-NG");

export function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group overflow-hidden rounded-2xl border border-yovi-border bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="relative aspect-square overflow-hidden bg-yovi-bg">
        <div className="flex h-full w-full items-center justify-center text-sm font-medium text-yovi-muted transition-transform duration-500 group-hover:scale-105">
          Product Image
        </div>
        <motion.button
          whileTap={{ scale: 0.85 }}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400, damping: 14 }}
          onClick={() => setLiked((v) => !v)}
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${liked ? "fill-yovi-orange text-yovi-orange" : "text-yovi-text"}`}
          />
        </motion.button>
      </div>
      <div className="p-4">
        <h3 className="truncate text-sm font-semibold text-yovi-text">{product.name}</h3>
        <p className="mt-1 text-base font-bold text-yovi-primary">
          ₦{formatter.format(product.price)}
        </p>
        <div className="mt-1.5 flex items-center gap-1 text-xs">
          <Star className="h-3.5 w-3.5 fill-yovi-orange text-yovi-orange" />
          <span className="font-medium text-yovi-text">{product.rating}</span>
          <span className="text-yovi-muted">({product.reviews})</span>
        </div>
      </div>
    </motion.article>
  );
}