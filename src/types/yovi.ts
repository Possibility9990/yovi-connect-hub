import type { LucideIcon } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface Service {
  id: string;
  name: string;
  available: number;
  icon: LucideIcon;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface TrustStat {
  title: string;
  value: string;
  caption: string;
}