import {
  Wrench,
  Cpu,
  Droplets,
  Scissors,
  GraduationCap,
  Camera,
  Sparkles,
  Car,
} from "lucide-react";
import type { Service } from "@/types/yovi";

export const services: Service[] = [
  { id: "mechanics", name: "Mechanics", available: 1500, icon: Wrench },
  { id: "electronics", name: "Electronics", available: 900, icon: Cpu },
  { id: "plumbers", name: "Plumbers", available: 530, icon: Droplets },
  { id: "tailors", name: "Tailors", available: 1050, icon: Scissors },
  { id: "tutors", name: "Tutors", available: 1340, icon: GraduationCap },
  { id: "photographers", name: "Photographers", available: 604, icon: Camera },
  { id: "home-cleaners", name: "Home Cleaners", available: 1934, icon: Sparkles },
  { id: "car-wash", name: "Car Wash", available: 505, icon: Car },
];

export const navigationItems = [
  { label: "Home", href: "/", active: true },
  { label: "Shop", href: "#shop" },
  { label: "Services", href: "#services" },
  { label: "Rentals", href: "#rentals" },
  { label: "Requests", href: "#requests" },
  { label: "About", href: "#about" },
];