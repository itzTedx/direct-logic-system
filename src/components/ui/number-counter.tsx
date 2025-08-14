"use client";

import { useEffect, useRef, useState } from "react";

import NumberFlow from "@number-flow/react";
import { useInView } from "motion/react";

import { cn } from "@/lib/utils";

type NumberProps = number | `${number}`;

export function NumberCounter({
  className,
  suffix,
  value,
  delayInMs = 100,
}: {
  className?: string;
  suffix?: string;
  value: NumberProps;
  delayInMs?: number;
}) {
  const [number, setNumber] = useState<NumberProps>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px", once: true });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setNumber(value), delayInMs);
    } else {
      setNumber(0);
    }
  }, [isInView, value, delayInMs]);

  return (
    <NumberFlow
      className={cn(className)}
      ref={ref}
      spinTiming={{ duration: 1200, easing: "ease-in-out" }}
      suffix={suffix}
      value={Number(number)}
    />
  );
}
