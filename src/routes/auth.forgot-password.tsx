import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ShieldCheck, CheckCircle2 } from "lucide-react";
import { AuthShell } from "@/components/auth/AuthShell";

export const Route = createFileRoute("/auth/forgot-password")({
  head: () => ({
    meta: [
      { title: "Forgot Password — YOVI" },
      {
        name: "description",
        content:
          "Reset your YOVI account password securely. Enter your email or phone to receive a reset code.",
      },
    ],
  }),
  component: ForgotPasswordPage,
});

type Step = "request" | "reset" | "done";

function ForgotPasswordPage() {
  const [step, setStep] = useState<Step>("request");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <AuthShell
      title={
        <>
          Forget <br className="hidden lg:block" />
          Password
        </>
      }
      subtitle="Enter your email address or phone number and we'll send you a reset code."
      footer={<SecurityCallout />}
    >
      <AnimatePresence mode="wait">
        {step === "request" && (
          <RequestCard
            key="request"
            identifier={identifier}
            setIdentifier={setIdentifier}
            onSubmit={() => setStep("reset")}
          />
        )}
        {(step === "reset" || step === "done") && (
          <ResetCard
            key="reset"
            password={password}
            confirm={confirm}
            setPassword={setPassword}
            setConfirm={setConfirm}
            showPw={showPw}
            showConfirm={showConfirm}
            setShowPw={setShowPw}
            setShowConfirm={setShowConfirm}
            done={step === "done"}
            onSubmit={() => setStep("done")}
          />
        )}
      </AnimatePresence>
    </AuthShell>
  );
}

function RequestCard({
  identifier,
  setIdentifier,
  onSubmit,
}: {
  identifier: string;
  setIdentifier: (v: string) => void;
  onSubmit: () => void;
}) {
  return (
    <motion.form
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="rounded-2xl border border-yovi-border bg-white p-7 shadow-[0_4px_24px_-12px_rgba(16,24,40,0.08)] sm:p-9"
    >
      <header className="text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-yovi-primary/30">
          <ShieldCheck className="h-7 w-7 text-yovi-orange" strokeWidth={2.25} />
        </div>
        <h2 className="text-2xl font-extrabold tracking-tight text-yovi-text">Reset Your Password</h2>
        <p className="mt-2 text-sm text-yovi-muted">
          Enter your email or phone to receive a secure reset code
        </p>
      </header>

      <div className="mt-6">
        <label className="mb-1.5 block text-sm font-semibold text-yovi-text">
          Email or Phone Number
        </label>
        <div className="flex h-11 items-center gap-2.5 rounded-xl border border-yovi-border bg-white px-3 transition focus-within:border-yovi-primary focus-within:ring-2 focus-within:ring-yovi-primary/20">
          <span className="text-yovi-muted"><Mail className="h-4 w-4" /></span>
          <input
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            type="text"
            placeholder="you@example.com or +234..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-yovi-muted"
          />
        </div>
      </div>

      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        className="mt-6 h-12 w-full rounded-xl bg-yovi-primary text-base font-semibold text-white shadow-sm transition hover:bg-yovi-secondary"
      >
        Send Reset Code
      </motion.button>

      <p className="mt-5 text-center text-sm text-yovi-text">
        Remember your password?{" "}
        <Link to="/auth/login" className="font-semibold text-yovi-primary hover:underline">
          Log in
        </Link>
      </p>
    </motion.form>
  );
}

function ResetCard({
  password,
  confirm,
  setPassword,
  setConfirm,
  showPw,
  showConfirm,
  setShowPw,
  setShowConfirm,
  done,
  onSubmit,
}: {
  password: string;
  confirm: string;
  setPassword: (v: string) => void;
  setConfirm: (v: string) => void;
  showPw: boolean;
  showConfirm: boolean;
  setShowPw: (v: boolean) => void;
  setShowConfirm: (v: boolean) => void;
  done: boolean;
  onSubmit: () => void;
}) {
  const strength = useMemo(() => scoreStrength(password), [password]);

  return (
    <motion.form
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      onSubmit={(e) => {
        e.preventDefault();
        if (password && password === confirm) onSubmit();
      }}
      className="rounded-2xl border border-yovi-border bg-white p-7 shadow-[0_4px_24px_-12px_rgba(16,24,40,0.08)] sm:p-9"
    >
      <header className="text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-yovi-primary/30">
          <ShieldCheck className="h-7 w-7 text-yovi-orange" strokeWidth={2.25} />
        </div>
        <h2 className="text-2xl font-extrabold tracking-tight text-yovi-text">Create New Password</h2>
        <p className="mt-2 text-sm text-yovi-muted">Set a strong password to secure your account</p>
      </header>

      <div className="mt-6">
        <label className="mb-1.5 block text-sm font-semibold text-yovi-text">New Password</label>
        <PasswordField
          value={password}
          onChange={setPassword}
          show={showPw}
          toggle={() => setShowPw(!showPw)}
        />
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="font-medium text-yovi-text">Password Strength</span>
          <span
            className={`font-semibold ${
              strength.score >= 3 ? "text-yovi-primary" : "text-yovi-orange"
            }`}
          >
            {strength.label}
          </span>
        </div>
        <div className="mt-1.5 flex gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i < strength.score ? "bg-yovi-primary" : "bg-yovi-border"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-semibold text-yovi-text">Confirm Password</label>
        <PasswordField
          value={confirm}
          onChange={setConfirm}
          show={showConfirm}
          toggle={() => setShowConfirm(!showConfirm)}
        />
      </div>

      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-yovi-primary text-base font-semibold text-white shadow-sm transition hover:bg-yovi-secondary disabled:opacity-60"
      >
        <ShieldCheck className="h-5 w-5" />
        Update Password
      </motion.button>

      {done && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-start gap-2.5 rounded-xl"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-yovi-primary" />
          <div className="text-sm">
            <p className="font-bold text-yovi-primary">Password updated successfully!</p>
            <p className="text-yovi-muted">You can now log in with your new password</p>
          </div>
        </motion.div>
      )}
    </motion.form>
  );
}

function PasswordField({
  value,
  onChange,
  show,
  toggle,
}: {
  value: string;
  onChange: (v: string) => void;
  show: boolean;
  toggle: () => void;
}) {
  return (
    <div className="flex h-11 items-center gap-2.5 rounded-xl border border-yovi-border bg-white px-3 transition focus-within:border-yovi-primary focus-within:ring-2 focus-within:ring-yovi-primary/20">
      <span className="text-yovi-muted"><Lock className="h-4 w-4" /></span>
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="new-password"
        placeholder="••••••••"
        className="w-full bg-transparent text-sm outline-none placeholder:text-yovi-muted"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={show ? "Hide password" : "Show password"}
        className="text-yovi-muted hover:text-yovi-text"
      >
        {show ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
      </button>
    </div>
  );
}

function scoreStrength(pw: string): { score: number; label: string } {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const label = ["Weak", "Weak", "Fair", "Good", "Strong"][score] ?? "Weak";
  return { score, label };
}

function SecurityCallout() {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 px-5 py-4">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-yovi-primary ring-1 ring-yovi-primary/30">
        <ShieldCheck className="h-5 w-5" />
      </span>
      <div className="text-sm">
        <p className="font-bold text-yovi-primary">Your security is our priority</p>
        <p className="text-yovi-muted">
          we use industry-standard encryption to keep your information and transactions safe
        </p>
      </div>
    </div>
  );
}