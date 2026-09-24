import { useEffect, useRef } from "react";
import bat from "../assets/bat.png";
import "../styles/batCursor.css";


export default function BatCursor({ enabled }) {
  const batRef = useRef(null);

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove("custom_cursor");
      return;
    }

    document.body.classList.add("custom_cursor");

    const batCursor = batRef.current;

    const moveBat = (e) => {
      if (!batCursor) return;

      batCursor.style.left = `${e.clientX}px`;
      batCursor.style.top = `${e.clientY}px`;
    };

    const swingBat = (e) => {
      if (e.button !== 0) return;

      if (!batCursor) return;

      batCursor.classList.remove("swing");

      void batCursor.offsetWidth;

      batCursor.classList.add("swing");

      const impact = document.createElement("div");

      impact.className = "bat-impact";

      impact.style.left = `${e.clientX}px`;
      impact.style.top = `${e.clientY}px`;

      document.body.appendChild(impact);
    };

    window.addEventListener("mousemove", moveBat);
    window.addEventListener("mousedown", swingBat);

    return () => {
      window.removeEventListener("mousemove", moveBat);
      window.removeEventListener("mousedown", swingBat);

      document.body.classList.remove("custom_cursor");
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <img
      ref={batRef}
      src={bat}
      alt=""
      className="bat-cursor"
    />
  );
}
