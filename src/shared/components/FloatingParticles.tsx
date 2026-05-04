const PARTICLES = [
  { id: 0,  size: 3, x: 13,  y: 7,  duration: 18, delay: 0.0 },
  { id: 1,  size: 5, x: 50,  y: 60, duration: 22, delay: 0.4 },
  { id: 2,  size: 2, x: 87,  y: 23, duration: 15, delay: 0.8 },
  { id: 3,  size: 4, x: 34,  y: 81, duration: 25, delay: 1.2 },
  { id: 4,  size: 6, x: 71,  y: 44, duration: 20, delay: 1.6 },
  { id: 5,  size: 3, x: 9,   y: 55, duration: 17, delay: 2.0 },
  { id: 6,  size: 5, x: 62,  y: 12, duration: 23, delay: 2.4 },
  { id: 7,  size: 2, x: 91,  y: 78, duration: 19, delay: 2.8 },
  { id: 8,  size: 4, x: 27,  y: 36, duration: 21, delay: 3.2 },
  { id: 9,  size: 6, x: 78,  y: 91, duration: 16, delay: 3.6 },
  { id: 10, size: 3, x: 45,  y: 19, duration: 24, delay: 4.0 },
  { id: 11, size: 5, x: 18,  y: 67, duration: 18, delay: 4.4 },
  { id: 12, size: 2, x: 55,  y: 50, duration: 22, delay: 0.2 },
  { id: 13, size: 4, x: 83,  y: 33, duration: 15, delay: 0.6 },
  { id: 14, size: 6, x: 6,   y: 89, duration: 25, delay: 1.0 },
  { id: 15, size: 3, x: 39,  y: 4,  duration: 20, delay: 1.4 },
  { id: 16, size: 5, x: 96,  y: 57, duration: 17, delay: 1.8 },
  { id: 17, size: 2, x: 22,  y: 74, duration: 23, delay: 2.2 },
  { id: 18, size: 4, x: 67,  y: 28, duration: 19, delay: 2.6 },
  { id: 19, size: 6, x: 48,  y: 95, duration: 21, delay: 3.0 },
];

export const FloatingParticles = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    {PARTICLES.map((p) => (
      <div
        key={p.id}
        className="absolute rounded-full bg-cyan-400/30"
        style={{
          width: p.size,
          height: p.size,
          left: `${p.x}%`,
          top: `${p.y}%`,
          filter: 'blur(1px)',
          animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite`,
        }}
      />
    ))}
  </div>
);
