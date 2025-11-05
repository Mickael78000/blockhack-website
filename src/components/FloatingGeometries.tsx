import { motion } from 'framer-motion';

export const FloatingGeometries = () => {
  const geometries = [
    { id: 1, type: 'cube', x: 10, y: 20, size: 60, rotation: 45, duration: 25 },
    { id: 2, type: 'triangle', x: 80, y: 15, size: 50, rotation: 0, duration: 30 },
    { id: 3, type: 'circle', x: 15, y: 70, size: 40, rotation: 0, duration: 20 },
    { id: 4, type: 'cube', x: 85, y: 60, size: 45, rotation: 30, duration: 28 },
    { id: 5, type: 'triangle', x: 50, y: 85, size: 55, rotation: 180, duration: 22 },
    { id: 6, type: 'circle', x: 70, y: 40, size: 35, rotation: 0, duration: 26 },
    { id: 7, type: 'cube', x: 30, y: 50, size: 38, rotation: 60, duration: 24 },
  ];

  const renderGeometry = (geo: typeof geometries[0]) => {
    const baseClasses = "absolute border-2 border-cyan-400/20";
    
    switch (geo.type) {
      case 'cube':
        return (
          <div
            className={`${baseClasses} bg-gradient-to-br from-cyan-500/5 to-blue-500/5`}
            style={{
              width: geo.size,
              height: geo.size,
              transform: `rotate(${geo.rotation}deg)`,
            }}
          />
        );
      case 'triangle':
        return (
          <div
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${geo.size / 2}px solid transparent`,
              borderRight: `${geo.size / 2}px solid transparent`,
              borderBottom: `${geo.size}px solid rgba(34, 211, 238, 0.1)`,
              transform: `rotate(${geo.rotation}deg)`,
            }}
          />
        );
      case 'circle':
        return (
          <div
            className={`${baseClasses} rounded-full bg-gradient-to-br from-blue-500/5 to-fuchsia-500/5`}
            style={{
              width: geo.size,
              height: geo.size,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {geometries.map((geo) => (
        <motion.div
          key={geo.id}
          className="absolute"
          style={{
            left: `${geo.x}%`,
            top: `${geo.y}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: geo.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {renderGeometry(geo)}
        </motion.div>
      ))}
    </div>
  );
};
