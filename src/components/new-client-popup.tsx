"use client";

import { useEffect, useState } from "react";
import { X, Timer } from "lucide-react";

const STORAGE_KEY = "khy_intro_offer_seen";
const EXPIRY_KEY = "khy_intro_offer_expiry";
const GHL_FORM_URL = "https://api.leadconnectorhq.com/widget/form/EiBmlTeQrPhWuOSHEw8O";
const OFFER_DURATION_MS = 10 * 60 * 100 * 3;

function formatTime(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const s = (totalSeconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export function NewClientPopup() {
  const [open, setOpen] = useState(false);
  const [claimed, setClaimed] = useState(false);
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
      // Always reset expiry so stale keys from previous sessions don't cause instant dismiss
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
  const timerBoxClass = urgent
    ? "mt-6 flex items-center gap-2 rounded-xl px-4 py-3 bg-red-500/20 border border-red-400/40"
    : "mt-6 flex items-center gap-2 rounded-xl px-4 py-3 bg-white/10 border border-white/20";
  const timerIconClass = urgent ? "text-red-300 animate-pulse" : "text-white/60";
  const timerNumClass = urgent
    ? "font-bold text-lg tabular-nums tracking-wider text-red-300"
    : "font-bold text-lg tabular-nums tracking-wider text-white";
  const offerPanelClass = claimed
    ? "bg-purple flex-1 px-8 py-10 flex-col justify-start text-white hidden lg:flex"
    : "bg-purple flex-1 px-8 py-10 flex flex-col justify-start text-white";
  const formPanelClass = claimed
    ? "flex-2 flex flex-col justify-center bg-white overflow-y-auto max-h-screen"
    : "flex-2 hidden lg:flex flex-col justify-center bg-white overflow-y-auto max-h-screen";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col lg:flex-row my-auto">
        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label="Close offer"
          className="absolute top-3 right-3 text-white/60 hover:text-white lg:text-purple/60 lg:hover:text-purple transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Step 1: offer info */}
        <div className={offerPanelClass}>
          <span className="self-start text-xs font-bold uppercase tracking-widest bg-white/20 text-white border border-orange/30 rounded-full px-3 py-1 mb-4">
            Web-Only Offer
          </span>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">New Client Special</p>
          <h2 className="text-3xl font-extrabold leading-tight mb-1">
            <span className="text-orange">
              3 classes
            </span> for only</h2>
          <p className="text-6xl font-extrabold mb-5">$59</p>
          <p className="text-sm text-white/80 leading-relaxed">
            Your first step into hot yoga, breathwork, and recovery — all levels welcome, no experience needed.
          </p>

          {/* Countdown timer */}
          <div className={timerBoxClass}>
            <Timer size={16} className={timerIconClass} />
            <span className="text-xs text-white/70">Offer expires in</span>
            <span className={timerNumClass}>{formatTime(remaining)}</span>
          </div>

          <p className="mt-4 text-xs text-white/40">For new clients only. Valid at Kauai Hot Yoga.</p>

          {/* Claim button: mobile only */}
          <button
            onClick={() => setClaimed(true)}
            className="lg:hidden mt-8 bg-orange text-white font-bold py-3 rounded-full hover:bg-orange-dark transition-colors"
          >
            Claim This Offer →
          </button>
        </div>

        {/* Step 2: GHL form */}
        <div className={formPanelClass}>
          <iframe
            src={GHL_FORM_URL}
            style={{ border: "none", width: "100%", height: "750px" }}
            scrolling="no"
            title="New Client Intro Offer"
          />
        </div>
      </div>
    </div>
  );
}
