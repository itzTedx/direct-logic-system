"use client";
import { Children, cloneElement, ReactElement, useEffect, useId, useState } from "react";

import { AnimatePresence, motion, Transition } from "motion/react";

import { cn } from "@/lib/utils";

export type AnimatedBackgroundProps = {
  children: ReactElement<{ "data-id": string }>[] | ReactElement<{ "data-id": string }>;
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
};

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const uniqueId = useId();

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id);

    if (onValueChange) {
      onValueChange(id);
    }
  };

  useEffect(() => {
    if (defaultValue !== undefined) {
      setActiveId(defaultValue);
    }
  }, [defaultValue]);

  // biome-ignore lint/suspicious/noExplicitAny: i dont know what type this is
  return Children.map(children, (child: any, index) => {
    const id = child.props["data-id"];

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => handleSetActiveId(id),
          onMouseLeave: () => handleSetActiveId(null),
        }
      : {
          onClick: () => handleSetActiveId(id),
        };

    return cloneElement(
      child,
      {
        key: index,
        className: cn("relative inline-flex", child.props.className),
        "data-checked": activeId === id ? "true" : "false",
        ...interactionProps,
      },
      <>
        <AnimatePresence initial={false}>
          {activeId === id && (
            <motion.div
              animate={{
                opacity: 1,
              }}
              className={cn("absolute inset-0", className)}
              exit={{
                opacity: 0,
              }}
              initial={{ opacity: defaultValue ? 1 : 0 }}
              layoutId={`background-${uniqueId}`}
              transition={transition}
            />
          )}
        </AnimatePresence>
        <ul className="z-10">{child.props.children}</ul>
      </>
    );
  });
}
