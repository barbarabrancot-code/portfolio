import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from "motion/react";
import { ProjectCard } from "./components/ProjectCard";
import { PROJECTS } from "./data/projects";

const DISPLAY_FONT = "'Test Manuka', 'Anton', Impact, sans-serif";
const BODY_FONT = "'Plus Jakarta Sans', sans-serif";

function CardItem({
  index,
  scrollYProgress,
  project,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
  project: (typeof PROJECTS)[number];
}) {
  const navigate = useNavigate();
  const start = 0.2 + index * 0.025;
  const end = Math.min(0.5 + index * 0.02, 0.7);
  const y = useTransform(scrollYProgress, [start, end], [60, 0]);
  const opacity = useTransform(scrollYProgress, [start, end, 1], [0, 1, 1]);
  return (
    <motion.div
      style={{ y, opacity, height: "100%", cursor: project.page ? "pointer" : "default" }}
      onClick={() => project.page && navigate(`/project/${project.slug}`)}
    >
      <ProjectCard
        title={project.title}
        client={project.client}
        date={project.date}
        tag={project.tag}
        description={project.description}
        image={project.image}
      />
    </motion.div>
  );
}

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [vw, setVw] = useState(typeof window !== "undefined" ? window.innerWidth : 1440);
  const [vh, setVh] = useState(typeof window !== "undefined" ? window.innerHeight : 900);
  useEffect(() => {
    const onResize = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = vw < 768;
  const heroFontSize = isMobile ? Math.min(vw * 0.14, 100) : 300;
  const navFontSize = isMobile ? 14 : 22;

  const fontSize = useTransform(scrollYProgress, [0, 0.4], [heroFontSize, navFontSize]);
  const lineGap = useTransform(scrollYProgress, [0, 0.4], [isMobile ? -8 : -40, 0]);

  const heroLeft = isMobile ? 24 : 64;
  const heroTop = isMobile ? 40 : vh - 96 - heroFontSize * 1.7;
  const navLeft = isMobile ? 16 : 32;
  const navTop = isMobile ? 20 : 32;

  const nameLeft = useTransform(scrollYProgress, [0, 0.4], [heroLeft, navLeft]);
  const nameTop = useTransform(scrollYProgress, [0, 0.4], [heroTop, navTop]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 1]);

  const bgColor = useTransform(scrollYProgress, [0, 1], ["#2649d5", "#090f27"]);
  const borderColor = useTransform(scrollYProgress, [0, 1], ["#ffffff", "#2649d5"]);
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.35, 0.4, 1], [1, 1, 0, 0]);

  const cardsY = useTransform(scrollYProgress, [0.2, 0.5], [vh, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0.2, 0.5, 1], [0, 1, 1]);

  const [transitionDone, setTransitionDone] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v >= 0.5) setTransitionDone(true);
  });

  return (
    <>
      <div ref={containerRef} style={{ height: "300vh", position: "relative" }} />

      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: bgColor,
          overflow: "visible",
          zIndex: 0,
        }}
      >
        {/* Decorative border frame - top line only */}
        <motion.div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            borderTop: "2px solid",
            borderColor: borderColor,
            pointerEvents: "none",
          }}
        />

        {/* Tagline */}
        <motion.p
          style={{
            position: "absolute",
            ...(isMobile
              ? { left: "50%", top: "50%", transform: "translate(-50%, -50%)", textAlign: "center", width: "80%" }
              : { right: 80, bottom: 96, textAlign: "right", maxWidth: 360 }
            ),
            opacity: taglineOpacity,
            color: "#ffffff",
            fontFamily: BODY_FONT,
            fontWeight: 300,
            fontSize: isMobile ? 22 : 36,
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            margin: 0,
            pointerEvents: "none",
          }}
        >
          Fazendo design para pessoas
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          style={{
            position: "absolute",
            bottom: isMobile ? 56 : 40,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: taglineOpacity,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            pointerEvents: "none",
          }}
        >
          <span style={{ fontFamily: BODY_FONT, fontSize: 11, letterSpacing: "0.15em", color: "#0C1A51" }}>SCROLL</span>
          <span style={{ color: "#0C1A51", fontSize: 18 }}>↓</span>
        </motion.div>

        {/* Animated name */}
        <motion.div
          style={{
            position: "absolute",
            left: nameLeft,
            top: nameTop,
            color: "#dde0ef",
            fontFamily: DISPLAY_FONT,
            fontStyle: "italic",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            pointerEvents: "none",
            opacity: nameOpacity,
            zIndex: 20,
          }}
        >
          <motion.p style={{ fontSize, margin: 0, fontFamily: DISPLAY_FONT }}>BARBARA</motion.p>
          <motion.p style={{ fontSize, margin: 0, marginTop: lineGap, fontFamily: DISPLAY_FONT }}>BRANCO</motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: isMobile ? 64 : 100,
            bottom: 24,
            y: cardsY,
            opacity: cardsOpacity,
            overflowY: transitionDone ? "auto" : "hidden",
            pointerEvents: transitionDone ? "auto" : "none",
            zIndex: 10,
          }}
        >
          <div
            className="grid gap-6 px-8 pb-16 pt-4"
            style={{
              gridTemplateColumns: isMobile
                ? "repeat(1, minmax(0, 1fr))"
                : "repeat(3, minmax(0, 1fr))",
              gridAutoRows: "1fr",
            }}
          >
            {PROJECTS.map((p, i) => (
              <CardItem key={i} index={i} scrollYProgress={scrollYProgress} project={p} />
            ))}
          </div>
          <div
            className="px-8 pb-12"
            style={{ color: "#dde0ef", fontFamily: BODY_FONT, fontSize: 14, opacity: 0.6 }}
          >
            <span>© 2026 Barbara Branco</span>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
