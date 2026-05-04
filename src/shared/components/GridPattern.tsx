export const GridPattern = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        animation: 'gridPulse 5s ease-in-out infinite',
      }}
    />
  </div>
);
