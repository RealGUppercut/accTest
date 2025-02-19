"use client";

import { useEffect } from "react";
import { Accessibility } from "accessibility";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Initializing Accessibility...");
      window.accessibilityInstance = new Accessibility({
        textToSpeechLang: "en-US",
        modules: {
          textToSpeech: true,
          speechToText: false,
        },
      });

      console.log(
        "Accessibility instance created:",
        window.accessibilityInstance
      );
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
