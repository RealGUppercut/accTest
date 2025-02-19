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

      setTimeout(() => {
        const voices = window.speechSynthesis.getVoices();
        console.log("Available Voices:", voices);

        const selectedVoice =
          voices.find((voice) => voice.lang === "en-US") ||
          voices.find((voice) => voice.lang === "en-GB");

        if (selectedVoice) {
          console.log("Using voice:", selectedVoice.name);
          window.accessibilityInstance.options.textToSpeechVoice =
            selectedVoice.name;
        } else {
          console.warn("No supported voices found.");
        }
      }, 1000); // ✅ Delay to ensure voices are loaded
    }
  }, []);

  return (
    <main>
      <h1>Welcome</h1>
      <p>Select text and use the toolbar to activate Text-to-Speech.</p>
    </main>
  );
}
