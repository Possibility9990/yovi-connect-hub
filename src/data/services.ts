import {
  Wrench,
  Zap,
  Droplets,
  Scissors,
  GraduationCap,
  Camera,
  Sparkles,
  Car,
  Home as HomeIcon,
  ShoppingBag,
  Wrench as ServicesIcon,
  ShoppingCart,
  ClipboardList,
  Info,
} from "lucide-react";
import type { Service } from "@/types/yovi";

export const services: Service[] = [
  { id: "mechanics", name: "Mechanics", available: 1245, icon: Wrench },
  { id: "electricians", name: "Electricians", available: 876, icon: Zap },
  { id: "plumbers", name: "Plumbers", available: 642, icon: Droplets },
  { id: "tailors", name: "Tailors", available: 1032, icon: Scissors },
  { id: "tutors", name: "Tutors", available: 1876, icon: GraduationCap },
  { id: "photographers", name: "Photographers", available: 543, icon: Camera },
  { id: "home-cleaners", name: "Home Cleaners", available: 912, icon: Sparkles },
  { id: "car-wash", name: "Car Wash", available: 412, icon: Car },
];

export const navigationItems = [
  { label: "Home", href: "/", active: true, icon: HomeIcon },
  { label: "Shop", href: "#products", active: false, icon: ShoppingBag },
  { label: "Services", href: "#services", active: false, icon: ServicesIcon },
  { label: "Rentals", href: "#rentals", active: false, icon: ShoppingCart },
  { label: "Requests", href: "#requests", active: false, icon: ClipboardList },
  { label: "About", href: "#about", active: false, icon: Info },
];