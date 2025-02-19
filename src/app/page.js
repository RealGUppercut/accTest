"use client";

import { useEffect } from "react";
import { Accessibility } from "accessibility";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Initializing Accessibility...");
      window.accessibilityInstance = new Accessibility({
        textToSpeechLang: "en-US", // ✅ Set correct language
        modules: {
          textToSpeech: true, // ✅ Enable TTS module
          speechToText: false,
        },
      });

      setTimeout(() => {
        console.log("Forcing textToSpeech ON...");

        // ✅ Enable TTS in state without resetting Accessibility
        window.accessibilityInstance._stateValues.textToSpeech = true;
        window.accessibilityInstance.options.modules.textToSpeech = true;

        console.log("TTS enabled:", window.accessibilityInstance._stateValues);

        // ✅ Refresh UI (if needed)
        if (
          window.accessibilityInstance.menuInterface &&
          window.accessibilityInstance.menuInterface.textToSpeech
        ) {
          console.log("TTS function exists, Accessibility is ready.");
        } else {
          console.warn("TTS function missing, refreshing Accessibility...");
          window.accessibilityInstance = new Accessibility(
            window.accessibilityInstance.options
          );
        }
      }, 1000); // ✅ Delay ensures Accessibility has fully initialized
    }
  }, []);

  return (
    <main>
      <h1>Welcome</h1>
      <p>Select text and use the toolbar to activate Text-to-Speech.</p>
    </main>
  );
}
