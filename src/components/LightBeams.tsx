import { motion } from 'framer-motion';

export const LightBeams = () => {
  const beams = [
    { id: 1, x: 20, delay: 0, duration: 8 },
    { id: 2, x: 50, delay: 2, duration: 10 },
    { id: 3, x: 80, delay: 4, duration: 9 },
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
          style={{
            left: `${beam.x}%`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: beam.duration,
            repeat: Infinity,
            delay: beam.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
