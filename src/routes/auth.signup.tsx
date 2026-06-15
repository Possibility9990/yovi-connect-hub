import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, Eye, EyeOff, ChevronDown, ShieldCheck } from "lucide-react";
import { AuthShell } from "@/components/auth/AuthShell";

export const Route = createFileRoute("/auth/signup")({
  head: () => ({
    meta: [
      { title: "Create Your YOVI Account — Join Nigeria's Trusted Marketplace" },
      {
        name: "description",
        content:
          "Sign up for YOVI to buy, sell, and discover trusted services across Nigeria with secure escrow payments and verified sellers.",
      },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
    accept: false,
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Frontend-only; wiring to Lovable Cloud auth happens later.
  }

  return (
    <AuthShell
      title={
        <>
          Join Nigeria&apos;s Most{" "}
          <span className="text-yovi-primary">Trusted</span> Marketplace
        </>
      }
      subtitle="Create your account and start buying, selling, and discovering trusted services."
    >
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-yovi-border bg-white p-7 shadow-[0_4px_24px_-12px_rgba(16,24,40,0.08)] sm:p-9"
      >
        <header className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-yovi-text">
            Create Your Account
          </h2>
          <p className="mt-2 text-sm text-yovi-muted">
            Fill in your details to get started with YOVI
          </p>
        </header>

        <div className="mt-6 space-y-4">
          <Field label="Full Name">
            <InputIcon icon={<User className="h-4 w-4" />}>
              <input
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="w-full bg-transparent text-sm outline-none placeholder:text-yovi-muted"
              />
            </InputIcon>
          </Field>

          <Field label="Email Address">
            <InputIcon icon={<Mail className="h-4 w-4" />}>
              <input
                type="email"
                autoComplete="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent text-sm outline-none placeholder:text-yovi-muted"
              />
            </InputIcon>
          </Field>

          <Field label="Phone Number">
            <div className="flex h-11 items-center gap-2 rounded-xl border border-yovi-border bg-white px-3 transition focus-within:border-yovi-primary focus-within:ring-2 focus-within:ring-yovi-primary/20">
              <button
                type="button"
                className="flex items-center gap-1.5 border-r border-yovi-border pr-2 text-sm font-medium text-yovi-text"
                aria-label="Country code"
              >
                <span aria-hidden>🇳🇬</span>
                <span>+234</span>
                <ChevronDown className="h-3.5 w-3.5 text-yovi-muted" />
              </button>
              <input
                type="tel"
                autoComplete="tel"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent text-sm outline-none placeholder:text-yovi-muted"
              />
            </div>
          </Field>

          <Field label="Password">
            <InputIcon
              icon={<Lock className="h-4 w-4" />}
              trailing={
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  aria-label={showPw ? "Hide password" : "Show password"}
                  className="text-yovi-muted hover:text-yovi-text"
                >
                  {showPw ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </button>
              }
            >
              <input
                type={showPw ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Create a password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full bg-transparent text-sm outline-none placeholder:text-yovi-muted"
              />
            </InputIcon>
          </Field>

          <Field label="Confirmed Password">
            <InputIcon
              icon={<Lock className="h-4 w-4" />}
              trailing={
                <button
                  type="button"
                  onClick={() => setShowConfirm((s) => !s)}
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                  className="text-yovi-muted hover:text-yovi-text"
                >
                  {showConfirm ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </button>
              }
            >
              <input
                type={showConfirm ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Confirm your password"
                value={form.confirm}
                onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                className="w-full bg-transparent text-sm outline-none placeholder:text-yovi-muted"
              />
            </InputIcon>
          </Field>
        </div>

        <label className="mt-5 flex items-center gap-2.5 text-sm text-yovi-text">
          <input
            type="checkbox"
            checked={form.accept}
            onChange={(e) => setForm({ ...form, accept: e.target.checked })}
            className="h-4 w-4 rounded border-yovi-border text-yovi-primary accent-yovi-primary"
          />
          <span>
            I agree to the{" "}
            <a href="#" className="font-semibold text-yovi-primary hover:underline">
              Terms &amp; Conditions
            </a>
          </span>
        </label>

        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          className="mt-5 h-12 w-full rounded-xl bg-yovi-primary text-base font-semibold text-white shadow-sm transition hover:bg-yovi-secondary"
        >
          Create Account
        </motion.button>

        <div className="my-5 flex items-center gap-3 text-xs text-yovi-muted">
          <span className="h-px flex-1 bg-yovi-border" />
          <span>or</span>
          <span className="h-px flex-1 bg-yovi-border" />
        </div>

        <p className="text-center text-sm text-yovi-text">
          Already have an account?{" "}
          <Link to="/auth/login" className="font-semibold text-yovi-primary hover:underline">
            Log in
          </Link>
        </p>

        <div className="mt-6 flex items-start gap-3 border-t border-yovi-border pt-5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yovi-primary/10 text-yovi-primary">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div className="text-sm">
            <p className="font-semibold text-yovi-text">Protected by YOVI Escrow Security</p>
            <p className="text-yovi-muted">Your data and transactions are 100% secure</p>
          </div>
        </div>
      </motion.form>
    </AuthShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-yovi-text">{label}</label>
      {children}
    </div>
  );
}

function InputIcon({
  icon,
  trailing,
  children,
}: {
  icon: React.ReactNode;
  trailing?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-11 items-center gap-2.5 rounded-xl border border-yovi-border bg-white px-3 transition focus-within:border-yovi-primary focus-within:ring-2 focus-within:ring-yovi-primary/20">
      <span className="text-yovi-muted">{icon}</span>
      {children}
      {trailing}
    </div>
  );
}
