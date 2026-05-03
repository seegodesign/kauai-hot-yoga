"use client";

import { useEffect, useState } from "react";
import { X, Timer } from "lucide-react";

const STORAGE_KEY = "khy_intro_offer_seen";
const EXPIRY_KEY = "khy_intro_offer_expiry";
const CTA_URL = "https://clients.mindbodyonline.com/classic/ws?studioid=605678&stype=43&prodid=102264";
const OFFER_DURATION_MS = 10 * 60 * 100 * 3;

function formatTime(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const s = (totalSeconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export function NewClientPopup() {
  const [open, setOpen] = useState(false);
  const [remaining, setRemaining] = useState(OFFER_DURATION_MS);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  // Show popup after 3s on first visit
  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    const devQueryParam = new URLSearchParams(window.location.search).get("dev");
    if (seen && !devQueryParam) return;

    const timer = setTimeout(() => {
      localStorage.setItem(EXPIRY_KEY, String(Date.now() + OFFER_DURATION_MS));
      setRemaining(OFFER_DURATION_MS);
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Countdown tick — only runs while popup is open
  useEffect(() => {
    if (!open) return;

    const tick = setInterval(() => {
      const expiry = Number(localStorage.getItem(EXPIRY_KEY));
      const left = expiry - Date.now();
      setRemaining(left);
      if (left <= 0) {
        clearInterval(tick);
        dismiss();
      }
    }, 500);

    return () => clearInterval(tick);
  }, [open]);

  if (!open) return null;

  const urgent = remaining < 60000;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative z-10 bg-purple rounded-2xl shadow-2xl w-full max-w-md overflow-hidden text-white text-center px-8 py-10">
        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label="Close offer"
          className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/20 border border-orange/30 rounded-full px-3 py-1 mb-5">
          Web-Only Offer
        </span>

        <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">New Client Special</p>

        <h2 className="text-3xl font-extrabold leading-tight mb-1">
          <span className="text-orange">3 classes</span> for only
        </h2>
        <p className="text-6xl font-extrabold mb-5">$59</p>

        <p className="text-sm text-white/80 leading-relaxed mb-6">
          Your first step into hot yoga, breathwork, and recovery — all levels welcome, no experience needed.
        </p>

        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={dismiss}
          className="block w-full bg-orange hover:bg-orange-dark text-white font-bold py-3 rounded-full transition-colors"
        >
          Claim This Offer →
        </a>

        {/* Countdown timer */}
        <div className={`mt-6 flex items-center justify-center gap-2 rounded-xl px-4 py-3 ${urgent ? "bg-red-500/20 border border-red-400/40" : "bg-white/10 border border-white/20"}`}>
          <Timer size={16} className={urgent ? "text-red-300 animate-pulse" : "text-white/60"} />
          <span className="text-xs text-white/70">Offer expires in</span>
          <span className={`font-bold text-lg tabular-nums tracking-wider ${urgent ? "text-red-300" : "text-white"}`}>{formatTime(remaining)}</span>
        </div>

        <p className="mt-4 text-xs text-white/40">For new clients only. Valid at Kauai Hot Yoga.</p>
      </div>
    </div>
  );
}
