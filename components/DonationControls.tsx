"use client";

import { useState } from "react";
import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function DonationControls() {
  const iban = "DE66 7605 0101 0001 0067 73";
  const wirwunderUrl = "https://www.wirwunder.de/projects/172615";
  const [copied, setCopied] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(wirwunderUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 1200);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-base-800/80 rounded-2xl p-6 text-center w-full max-w-xl">
        <div className="text-base-200 mb-2 text-lg font-semibold">
          Bankverbindung
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-center gap-3">
          <div className="text-sm sm:text-2xl font-mono text-base-50 whitespace-nowrap">
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

      <div className="text-base-400 text-sm">oder</div>

      <div className="bg-base-800/80 rounded-2xl p-6 text-center w-full max-w-xl">
        <div className="text-base-200 mb-2 text-lg font-semibold">
          WirWunder
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-center gap-3">
          <a
            href={wirwunderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base font-mono text-base-50 whitespace-nowrap hover:underline"
          >
            {wirwunderUrl}
          </a>
          <button
            onClick={handleCopyLink}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors font-semibold w-max ${
              copiedLink
                ? "bg-green-600 text-white"
                : "bg-secondary-700 text-white hover:bg-secondary-600"
            }`}
            aria-label="Link kopieren"
            type="button"
          >
            {copiedLink ? (
              <CheckIcon className="w-5 h-5" />
            ) : (
              <ClipboardDocumentIcon className="w-5 h-5" />
            )}
          </button>
        </div>
        <div className="text-sm text-base-400 mt-3">Direkt online spenden</div>
      </div>
    </div>
  );
}
