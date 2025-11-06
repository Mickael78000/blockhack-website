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
  const [isMobile, setIsMobile] = useState(false);
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

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Different settings for mobile vs desktop
    const config = isMobile ? {
      maxNodes: 8,        // Mobile: only 8 nodes max
      initialSpawn: 3,    // Mobile: start with just 3
      minInterval: 2500,  // Mobile: slower spawning (2.5-5s)
      maxInterval: 5000
    } : {
      maxNodes: 30,       // Desktop: 30 nodes max
      initialSpawn: 6,    // Desktop: start with 6
      minInterval: 1500,  // Desktop: moderate spawning (1.5-3s)
      maxInterval: 3000
    };

    const spawn = () => {
      setNodes((prev) => {
        const next = [...prev];
        if (next.length > config.maxNodes) next.shift();
        next.push(makeNode(idRef.current++, STRINGS.current));
        return next;
      });
    };
    
    // Initial spawn
    for (let i = 0; i < config.initialSpawn; i++) spawn();
    
    // Spawn new nodes periodically
    const tick = () => {
      const jitter = config.minInterval + Math.random() * (config.maxInterval - config.minInterval);
      timerRef.current = setTimeout(() => {
        spawn();
        tick();
      }, jitter);
    };
    tick();
    
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isMobile]);

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

  // Mobile: faster, simpler animations. Desktop: slower, more complex
  const isMobileDevice = window.innerWidth < 768;
  const dur = isMobileDevice ? rand(30, 50) : rand(40, 70); // Mobile: faster animations
  const rotStart = isMobileDevice ? '0deg' : `${rand(-20, 20)}deg`; // Mobile: no rotation
  const rotEnd = isMobileDevice ? '0deg' : `${rand(-20, 20)}deg`;
  const fontSize = isMobileDevice ? `${rand(12, 20)}px` : `${rand(14, 28)}px`; // Mobile: smaller text
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
      className={`pointer-events-none absolute select-none ${data.weight} ${data.blur} ${data.glow}`}
      style={{
        animation: `drift var(--dur) linear forwards`,
        fontFamily: "'Computer Modern Serif', 'Latin Modern Roman', serif",
        fontSize: "var(--fs)",
        opacity: "var(--op)",
        left: 0,
        top: 0,
        transform: 'translate3d(0, 0, 0)', // Better GPU acceleration
        backfaceVisibility: 'hidden',
        willChange: 'transform, opacity', // Hint to browser for optimization
        contain: 'layout style paint', // CSS containment for better performance
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
  0% {
    transform: translate3d(var(--startX), var(--startY), 0) rotate(var(--startR));
    opacity: 0;
  }
  10% { 
    opacity: var(--op); 
  }
  90% { 
    opacity: var(--op); 
  }
  100% {
    transform: translate3d(var(--endX), var(--endY), 0) rotate(var(--endR));
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
