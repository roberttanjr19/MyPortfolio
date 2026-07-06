/**
 * TYPING EFFECT COMPONENT
 * Animated component that cycles through phrases with typewriter effect
 * Respects user's prefers-reduced-motion accessibility preference
 */

import { useEffect, useState } from "react";

/**
 * TypingEffect Component
 * @param {string[]} phrases - Array of text phrases to cycle through
 * @param {string} className - CSS class name to apply to the span element
 * @returns {JSX.Element} Animated text span showing typing effect
 */
export default function TypingEffect({ phrases = [], className = "" }) {
    // Currently displayed text in animation
    const [displayText, setDisplayText] = useState(phrases[0] ?? "");
    // Whether user prefers reduced motion
    const [userPrefersReducedMotion, setUserPrefersReducedMotion] = useState(false);

    // Check and listen for user's motion preferences (accessibility)
    useEffect(() => {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const updateMotionPreference = () => setUserPrefersReducedMotion(motionMediaQuery.matches);

        updateMotionPreference();
        motionMediaQuery.addEventListener("change", updateMotionPreference);

        return () => motionMediaQuery.removeEventListener("change", updateMotionPreference);
    }, []);

    // Main typing animation effect
    useEffect(() => {
        if (!phrases.length) {
            return;
        }

        // Skip animation if user prefers reduced motion
        if (userPrefersReducedMotion) {
            return;
        }

        let isActive = true;
        let animationTimeoutId;
        let currentPhraseIndex = 0;
        let currentCharacterIndex = 0;
        let isDeletingText = false;

        /**
         * Step function for typing animation
         * Handles: typing characters, pausing, deleting characters, moving to next phrase
         */
        const performAnimationStep = () => {
            if (!isActive) {
                return;
            }

            const currentPhrase = phrases[currentPhraseIndex];

            // Typing phase - add characters
            if (!isDeletingText) {
                currentCharacterIndex += 1;
                setDisplayText(currentPhrase.slice(0, currentCharacterIndex));

                // Phrase complete, start deletion phase
                if (currentCharacterIndex === currentPhrase.length) {
                    isDeletingText = true;
                    animationTimeoutId = window.setTimeout(performAnimationStep, 1200);
                    return;
                }

                animationTimeoutId = window.setTimeout(performAnimationStep, 75);
                return;
            }

            // Deletion phase - remove characters
            currentCharacterIndex -= 1;
            setDisplayText(currentPhrase.slice(0, currentCharacterIndex));

            // Phrase deleted, move to next phrase
            if (currentCharacterIndex === 0) {
                isDeletingText = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                animationTimeoutId = window.setTimeout(performAnimationStep, 300);
                return;
            }

            animationTimeoutId = window.setTimeout(performAnimationStep, 45);
        };

        // Start animation with initial delay
        animationTimeoutId = window.setTimeout(performAnimationStep, 350);

        // Cleanup: stop animation and clear timeout on unmount or dependency change
        return () => {
            isActive = false;
            window.clearTimeout(animationTimeoutId);
        };
    }, [phrases, userPrefersReducedMotion]);

    return <span className={className}>{displayText}</span>;
}
