import { useEffect, useState } from "react";
import { quotes } from "../../../data/timer-quotes";

function TimerQuotes() {
  const [currQuote, setCurrentQuote] = useState(28);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev >= quotes.length - 1 ? 0 : prev + 1));
        setIsVisible(true);
      }, 2000);
    }, 20000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } [transition:opacity_2s_ease-in-out] italic mt-10 text-[gray]`}
    >
      "{quotes[currQuote]}"
    </p>
  );
}

export default TimerQuotes;
