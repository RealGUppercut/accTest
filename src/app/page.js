"use client";

import { useEffect } from "react";
import { Accessibility } from "accessibility";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Initializing Accessibility...");
      window.accessibilityInstance = new Accessibility({
        textToSpeechLang: "en-US", // ✅ Ensure correct language
        modules: {
          textToSpeech: true, // ✅ Enable TTS module
          speechToText: false,
        },
      });

      setTimeout(() => {
        console.log("Forcing textToSpeech ON...");

        // ✅ Ensure textToSpeech is enabled in _stateValues
        window.accessibilityInstance._stateValues.textToSpeech = true;
        console.log(
          "TTS state after forcing:",
          window.accessibilityInstance._stateValues
        );

        // ✅ Proper way to refresh Accessibility UI
        console.log("Reinitializing Accessibility to update UI...");
        window.accessibilityInstance.destroy();
        window.accessibilityInstance = new Accessibility(
          window.accessibilityInstance.options
        );
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
