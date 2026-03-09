"use client";

import { useState } from "react";
import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function DonationControls() {
  const iban = "DE66 7605 0101 0001 0067 73";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(iban);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (ignored) {
      // ignore
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-base-800/80 rounded-2xl p-6 text-center w-full max-w-xl">
        <div className="text-base-200 mb-2 font-semibold">Bankverbindung</div>
        <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-center gap-3">
          <div className="text-lg font-mono text-base-50 whitespace-nowrap">
            {iban}
          </div>
          <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors font-semibold w-max ${
              copied
                ? "bg-green-600 text-white"
                : "bg-secondary-700 text-white hover:bg-secondary-600"
            }`}
            aria-label="IBAN kopieren"
            type="button"
          >
            {copied ? (
              <>
                <CheckIcon className="w-5 h-5" />
              </>
            ) : (
              <>
                <ClipboardDocumentIcon className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
        <div className="text-sm text-base-400 mt-3">Sparkasse Nürnberg</div>
      </div>

      <a
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-base-700 text-base-400 opacity-60 cursor-not-allowed select-none"
        aria-disabled="true"
      >
        PayPal (coming soon)
      </a>
    </div>
  );
}
