export function BackgroundAtmosphere() {
  const sparks = Array.from({ length: 14 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="animate-drift absolute -left-1/4 top-[-10%] h-[70vh] w-[70vh] rounded-full bg-bronze/10 blur-[120px]" />
      <div
        className="animate-drift absolute bottom-[-10%] right-[-20%] h-[60vh] w-[60vh] rounded-full bg-bronze-dark/10 blur-[140px]"
        style={{ animationDelay: "-18s" }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 3px)",
        }}
      />
      {sparks.map((_, i) => (
        <span
          key={i}
          className="animate-spark absolute block h-[2px] w-[2px] rounded-full bg-bronze-light/70"
          style={{
            left: `${(i * 71) % 100}%`,
            bottom: `${(i * 37) % 45}%`,
            animationDelay: `${(i * 0.6) % 6}s`,
            animationDuration: `${3 + (i % 4)}s`,
          }}
        />
      ))}
    </div>
  );
}
