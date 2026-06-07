import { useParams, useNavigate } from "react-router";
import { PROJECTS } from "../data/projects";

const DISPLAY_FONT = "'Test Manuka', 'Anton', Impact, sans-serif";
const BODY_FONT = "'Plus Jakarta Sans', sans-serif";

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project || !project.page) {
    navigate("/");
    return null;
  }

  const { page } = project;

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", fontFamily: BODY_FONT }}>
      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "fixed",
          top: 32,
          left: 32,
          zIndex: 100,
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: BODY_FONT,
          fontSize: 14,
          color: "#090f27",
          display: "flex",
          alignItems: "center",
          gap: 8,
          letterSpacing: "0.05em",
        }}
      >
        ← VOLTAR
      </button>

      {/* Hero image */}
      <div style={{ width: "100%", height: "60vh", overflow: "hidden" }}>
        {page.heroImage ? (
          <img
            src={page.heroImage}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", backgroundColor: "#717171" }} />
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "64px 48px", maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          {/* Left column */}
          <div>
            <h1
              style={{
                fontFamily: BODY_FONT,
                fontWeight: 700,
                fontSize: 96,
                lineHeight: 0.9,
                color: "#090f27",
                margin: 0,
                marginBottom: 48,
              }}
            >
              {project.title}
            </h1>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {page.type && (
                <div style={{ borderTop: "1px solid #dde0ef", paddingTop: 16, paddingBottom: 16 }}>
                  <p style={{ margin: 0, fontSize: 18, color: "#090f27", fontWeight: 400 }}>{page.type}</p>
                </div>
              )}
              {page.tools && (
                <div style={{ borderTop: "1px solid #dde0ef", paddingTop: 16, paddingBottom: 16 }}>
                  <p style={{ margin: 0, fontSize: 18, color: "#090f27", fontWeight: 400 }}>{page.tools}</p>
                </div>
              )}
              {page.category && (
                <div style={{ borderTop: "1px solid #dde0ef", borderBottom: "1px solid #dde0ef", paddingTop: 16, paddingBottom: 16 }}>
                  <p style={{ margin: 0, fontSize: 18, color: "#090f27", fontWeight: 400 }}>{page.category}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right column - body text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingTop: 8 }}>
            {page.body?.map((paragraph, i) => (
              <p
                key={i}
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: "#090f27",
                  fontWeight: 300,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
