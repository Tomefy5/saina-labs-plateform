"use client";

import { MessageSquare, Database, Brain, TrendingUp, Wallet } from "lucide-react";

const problems = [
  {
    icon: MessageSquare,
    text: "Vous perdez des heures à répondre aux mêmes messages sur WhatsApp",
    highlight: "heures à répondre",
  },
  {
    icon: Database,
    text: "Vos données clients sont éparpillées entre Excel, notes papier et mémoire",
    highlight: "éparpillées",
  },
  {
    icon: Wallet,
    text: "Vos paiements Mobile Money et relances sont encore manuels — chaque oubli vous coûte",
    highlight: "manuels",
  },
  {
    icon: Brain,
    text: "Vous savez que l'IA existe, mais vous n'avez ni le temps ni le budget pour l'implémenter",
    highlight: "pas le temps",
  },
  {
    icon: TrendingUp,
    text: "Vos concurrents automatisent déjà — chaque mois sans action, c'est du chiffre d'affaires perdu",
    highlight: "chiffre perdu",
  },
];

export default function Problems() {
  return (
    <section
      id="problems"
      className="section-padding"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <style jsx>{`
        .problems-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 640px) {
          .problems-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .problems-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
      {/* Subtle glow left */}
      <div
        style={{
          position: "absolute",
          left: "-200px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div
            className="tag-pill"
            style={{ marginBottom: "20px", display: "inline-flex" }}
          >
            Le diagnostic
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              marginBottom: "20px",
              maxWidth: "600px",
              margin: "0 auto 20px",
            }}
          >
            Vous reconnaissez{" "}
            <span className="gradient-text">ce quotidien ?</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "520px",
              margin: "0 auto",
              fontSize: "1.05rem",
            }}
          >
            Ces frustrations coûtent du temps, de l&apos;argent et des clients
            à des milliers d&apos;entrepreneurs malgaches chaque jour.
          </p>
        </div>

        {/* Problems grid */}
        <div
          className="problems-grid"
          style={{
            marginBottom: "64px",
          }}
        >
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <div
                key={i}
                className="glass-card card-noise"
                style={{
                  borderRadius: "16px",
                  padding: "28px 24px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "24px",
                    right: "24px",
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)",
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(124, 58, 237, 0.1)",
                    border: "1px solid rgba(124, 58, 237, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Icon size={20} color="#7C3AED" />
                </div>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    fontSize: "0.9375rem",
                  }}
                >
                  {problem.text}
                </p>

                {/* Number */}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "2.5rem",
                    color: "rgba(124, 58, 237, 0.06)",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition statement */}
        <div
          style={{
            textAlign: "center",
            padding: "40px 32px",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, rgba(0,180,255,0.05), rgba(124,58,237,0.05))",
            border: "1px solid rgba(124, 58, 237, 0.15)",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              color: "var(--text-primary)",
              lineHeight: 1.5,
            }}
          >
            Vous n&apos;avez pas besoin de devenir un expert en IA.{" "}
            <span className="gradient-text">
              Vous avez besoin que quelqu&apos;un le soit pour vous.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
