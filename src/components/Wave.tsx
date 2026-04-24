interface WaveProps {
  topColor: string;
  bottomColor: string;
  variant?: 1 | 2 | 3 | 4;
  flip?: boolean;
}

const paths: Record<number, string> = {
  1: "M0,40 C180,90 360,0 540,50 C720,100 900,20 1080,60 C1260,100 1440,30 1440,30 L1440,0 L0,0 Z",
  2: "M0,30 C120,70 240,10 400,55 C560,100 680,15 840,50 C1000,85 1160,10 1300,45 C1380,65 1440,40 1440,40 L1440,0 L0,0 Z",
  3: "M0,50 C200,100 400,0 600,60 C800,120 1000,10 1200,55 C1320,80 1400,35 1440,45 L1440,0 L0,0 Z",
  4: "M0,35 C150,80 300,5 480,50 C660,95 780,20 960,55 C1140,90 1320,15 1440,40 L1440,0 L0,0 Z",
};

export default function Wave({ topColor, bottomColor, variant = 1, flip = false }: WaveProps) {
  return (
    <div
      className="relative w-full overflow-hidden leading-none pointer-events-none"
      style={{
        backgroundColor: topColor,
        transform: flip ? "scaleY(-1)" : undefined,
        marginBottom: flip ? undefined : "-1px",
        marginTop: flip ? "-1px" : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block w-full"
        style={{ height: 80, display: "block" }}
      >
        <path d={paths[variant]} fill={flip ? topColor : bottomColor} />
      </svg>
    </div>
  );
}
