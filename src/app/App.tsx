import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from "motion/react";
import { ProjectCard } from "./components/ProjectCard";

const DISPLAY_FONT = "'Anton', 'Test Manuka', Impact, sans-serif";
const BODY_FONT = "'Plus Jakarta Sans', sans-serif";

const PROJECTS = [
  { title: "Aurora", client: "Studio Nórdico", date: "03/2026", tag: "UX/UI", description: "Redesign do app de meditação focado em onboarding emocional e métricas de bem-estar diário." },
  { title: "Pólen", client: "Cooperativa Rural", date: "11/2025", tag: "Product", description: "Plataforma de gestão de safra para pequenos produtores, com sincronização offline e relatórios." },
  { title: "Cardume", client: "Marca própria", date: "07/2025", tag: "Branding", description: "Identidade visual completa para um clube de assinatura de livros independentes brasileiros." },
  { title: "Helios", client: "EnerLab", date: "04/2025", tag: "UX/UI", description: "Dashboard de monitoramento de painéis solares residenciais, com alertas inteligentes." },
  { title: "Vento Sul", client: "Festival ZN", date: "01/2025", tag: "Visual", description: "Sistema de comunicação e sinalização para festival de música no litoral catarinense." },
  { title: "Mira", client: "Clínica Saúde+", date: "09/2024", tag: "Product", description: "App de telemedicina com triagem por IA, agendamento e prontuário acessível ao paciente." },
  { title: "Tear", client: "Coletivo Renda", date: "05/2024", tag: "Branding", description: "Marca para coletivo de artesãs do nordeste, da identidade ao e-commerce próprio." },
  { title: "Órbita", client: "TechStartup", date: "02/2024", tag: "UX/UI", description: "Redesign de SaaS B2B com foco em redução de churn e ativação de novos times." },
];

function Star({ size = 24, color = "#ffffff" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 1.5c.5 4.6 2.3 7.6 6.9 8.2C13.7 10.7 11.9 13.5 12 22.5c-.4-7.7-2.6-10.5-6.9-11C9.6 11 11.6 8.1 12 1.5z"
        fill={color}
      />
    </svg>
  );
}

function CardItem({
  index,
  scrollYProgress,
  project,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
  project: (typeof PROJECTS)[number];
}) {
  const start = 0.2 + index * 0.025;
  const end = Math.min(0.75 + index * 0.025, 0.98);
  const y = useTransform(scrollYProgress, [start, end], [140, 0]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  return (
    <motion.div style={{ y, opacity }}>
      <ProjectCard
        title={project.title}
        client={project.client}
        date={project.date}
        tag={project.tag}
        description={project.description}
        imageHeight={index % 3 === 0 ? 320 : 240}
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
  const heroFontSize = isMobile ? Math.min(vw * 0.24, 160) : Math.min(vw * 0.16, 280);
  const navFontSize = 22;

  const fontSize = useTransform(scrollYProgress, [0, 0.85], [heroFontSize, navFontSize]);
  const lineGap = useTransform(scrollYProgress, [0, 0.85], [heroFontSize * 0.04, 0]);

  const heroLeft = isMobile ? 24 : 64;
  const heroTop = vh / 2 - heroFontSize * 1.0;
  const navLeft = 32;
  const navTop = 22;

  const nameLeft = useTransform(scrollYProgress, [0, 0.85], [heroLeft, navLeft]);
  const nameTop = useTransform(scrollYProgress, [0, 0.85], [heroTop, navTop]);

  const twoLineOpacity = useTransform(scrollYProgress, [0.72, 0.86], [1, 0]);
  const navLineOpacity = useTransform(scrollYProgress, [0.78, 0.92], [0, 1]);

  const bgColor = useTransform(scrollYProgress, [0, 1], ["#2649d5", "#090f27"]);
  const borderColor = useTransform(scrollYProgress, [0, 1], ["#ffffff", "#2649d5"]);
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const cardsY = useTransform(scrollYProgress, [0.2, 0.95], [vh, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  const [transitionDone, setTransitionDone] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setTransitionDone(v >= 0.92);
  });

  return (
    <>
      {/* Scroll-driver: tall container so scroll progresses through transition */}
      <div ref={containerRef} style={{ height: "300vh", position: "relative" }} />

      {/* Sticky stage covers viewport */}
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: bgColor,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {/* Decorative border frame */}
        <motion.div
          style={{
            position: "absolute",
            inset: 24,
            border: "2px solid",
            borderColor: borderColor,
            pointerEvents: "none",
          }}
        />

        {/* Tagline */}
        <motion.p
          style={{
            position: "absolute",
            right: isMobile ? 40 : 80,
            bottom: isMobile ? 56 : 96,
            opacity: taglineOpacity,
            color: "#ffffff",
            fontFamily: BODY_FONT,
            fontWeight: 300,
            fontSize: isMobile ? 20 : 36,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            textAlign: "right",
            maxWidth: 360,
            margin: 0,
          }}
        >
          Fazendo design para pessoas
        </motion.p>

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
          }}
        >
          <motion.div style={{ opacity: twoLineOpacity }}>
            <motion.p style={{ fontSize, margin: 0, fontFamily: DISPLAY_FONT }}>BARBARA</motion.p>
            <motion.div
              style={{
                marginTop: lineGap,
                display: "flex",
                alignItems: "flex-start",
                gap: "0.05em",
              }}
            >
              <motion.p style={{ fontSize, margin: 0, fontFamily: DISPLAY_FONT }}>BRANCO</motion.p>
              <motion.div style={{ marginTop: useTransform(fontSize, (f) => f * 0.12) }}>
                <Star size={Math.max(heroFontSize * 0.08, 14)} color="#ffffff" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{
              opacity: navLineOpacity,
              position: "absolute",
              top: 0,
              left: 0,
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: DISPLAY_FONT,
                fontStyle: "italic",
                fontSize: navFontSize,
                color: "#dde0ef",
                letterSpacing: "0.04em",
              }}
            >
              BARBARA BRANCO ✦
            </span>
          </motion.div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: isMobile ? 96 : 140,
            bottom: 24,
            y: cardsY,
            opacity: cardsOpacity,
            overflowY: transitionDone ? "auto" : "hidden",
            pointerEvents: transitionDone ? "auto" : "none",
          }}
        >
          <div
            className="grid gap-6 px-8 pb-16 pt-4"
            style={{
              gridTemplateColumns: isMobile
                ? "repeat(2, minmax(0, 1fr))"
                : vw < 1200
                ? "repeat(3, minmax(0, 1fr))"
                : "repeat(4, minmax(0, 1fr))",
            }}
          >
            {PROJECTS.map((p, i) => (
              <CardItem key={i} index={i} scrollYProgress={scrollYProgress} project={p} />
            ))}
          </div>
          <div
            className="px-8 pb-12 flex items-center justify-between"
            style={{ color: "#dde0ef", fontFamily: BODY_FONT, fontSize: 14, opacity: 0.6 }}
          >
            <span>© 2026 Barbara Branco</span>
            <span>hello@barbarabranco.com</span>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
