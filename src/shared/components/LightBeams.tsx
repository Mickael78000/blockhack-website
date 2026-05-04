const BEAMS = [
  { id: 1, x: 20, duration: 8,  delay: 0 },
  { id: 2, x: 50, duration: 10, delay: 2 },
  { id: 3, x: 80, duration: 9,  delay: 4 },
];

export const LightBeams = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    {BEAMS.map((b) => (
      <div
        key={b.id}
        className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
        style={{
          left: `${b.x}%`,
          animation: `lightBeam ${b.duration}s ease-in-out ${b.delay}s infinite`,
        }}
      />
    ))}
  </div>
);
