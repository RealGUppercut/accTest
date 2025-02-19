"use client";

import { useEffect } from "react";
import { Accessibility } from "accessibility";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Initializing Accessibility...");
      const instance = new Accessibility({
        textToSpeechLang: "en-US",
        modules: {
          textToSpeech: true,
          speechToText: false,
        },
      });

      window.accessibilityInstance = instance;
      console.log("Accessibility instance created:", instance);
      console.log("Instance properties:", Object.keys(instance || {}));
    }
  }, []);

  return (
    <main>
      <h1>Welcome</h1>
      <p>Select text and use the toolbar to activate Text-to-Speech.</p>
      <button
        onClick={() => {
          if (window.accessibilityInstance) {
            console.log("Triggering TTS...");
            window.accessibilityInstance.menuInterface.textToSpeech();
          } else {
            console.error("Accessibility instance not initialized");
          }
        }}
      >
        Read Aloud
      </button>
    </main>
  );
}
