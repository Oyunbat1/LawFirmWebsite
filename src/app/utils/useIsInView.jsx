"use client";
import { useEffect, useState, useRef } from "react";

export default function useIsInView(options = {}) {
  const ref = useRef();
  const [isInView, setIsInView] = useState(false);
  console.log("hey , it is in view");
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5, ...options }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return { ref, isInView };
}
