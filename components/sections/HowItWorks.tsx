"use client";

import { ClipboardList, Lightbulb, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Diagnostic gratuit",
    duration: "1 à 3 jours",
    description:
      "On analyse votre activité et on identifie les 3 à 5 tâches les plus chronophages. Une simple conversation — pas de jargon.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Solution sur-mesure",
    duration: "3 à 7 jours",
    description:
      "On conçoit la solution adaptée à votre réalité : taille, budget, outils existants. Chaque solution est unique.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Déploiement rapide",
    duration: "1 à 2 semaines",
    description:
      "On déploie, on connecte vos outils (WhatsApp, Excel, Mobile Money) et on teste tout avec vous. Zéro surprise.",
  },
  {
    icon: LifeBuoy,
    number: "04",
    title: "Suivi & garantie",
    duration: "En continu",
    description:
      "On reste disponibles pour ajuster et optimiser. Garantie ROI 30 jours : si les résultats ne sont pas là, on vous rembourse.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding"
      style={{ position: "relative" }}
    >
      {/* Center glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-xl" style={{ position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div
            className="tag-pill"
            style={{ marginBottom: "20px", display: "inline-flex" }}
          >
            Le processus
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "20px" }}>
            Simple, rapide,{" "}
            <span className="gradient-text">sans prise de tête</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "480px",
              margin: "0 auto",
              fontSize: "1.05rem",
            }}
          >
            De la première conversation à votre première automatisation en
            production — voici comment on travaille ensemble.
          </p>
        </div>

        {/* Steps */}
        <div style={{ position: "relative" }}>
          {/* Connecting line (desktop) */}
          <div
            style={{
              position: "absolute",
              top: "52px",
              left: "calc(12.5% - 1px)",
              right: "calc(12.5% - 1px)",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), rgba(0,180,255,0.3), rgba(124,58,237,0.1), transparent)",
              pointerEvents: "none",
              display: "none",
            }}
            className="md:block"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
            }}
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  {/* Icon circle */}
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, rgba(0,180,255,0.15), rgba(124,58,237,0.1))",
                      border: "1px solid rgba(124, 58, 237, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      position: "relative",
                      flexShrink: 0,
                    }}
                  >
                    {/* Pulse ring */}
                    <div
                      style={{
                        position: "absolute",
                        inset: "-4px",
                        borderRadius: "50%",
                        border: "1px solid rgba(124, 58, 237, 0.15)",
                      }}
                    />
                    <Icon size={28} color="#7C3AED" />

                    {/* Number badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-6px",
                        right: "-6px",
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #00B4FF, #7C3AED)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.65rem",
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 800,
                        color: "white",
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  {/* Duration pill */}
                  <div
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "#7C3AED",
                      background: "rgba(124,58,237,0.08)",
                      border: "1px solid rgba(124,58,237,0.2)",
                      borderRadius: "100px",
                      padding: "3px 10px",
                      marginBottom: "12px",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {step.duration}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      marginBottom: "10px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <a
            href="#waitlist"
            className="btn-primary"
            style={{
              padding: "15px 32px",
              borderRadius: "12px",
              fontSize: "0.9375rem",
              textDecoration: "none",
            }}
          >
            Démarrer mon diagnostic gratuit →
          </a>
        </div>
      </div>
    </section>
  );
}
