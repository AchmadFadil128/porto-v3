"use client";

import { useEffect, useState } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const finishLoading = () => {
      setTimeout(() => {
        setIsLeaving(true);

        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      }, 900);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
    }

    return () => {
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`loading-screen ${isLeaving ? "hide" : ""}`}>
      <div className="loading-content">
        <p>loading</p>

        <div className="loading-bar">
          <span />
        </div>
      </div>
    </div>
  );
}
