/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";

const useFadeInOnScrollDiv = (threshhold: number) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: threshhold },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer && observer.disconnect();
  }, []);

  return { containerRef, isVisible };
};

const useFadeInOnScrollList = (threshhold: number) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: threshhold },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer && observer.disconnect();
  }, []);

  return { containerRef, isVisible };
};

export { useFadeInOnScrollDiv, useFadeInOnScrollList };
