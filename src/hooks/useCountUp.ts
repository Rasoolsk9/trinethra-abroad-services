import { useEffect, useRef, useState } from "react";

type Options = {
  end: number;
  durationMs?: number;
  enabled?: boolean;
};

export function useCountUp({ end, durationMs = 1400, enabled = true }: Options) {
  const [value, setValue] = useState(0);
  const frame = useRef<ReturnType<typeof requestAnimationFrame> | undefined>(undefined);
  const startTime = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!enabled) {
      setValue(0);
      return;
    }

    startTime.current = undefined;
    const step = (now: number) => {
      if (startTime.current === undefined) startTime.current = now;
      const t = Math.min(1, (now - startTime.current) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * end));
      if (t < 1) frame.current = requestAnimationFrame(step);
    };
    frame.current = requestAnimationFrame(step);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [end, durationMs, enabled]);

  return value;
}
