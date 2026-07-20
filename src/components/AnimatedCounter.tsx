import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  /** Valor final, ex: 2000 */
  value: number;
  /** Texto antes do número, ex: "+" não se aplica aqui — use suffix */
  prefix?: string;
  /** Texto depois do número, ex: "+" ou "%" */
  suffix?: string;
  /** Duração da contagem em ms */
  duration?: number;
  className?: string;
}

/**
 * SURPRESA / diferencial de UI: contador discreto que sobe de 0 até o valor
 * final apenas quando entra na viewport, com easing suave (ease-out) — em vez
 * de mostrar o número estático, ele "se revela" junto da rolagem, reforçando
 * a sensação de leveza e cuidado no detalhe sem chamar atenção de forma
 * agressiva (sem cores extras, sem sons, sem confete — só o número ganhando
 * vida uma única vez).
 */
const AnimatedCounter = ({ value, prefix = "", suffix = "", duration = 1600, className = "" }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
