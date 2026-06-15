import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, RefreshCw, Lock } from "lucide-react";
import { AuthShell } from "@/components/auth/AuthShell";

export const Route = createFileRoute("/auth/verify")({
  head: () => ({
    meta: [
      { title: "Verify Your Phone Number — YOVI" },
      {
        name: "description",
        content:
          "Enter the 6-digit verification code sent to your phone to secure your YOVI account.",
      },
    ],
  }),
  component: VerifyPage,
});

const OTP_LENGTH = 6;
const INITIAL_SECONDS = 116; // 01:56

function VerifyPage() {
  const [digits, setDigits] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [password, setPassword] = useState("");
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = window.setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => window.clearInterval(id);
  }, [seconds]);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  function setDigit(idx: number, value: string) {
    const v = value.replace(/\D/g, "").slice(-1);
    setDigits((prev) => {
      const next = [...prev];
      next[idx] = v;
      return next;
    });
    if (v && idx < OTP_LENGTH - 1) inputs.current[idx + 1]?.focus();
  }

  function handleKeyDown(idx: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !digits[idx] && idx > 0) {
      inputs.current[idx - 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!text) return;
    e.preventDefault();
    const next = Array(OTP_LENGTH).fill("");
    for (let i = 0; i < text.length; i++) next[i] = text[i];
    setDigits(next);
    inputs.current[Math.min(text.length, OTP_LENGTH - 1)]?.focus();
  }

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Frontend-only.
  }

  return (
    <AuthShell
      title="One Time Code Verification"
      subtitle="Enter the 6-digit code sent to your phone number to verify your account."
      footer={<SecurityCallout />}
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
            Verify Your Phone Number
          </h2>
          <p className="mt-2 text-sm text-yovi-muted">
            We&rsquo;ve sent a 6-digit verification code to
          </p>
          <p className="mt-1 text-sm font-semibold text-yovi-primary">
            +234 816 778 3409{" "}
            <Link to="/auth/signup" className="ml-1 font-semibold text-yovi-primary hover:underline">
              Change
            </Link>
          </p>
        </header>

        <div className="mt-7 flex justify-center gap-2.5 sm:gap-3" onPaste={handlePaste}>
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              value={d}
              onChange={(e) => setDigit(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={1}
              aria-label={`Digit ${i + 1}`}
              className={`h-12 w-10 rounded-xl border text-center text-lg font-bold text-yovi-text outline-none transition sm:h-14 sm:w-12 ${
                d
                  ? "border-yovi-primary ring-2 ring-yovi-primary/20"
                  : "border-yovi-border focus:border-yovi-primary focus:ring-2 focus:ring-yovi-primary/20"
              }`}
            />
          ))}
        </div>

        <div className="mt-6">
          <label className="mb-1.5 block text-sm font-semibold text-yovi-text">Password</label>
          <div className="flex h-11 items-center gap-2.5 rounded-xl border border-yovi-border bg-white px-3 transition focus-within:border-yovi-primary focus-within:ring-2 focus-within:ring-yovi-primary/20">
            <span className="text-yovi-muted"><Lock className="h-4 w-4" /></span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="w-full bg-transparent text-sm outline-none placeholder:text-yovi-muted"
            />
          </div>
        </div>

        <p className="mt-5 text-center text-sm text-yovi-muted">
          Code expires in <span className="ml-1 font-semibold text-yovi-orange">{mm}:{ss}</span>
        </p>

        <div className="mt-3 flex items-start gap-3 rounded-xl border border-yovi-border bg-yovi-bg/60 px-4 py-3">
          <span className="mt-0.5 text-yovi-primary"><ShieldCheck className="h-5 w-5" /></span>
          <div className="text-sm">
            <p className="font-semibold text-yovi-text">Didn&rsquo;t receive the code?</p>
            <p className="text-yovi-muted">Check your spam folder or request a new code</p>
          </div>
        </div>

        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          className="mt-5 h-12 w-full rounded-xl bg-yovi-primary text-base font-semibold text-white shadow-sm transition hover:bg-yovi-secondary"
        >
          Verify Code
        </motion.button>

        <div className="my-4 flex items-center gap-3 text-xs text-yovi-muted">
          <span className="h-px flex-1 bg-yovi-border" />
          <span>or</span>
          <span className="h-px flex-1 bg-yovi-border" />
        </div>

        <button
          type="button"
          onClick={() => setSeconds(INITIAL_SECONDS)}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-yovi-border bg-white text-base font-semibold text-yovi-primary transition hover:bg-yovi-primary/5"
        >
          Resend Code <RefreshCw className="h-4 w-4" />
        </button>

        <div className="mt-5 flex items-center justify-center gap-2 text-sm text-yovi-muted">
          <Lock className="h-4 w-4" />
          <span>
            Protected by{" "}
            <span className="font-extrabold text-yovi-primary">YOVI</span>{" "}
            <span className="font-semibold text-yovi-text">Escrow Security</span>
          </span>
        </div>
      </motion.form>
    </AuthShell>
  );
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