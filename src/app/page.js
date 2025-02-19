"use client";

import { useEffect } from "react";
import { Accessibility } from "accessibility";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.accessibilityInstance = new Accessibility({
          textToSpeechLang: "en-US",
          modules: {
            textToSpeech: true,
            speechToText: false,
          },
        });
      }, 1000); // ⏳ Delay by 1 second
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
