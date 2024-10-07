import { cn } from "@/lib/utils";

export default function RetroGrid({
  className,
  angle = 65,
}: {
  className?: string;
  angle?: number;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden  [perspective:200px]",
        className,
      )}
      style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className={cn(
            "animate-grid",
            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
            
            // Light Styles - Changed to Green
            "[background-image:linear-gradient(to_right,rgba(0,255,0)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,255,0,0.3)_1px,transparent_0)]",
            
            // Dark styles - Changed to Green
            "dark:[background-image:linear-gradient(to_right,rgba(0,255,0,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,255,0,0.2)_1px,transparent_0)]",
          )}
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t to-transparent to-90% dark:from-black" />
    </div>
  );
}
