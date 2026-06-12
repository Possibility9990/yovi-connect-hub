import type { LucideIcon } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// YOVI Domain Data Structure
// Source: Yovi Business Plan V2 (Customer / Seller / Agent / Rider ecosystem
// with escrow, save-up, collective buying, rider-confirmed delivery, reviews).
// These types are the single source of truth for future pages. UI components
// may use a subset of fields — never invent fields outside this file.
// ─────────────────────────────────────────────────────────────────────────────

export type UserRole = "customer" | "seller" | "agent" | "rider" | "admin";

export type VerificationStatus = "unverified" | "pending" | "verified" | "rejected";

export interface BaseUser {
  id: string;
  fullName: string;
  phone: string;            // OTP-verified at registration
  email?: string;
  avatarUrl?: string;
  role: UserRole;
  createdAt: string;        // ISO timestamp
  verification: {
    phone: VerificationStatus;
    governmentId: VerificationStatus; // Passport / Driver's licence / National ID
    facial: VerificationStatus;       // With liveness check
  };
}

export interface Customer extends BaseUser {
  role: "customer";
  walletBalance: number;     // Save Up wallet (NGN)
  savedProductIds: string[];
}

export interface Seller extends BaseUser {
  role: "seller";
  storeName: string;
  // Sellers are anonymous to buyers — contact info never exposed in the UI.
  isAnonymous: true;
  rating: number;            // Aggregated from product reviews
  totalSales: number;
  joinedAt: string;
}

export interface Agent extends BaseUser {
  role: "agent";
  referralCode: string;
  totalEarnings: number;     // NGN paid out from seller-funded commissions
  totalReferrals: number;
}

export interface Rider extends BaseUser {
  role: "rider";
  logisticsPartnerId: string;
  rating: number;            // 1–5 from delivery confirmations
  totalDeliveries: number;
}

// ─── Catalog ────────────────────────────────────────────────────────────────

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: LucideIcon;
  parentId?: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;             // NGN
  currency?: "NGN";
  images?: string[];
  categoryId?: string;
  sellerId?: string;         // Reference to Seller — buyer never sees seller details
  stock?: number;
  // Agent commission funded by the seller at listing time. Yovi never pays.
  agentCommission?: number;  // NGN per successful sale
  // Collective (group) buying — optional discounted price if group completes.
  groupBuy?: {
    enabled: boolean;
    groupPrice: number;
    minBuyers: number;
    windowOpensAt?: string;  // Daily 12PM window
  };
  rating: number;
  reviews: number;
  createdAt?: string;
}

export interface Service {
  id: string;
  name: string;
  available: number;
  icon: LucideIcon;
  categoryId?: string;
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
  hasDropdown?: boolean;
}

export interface TrustStat {
  title: string;
  value: string;
  caption: string;
}

// ─── Orders, Escrow & Delivery ──────────────────────────────────────────────

export type PaymentChannel =
  | "card"           // Visa / Mastercard / Verve
  | "bank_transfer"
  | "ussd"
  | "direct_debit"
  | "paystack"
  | "flutterwave"
  | "wallet";        // Save Up wallet

export type EscrowStatus =
  | "pending"        // Awaiting payment
  | "held"           // Funds captured, held by Yovi
  | "released"       // Released to seller after buyer confirmation
  | "refunded";      // Returned to buyer after rejection / silent seller

export type OrderStatus =
  | "placed"
  | "paid"
  | "shipped"
  | "out_for_delivery"
  | "delivered"      // Buyer accepted at the door
  | "rejected"       // Buyer rejected at the door
  | "refunded"
  | "cancelled";

export interface OrderItem {
  productId: string;
  quantity: number;
  unitPrice: number;
  agentCommission?: number;
  agentId?: string;          // Referring agent, if any
}

export interface Order {
  id: string;
  buyerId: string;
  items: OrderItem[];
  subtotal: number;
  yoviFee: number;           // Flat 5% of subtotal
  total: number;
  paymentChannel: PaymentChannel;
  escrowStatus: EscrowStatus;
  status: OrderStatus;
  riderId?: string;
  logisticsPartnerId?: string;
  trackingNumber?: string;
  createdAt: string;
  deliveredAt?: string;
  rejectionReason?: string;
}

// ─── Save Up Wallet ─────────────────────────────────────────────────────────

export interface SaveUpGoal {
  id: string;
  customerId: string;
  productId: string;
  targetAmount: number;
  savedAmount: number;
  startedAt: string;
  completedAt?: string;
  status: "active" | "completed" | "cancelled";
}

// ─── Reviews (verified purchase only) ───────────────────────────────────────

export interface ProductReview {
  id: string;
  productId: string;
  orderId: string;           // Must be a delivered order
  buyerId: string;
  rating: 1 | 2 | 3 | 4 | 5;
  body?: string;
  createdAt: string;
}

export interface DeliveryReview {
  id: string;
  orderId: string;
  riderId: string;
  logisticsPartnerId: string;
  rating: 1 | 2 | 3 | 4 | 5;
  createdAt: string;
}

// ─── Logistics ──────────────────────────────────────────────────────────────

export interface LogisticsPartner {
  id: string;
  name: string;
  coverageStates: string[];  // Nigerian states served
  rating: number;
  activeRiders: number;
}

// ─── Agent commission ledger ────────────────────────────────────────────────

export interface CommissionPayout {
  id: string;
  agentId: string;
  orderId: string;
  productId: string;
  amount: number;            // NGN, funded by seller
  status: "pending" | "paid";
  createdAt: string;
}