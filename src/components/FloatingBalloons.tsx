import { motion } from "framer-motion";

interface Balloon {
  id: number;
  x: string;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  color: string;
}

const balloons: Balloon[] = [
  { id: 1, x: "8%",  size: 48, delay: 0,   duration: 8,  opacity: 0.55, color: "#ff5e8e" },
  { id: 2, x: "18%", size: 32, delay: 1.5, duration: 10, opacity: 0.35, color: "#ffb3cb" },
  { id: 3, x: "72%", size: 56, delay: 0.8, duration: 9,  opacity: 0.5,  color: "#ff5e8e" },
  { id: 4, x: "85%", size: 36, delay: 2.2, duration: 11, opacity: 0.4,  color: "#ffcfdf" },
  { id: 5, x: "55%", size: 28, delay: 3,   duration: 7,  opacity: 0.3,  color: "#ff5e8e" },
  { id: 6, x: "42%", size: 44, delay: 0.4, duration: 12, opacity: 0.25, color: "#ffb3cb" },
  { id: 7, x: "92%", size: 24, delay: 1,   duration: 8,  opacity: 0.45, color: "#ff5e8e" },
  { id: 8, x: "3%",  size: 38, delay: 2.5, duration: 10, opacity: 0.3,  color: "#ffcfdf" },
];

export default function FloatingBalloons({ count = 8 }: { count?: number }) {
  const visible = balloons.slice(0, count);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {visible.map((b) => (
        <motion.div
          key={b.id}
          className="absolute bottom-0"
          style={{ left: b.x }}
          initial={{ y: "100%" }}
          animate={{ y: "-120%" }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            animate={{ x: [0, 12, -8, 14, 0] }}
            transition={{ duration: b.duration * 0.6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* шарик */}
            <div
              style={{
                width: b.size,
                height: b.size * 1.15,
                backgroundColor: b.color,
                opacity: b.opacity,
                borderRadius: "50% 50% 50% 50% / 55% 55% 45% 45%",
                boxShadow: `inset -${b.size * 0.15}px -${b.size * 0.1}px ${b.size * 0.3}px rgba(0,0,0,0.15), inset ${b.size * 0.1}px ${b.size * 0.1}px ${b.size * 0.2}px rgba(255,255,255,0.4)`,
                position: "relative",
              }}
            >
              {/* блик */}
              <div
                style={{
                  position: "absolute",
                  top: "18%",
                  left: "20%",
                  width: "28%",
                  height: "22%",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.55)",
                  transform: "rotate(-30deg)",
                }}
              />
            </div>
            {/* ниточка */}
            <div
              style={{
                width: 1,
                height: b.size * 0.6,
                backgroundColor: b.color,
                opacity: b.opacity * 0.7,
                margin: "0 auto",
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
