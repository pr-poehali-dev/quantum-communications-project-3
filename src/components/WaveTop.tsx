interface WaveTopProps {
  fill: string;
  variant?: 1 | 2 | 3 | 4;
}

// Каждый path описывает волнистый верхний край.
// Заливка = цвет текущей секции, рисуется поверх предыдущей.
const paths: Record<number, string> = {
  1: "M0,60 C200,0 400,80 600,30 C800,-20 1100,70 1440,20 L1440,100 L0,100 Z",
  2: "M0,40 C150,90 350,0 550,55 C750,110 950,10 1150,50 C1300,80 1400,30 1440,45 L1440,100 L0,100 Z",
  3: "M0,55 C250,5 450,90 700,25 C900,-15 1150,75 1440,35 L1440,100 L0,100 Z",
  4: "M0,35 C180,85 380,5 580,60 C780,115 1000,15 1200,55 C1320,80 1400,40 1440,50 L1440,100 L0,100 Z",
};

export default function WaveTop({ fill, variant = 1 }: WaveTopProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-0 left-0 right-0 overflow-hidden"
      style={{ height: 70, transform: "translateY(-69px)" }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <path d={paths[variant]} fill={fill} />
      </svg>
    </div>
  );
}
