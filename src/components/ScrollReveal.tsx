import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** Elemento HTML a renderizar (div por padrão) */
  as?: ElementType;
  /** Atraso em ms — use múltiplos de ~80-120ms para escalonar elementos em sequência */
  delay?: number;
  className?: string;
}

/**
 * Fade-in sutil ao entrar na viewport (scroll reveal), com possibilidade de
 * atraso escalonado entre elementos irmãos via a prop `delay`. Respeita
 * prefers-reduced-motion automaticamente (ver .reveal em index.css).
 */
const ScrollReveal = ({ children, as: Tag = "div", delay = 0, className = "" }: ScrollRevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;
