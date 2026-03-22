export default function SectionDivider() {
  return (
    <div className="w-full relative flex items-center justify-center py-6 bg-transparent z-20">
      {/* Base subtle line */}
      <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Glowing inner line */}
      <div className="absolute w-1/2 md:w-1/3 h-[2px] bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent blur-[1px]" />
      
      {/* Center glowing diamond ornament */}
      <div className="relative w-3 h-3 rotate-45 border border-accent-primary/50 bg-[#0D1117] shadow-[0_0_10px_rgba(255,106,61,0.5)] z-10" />
    </div>
  );
}
