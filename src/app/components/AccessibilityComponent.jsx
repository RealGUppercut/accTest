"use client";
import { useEffect } from "react";
import { Accessibility } from "accessibility";

const AccessibilityComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      new Accessibility({
        textToSpeechLang: "en-US", // Change this to your preferred language
        modules: {
          textToSpeech: true, // Ensure TTS is enabled
          hotkeys: {
            enabled: true, // Enable keyboard shortcuts
          },
        },
      });
    }
  }, []);

  return null; // The package renders its own UI
};

export default AccessibilityComponent;
