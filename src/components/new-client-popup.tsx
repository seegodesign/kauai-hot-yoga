"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "khy_intro_offer_seen";
const GHL_FORM_URL = "https://api.leadconnectorhq.com/widget/form/EiBmlTeQrPhWuOSHEw8O";

export function NewClientPopup() {
  const [open, setOpen] = useState(false);
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      const timer = setTimeout(() => setOpen(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  if (!open) return null;

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
          className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors z-10"
        >
          <X size={20} color="purple"/>
        </button>

        {/* Step 1: offer info — always visible on desktop, hidden on mobile after claim */}
        <div className={`bg-purple flex-1 px-8 py-10 flex flex-col justify-start text-white ${claimed ? "hidden lg:flex" : "flex"}`}>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">New Client Offer</p>
          <h2 className="text-3xl font-extrabold leading-tight mb-1">3 classes for only</h2>
          <p className="text-6xl font-extrabold mb-5">$59</p>
          <p className="text-sm text-white/80 leading-relaxed">
            Your first step into hot yoga, breathwork, and recovery — all levels welcome, no experience needed.
          </p>
          <p className="mt-6 text-xs text-white/40">For new clients only. Valid at Kauai Hot Yoga.</p>
          {/* Claim button: mobile only */}
          <button
            onClick={() => setClaimed(true)}
            className="lg:hidden mt-8 bg-orange text-white font-bold py-3 rounded-full hover:bg-orange-dark transition-colors"
          >
            Claim This Offer →
          </button>
        </div>

        {/* Step 2: GHL form — always visible on desktop, shown on mobile after claim */}
        <div className={`flex-2 flex flex-col justify-center bg-white overflow-y-auto max-h-screen ${claimed ? "flex" : "hidden lg:flex"}`}>
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
