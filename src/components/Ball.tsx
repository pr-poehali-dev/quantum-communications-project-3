interface BallProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  opacity?: number;
  variant?: "pink" | "light" | "pale";
}

const variants = {
  pink:  { base: "#ff5e8e", mid: "#ff85aa", light: "#ffb3c8", shine: "rgba(255,255,255,0.60)" },
  light: { base: "#ffaec5", mid: "#ffcad8", light: "#ffe4ed", shine: "rgba(255,255,255,0.65)" },
  pale:  { base: "#ffd6e4", mid: "#ffe6ef", light: "#fff2f7", shine: "rgba(255,255,255,0.70)" },
};

export default function Ball({
  size = 40,
  className = "",
  style = {},
  opacity = 1,
  variant = "pink",
}: BallProps) {
  const c = variants[variant];
  const id = `ball-grad-${size}-${variant}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ opacity, flexShrink: 0, ...style }}
      aria-hidden
    >
      <defs>
        <radialGradient id={id} cx="38%" cy="32%" r="62%" fx="38%" fy="32%">
          <stop offset="0%"   stopColor={c.light} />
          <stop offset="35%"  stopColor={c.mid}   />
          <stop offset="75%"  stopColor={c.base}  />
          <stop offset="100%" stopColor={c.base}  stopOpacity="0.85" />
        </radialGradient>
        <filter id={`shadow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor={c.base} floodOpacity="0.35" />
        </filter>
      </defs>
      {/* основной шар */}
      <circle
        cx="50" cy="50" r="46"
        fill={`url(#${id})`}
        filter={`url(#shadow-${id})`}
      />
      {/* блик основной */}
      <ellipse cx="35" cy="30" rx="14" ry="10"
        fill={c.shine}
        transform="rotate(-30 35 30)"
      />
      {/* блик маленький */}
      <ellipse cx="28" cy="24" rx="5" ry="3.5"
        fill="rgba(255,255,255,0.85)"
        transform="rotate(-25 28 24)"
      />
    </svg>
  );
}
