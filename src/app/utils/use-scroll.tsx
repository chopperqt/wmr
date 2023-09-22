import { useEffect, useRef, useState } from "react";

export const ScrollKey = {
  Up: "up",
  Bottom: "bottom",
  None: "none",
};

export const useScroll = () => {
  const [scroll, setScroll] = useState(ScrollKey.None);
  const prevScroll = useRef(0);

  const handleScroll = () => {
    if (window.scrollY > prevScroll.current) {
      setScroll(() => ScrollKey.Bottom);

      prevScroll.current = window.scrollY;

      return;
    }

    prevScroll.current = window.scrollY;

    setScroll(() => ScrollKey.Up);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return {
    scroll,
  };
};
