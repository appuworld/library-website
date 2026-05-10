"use client"
import { useInView } from "@/hooks/useInView"

type Direction = "up" | "down" | "left" | "right" | "none"

const hiddenTransform: Record<Direction, string> = {
  up: "translateY(48px)",
  down: "translateY(-48px)",
  left: "translateX(48px)",
  right: "translateX(-48px)",
  none: "none",
}

type Props = {
  children: React.ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

export default function AnimateOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  threshold = 0.12,
  className,
}: Props) {
  const [ref, inView] = useInView(threshold)

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : hiddenTransform[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: inView ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}
