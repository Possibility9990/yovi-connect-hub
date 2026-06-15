import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, Eye, EyeOff, ShieldCheck, Apple } from "lucide-react";
import { AuthShell } from "@/components/auth/AuthShell";

export const Route = createFileRoute("/auth/login")({
  head: () => ({
    meta: [
      { title: "Login to YOVI — Nigeria's Trusted Marketplace" },
      {
        name: "description",
        content:
          "Log in to your YOVI account to continue buying, selling, and discovering trusted services near you.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({ identifier: "", password: "", remember: true });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <AuthShell
      title="Welcome Back"
      subtitle="Login to your YOVI account and continue buying, selling and discovering trusted services near you."
      footer={
        <div className="rounded-2xl border border-yovi-primary/30 bg-emerald-50/60 p-5">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yovi-primary/15 text-yovi-primary">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="font-bold text-yovi-primary">Your security is our priority</p>
              <p className="text-sm text-yovi-muted">
                we use industry-standard encryption to keep your information and transactions safe
              </p>
            </div>
          </div>
        </div>
      }
    >
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-yovi-border bg-white p-7 shadow-[0_4px_24px_-12px_rgba(16,24,40,0.08)] sm:p-9"
      >
        <header className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-yovi-text">Login to YOVI</h2>
          <p className="mt-2 text-sm text-yovi-text">
            Don&apos;t have an account?{" "}
            <Link to="/auth/signup" className="font-semibold text-yovi-primary hover:underline">
              Create Account
            </Link>
          </p>
        </header>

        <div className="mt-6 space-y-4">
          <Field label="Email or Phone Number">
            <InputIcon icon={<User className="h-4 w-4" />}>
              <input
                type="text"
                autoComplete="username"
                placeholder="Enter your email or phone number"
                value={form.identifier}
                onChange={(e) => setForm({ ...form, identifier: e.target.value })}
                className="w-full bg-transparent text-sm outline-none placeholder:text-yovi-muted"
              />
            </InputIcon>
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
                autoComplete="current-password"
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full bg-transparent text-sm outline-none placeholder:text-yovi-muted"
              />
            </InputIcon>
          </Field>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-yovi-text">
            <input
              type="checkbox"
              checked={form.remember}
              onChange={(e) => setForm({ ...form, remember: e.target.checked })}
              className="h-4 w-4 rounded border-yovi-border text-yovi-primary accent-yovi-primary"
            />
            Remember me
          </label>
          <a href="#" className="text-sm font-semibold text-yovi-primary hover:underline">
            Forget Password?
          </a>
        </div>

        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          className="mt-4 h-12 w-full rounded-xl bg-yovi-primary text-base font-semibold text-white shadow-sm transition hover:bg-yovi-secondary"
        >
          Login
        </motion.button>

        <div className="my-5 flex items-center gap-3 text-xs text-yovi-muted">
          <span className="h-px flex-1 bg-yovi-border" />
          <span>or continue</span>
          <span className="h-px flex-1 bg-yovi-border" />
        </div>

        <div className="space-y-3">
          <SocialButton
            label="Continue with Google"
            icon={
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <path
                  fill="#EA4335"
                  d="M12 10.2v3.9h5.5c-.24 1.4-1.66 4.1-5.5 4.1A6.2 6.2 0 1 1 12 5.8c1.77 0 2.96.75 3.64 1.4l2.48-2.4C16.55 3.3 14.5 2.4 12 2.4 6.7 2.4 2.4 6.7 2.4 12s4.3 9.6 9.6 9.6c5.55 0 9.22-3.9 9.22-9.4 0-.63-.07-1.12-.16-1.6H12z"
                />
              </svg>
            }
          />
          <SocialButton
            label="Continue with Apple"
            icon={<Apple className="h-5 w-5 fill-black text-black" />}
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 border-t border-yovi-border pt-5 text-sm">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-yovi-primary/10 text-yovi-primary">
            <ShieldCheck className="h-4 w-4" />
          </span>
          <p className="text-yovi-text">
            Protected by <span className="font-bold text-yovi-primary">YOVI</span> Escrow Security
          </p>
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

function SocialButton({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <button
      type="button"
      className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-yovi-border bg-white text-sm font-semibold text-yovi-text transition hover:border-yovi-primary hover:bg-emerald-50/40"
    >
      {icon}
      {label}
    </button>
  );
}
