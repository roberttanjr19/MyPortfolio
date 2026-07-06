/**
 * COPY BUTTON COMPONENT
 * Reusable button for copying text to clipboard with visual feedback
 * Shows success state temporarily after copying
 */

import { useEffect, useState } from "react";

import { CheckIcon, CopyIcon } from "./icons";

/**
 * CopyButton Component
 * @param {string} valueToCopy - Text value to copy to clipboard
 * @param {string} label - Button label text (default: "Copy")
 * @returns {JSX.Element} Button with copy and success icon/label states
 */
export default function CopyButton({ valueToCopy, label = "Copy" }) {
    // Tracks whether copy was successful (shows check icon and "Copied" text)
    const [hasCopiedSuccessfully, setHasCopiedSuccessfully] = useState(false);

    // Auto-reset success state after 1.8 seconds
    useEffect(() => {
        if (!hasCopiedSuccessfully) {
            return undefined;
        }

        const successTimeoutId = window.setTimeout(() => setHasCopiedSuccessfully(false), 1800);

        return () => window.clearTimeout(successTimeoutId);
    }, [hasCopiedSuccessfully]);

    /**
     * Handle copy button click - copies value to clipboard
     */
    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(valueToCopy);
            setHasCopiedSuccessfully(true);
        } catch {
            setHasCopiedSuccessfully(false);
        }
    };

    return (
        <button type="button" className="copy-button" onClick={handleCopyClick}>
            {/* Show check icon and "Copied" text if successful, otherwise copy icon and label */}
            {hasCopiedSuccessfully ? <CheckIcon className="icon icon-small" /> : <CopyIcon className="icon icon-small" />}
            <span>{hasCopiedSuccessfully ? "Copied" : label}</span>
        </button>
    );
}
