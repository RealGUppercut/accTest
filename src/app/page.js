"use client";

import { useEffect } from "react";
import { Accessibility } from "accessibility";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      new Accessibility({
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
      <h1>Welcome to My Accessible Page</h1>
      <p>Select text and use the toolbar to activate Text-to-Speech.</p>
    </main>
  );
}
