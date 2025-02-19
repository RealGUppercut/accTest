"use client";

import { useEffect } from "react";
import { Accessibility } from "accessibility";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.accessibilityInstance = new Accessibility({
        textToSpeechLang: "en-US",
        modules: {
          textToSpeech: true,
          speechToText: false,
        },
      });
    }
  }, []);

  return (
    <main>
      <h1>Welcome</h1>
      <p>Select text and use the toolbar to activate Text-to-Speech.</p>
      <button
        onClick={() => {
          if (window.accessibilityInstance) {
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
