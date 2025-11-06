import React, { useEffect, useRef, useState } from "react";
import katex from "katex";

interface FloatingNode {
  id: number;
  text: string;
  isLatex: boolean;
  cssVars: {
    "--startX": string;
    "--startY": string;
    "--endX": string;
    "--endY": string;
    "--startR": string;
    "--endR": string;
    "--dur": string;
    "--fs": string;
    "--op": number;
  };
  weight: string;
  blur: string;
  glow: string;
}

/**
 * Écran de Noms Mathématiques et Cryptographiques Flottants
 * - Fond sombre, écritures blanches monospace
 * - Les extraits (équations, noms, termes crypto) apparaissent aléatoirement sur les bords de l'écran
 * - Dérivent lentement à travers l'écran dans des directions aléatoires
 * - Les éléments apparaissent/disparaissent en fondu ; une fois terminés, ils sont supprimés
 *
 * Usage : rendre <FloatingMathScreen /> comme une page complète.
 */
export default function FloatingMathScreen() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <FloatingLayer />
      {/* Vignette subtile optionnelle */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_60%_at_50%_50%,_rgba(255,255,255,0.04),_transparent_60%)]" />
    </div>
  );
}

function FloatingLayer() {
  const [nodes, setNodes] = useState<FloatingNode[]>([]);
  const idRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Chaînes sources : équations, crypto, noms
  const STRINGS = useRef([
    // Noms (pas LaTeX)
    { text: "Alan Turing", isLatex: false },
    { text: "John von Neumann", isLatex: false },
    { text: "Évariste Galois", isLatex: false },
    { text: "Sophie Germain", isLatex: false },
    { text: "Emmy Noether", isLatex: false },
    { text: "Kurt Gödel", isLatex: false },
    { text: "Ada Lovelace", isLatex: false },
    { text: "Leonhard Euler", isLatex: false },
    { text: "Carl F. Gauss", isLatex: false },
    // Crypto / sécurité
    { text: "cryptographie", isLatex: false },
    { text: "c \\equiv m^e \\pmod{n}", isLatex: true },
    { text: "SHA-256", isLatex: false },
    { text: "Ed25519", isLatex: false },
    { text: "Diffie–Hellman", isLatex: false },
    { text: "AES-256", isLatex: false },
    { text: "a^{n-1} \\equiv 1 \\pmod{n}", isLatex: true },
    // Extraits mathématiques (LaTeX)
    { text: "\\sum_{i=1}^n i = \\frac{n(n+1)}{2}", isLatex: true },
    { text: "\\pi \\approx 3.1415926535", isLatex: true },
    { text: "e^{i\\pi} + 1 = 0", isLatex: true },
    { text: "\\frac{\\partial}{\\partial x}(x^n) = nx^{n-1}", isLatex: true },
    { text: "\\forall \\varepsilon > 0, \\exists \\delta > 0", isLatex: true },
    { text: "P = NP?", isLatex: false },
    { text: "\\lambda x. f(f\\, x)", isLatex: true },
    { text: "\\det(A) \\neq 0", isLatex: true },
    { text: "\\|x\\| = \\sqrt{x \\cdot x}", isLatex: true },
    { text: "\\mathbb{Z}_n : a \\equiv b \\pmod{n}", isLatex: true },
    { text: "f(x) = ax^2 + bx + c", isLatex: true },
    { text: "G(x) = \\sum p(x) x^k", isLatex: true },
    { text: "polynomiales", isLatex: false },
    { text: "modulo", isLatex: false },
    { text: "\\Pr[KSA]", isLatex: true },
    { text: "H(x \\| y)", isLatex: true },
    { text: "\\gcd(a,b) = \\gcd(b, a \\bmod b)", isLatex: true },
    { text: "x_{t+1} = rx_t(1 - x_t)", isLatex: true },
    { text: "\\langle Q, \\Sigma, \\Gamma, \\delta, q_0, q_{acc}, q_{rej} \\rangle", isLatex: true },
    { text: "Architecture Von Neumann", isLatex: false },
  ]);

  useEffect(() => {
    const spawn = () => {
      setNodes((prev) => {
        const next = [...prev];
        // Reduced cap for better performance
        if (next.length > 15) next.shift();
        next.push(makeNode(idRef.current++, STRINGS.current));
        return next;
      });
    };
    // Reduced initial spawn for faster load
    for (let i = 0; i < 6; i++) spawn();
    // Slower cadence for better performance
    const tick = () => {
      const jitter = 1500 + Math.random() * 1500; // 1.5s - 3s (slower)
      timerRef.current = setTimeout(() => {
        spawn();
        tick();
      }, jitter);
    };
    tick();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleEnd = (id: number) => {
    setNodes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="absolute inset-0">
      {nodes.map((n) => (
        <FloatingItem key={n.id} data={n} onEnd={() => handleEnd(n.id)} />
      ))}
      <style>{styles}</style>
    </div>
  );
}

function makeNode(id: number, pool: Array<{ text: string; isLatex: boolean }>): FloatingNode {
  const item = pool[Math.floor(Math.random() * pool.length)];
  const { text, isLatex } = item;
  const side = randChoice(["left", "right", "top", "bottom"]);
  // Positions en unités de viewport
  let startX = "0vw", startY = "0vh", endX = "0vw", endY = "0vh";
  const pad = 5; // apparaît légèrement hors du canevas

  if (side === "left") {
    startX = `${-pad}vw`; startY = `${rand(0, 100)}vh`;
    endX = `${100 + pad}vw`; endY = `${rand(-10, 110)}vh`;
  } else if (side === "right") {
    startX = `${100 + pad}vw`; startY = `${rand(0, 100)}vh`;
    endX = `${-pad}vw`; endY = `${rand(-10, 110)}vh`;
  } else if (side === "top") {
    startX = `${rand(0, 100)}vw`; startY = `${-pad}vh`;
    endX = `${rand(-10, 110)}vw`; endY = `${100 + pad}vh`;
  } else {
    startX = `${rand(0, 100)}vw`; startY = `${100 + pad}vh`;
    endX = `${rand(-10, 110)}vw`; endY = `${-pad}vh`;
  }

  const dur = rand(40, 70); // secondes – mouvement très lent
  const rotStart = `${rand(-20, 20)}deg`;
  const rotEnd = `${rand(-20, 20)}deg`;
  const fontSize = `${rand(14, 28)}px`;
  const weight = randChoice(["font-light", "font-normal", "font-medium"]);
  const blur = Math.random() < 0.2 ? "blur-[0.5px]" : "";
  const glow = Math.random() < 0.5 ? "[text-shadow:0_0_8px_rgba(255,255,255,0.25)]" : "";
  const opacity = rand(60, 95) / 100;

  return {
    id,
    text,
    isLatex,
    cssVars: {
      "--startX": startX,
      "--startY": startY,
      "--endX": endX,
      "--endY": endY,
      "--startR": rotStart,
      "--endR": rotEnd,
      "--dur": `${dur}s`,
      "--fs": fontSize,
      "--op": opacity,
    },
    weight,
    blur,
    glow,
  };
}

interface FloatingItemProps {
  data: FloatingNode;
  onEnd: () => void;
}

function FloatingItem({ data, onEnd }: FloatingItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data.isLatex && contentRef.current) {
      try {
        katex.render(data.text, contentRef.current, {
          throwOnError: false,
          displayMode: false,
        });
      } catch (e) {
        // Repli sur texte brut si le rendu LaTeX échoue
        if (contentRef.current) {
          contentRef.current.textContent = data.text;
        }
      }
    }
  }, [data.text, data.isLatex]);

  return (
    <div
      className={`pointer-events-none absolute select-none will-change-transform ${data.weight} ${data.blur} ${data.glow}`}
      style={{
        animation: `drift var(--dur) linear forwards`,
        fontFamily: "'Computer Modern Serif', 'Latin Modern Roman', serif",
        fontSize: "var(--fs)",
        opacity: "var(--op)",
        left: 0,
        top: 0,
        transform: 'translateZ(0)', // GPU acceleration
        backfaceVisibility: 'hidden', // Optimize rendering
        ...data.cssVars,
      } as React.CSSProperties}
      onAnimationEnd={onEnd}
    >
      {data.isLatex ? (
        <span ref={contentRef} />
      ) : (
        data.text
      )}
    </div>
  );
}

const styles = `
@keyframes drift {
  from {
    transform: translate(var(--startX), var(--startY)) rotate(var(--startR));
    opacity: 0;
  }
  10% { opacity: var(--op); }
  90% { opacity: var(--op); }
  to {
    transform: translate(var(--endX), var(--endY)) rotate(var(--endR));
    opacity: 0;
  }
}
`;

function rand(min: number, max: number): number { 
  return Math.random() * (max - min) + min; 
}

function randChoice<T>(arr: T[]): T { 
  return arr[Math.floor(Math.random() * arr.length)]; 
}
