"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown, Zap, Play } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number; y: number; vx: number; vy: number;
      radius: number; opacity: number; color: string;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["#00B4FF", "#2563EB", "#38D1F8", "#1E40AF"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 180, 255, ${0.08 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "72px",
      }}
    >
      <style jsx>{`
        .hero-ctas {
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 100%;
          max-width: 340px;
          margin-top: 24px;
        }
        .hero-ctas .hero-btn {
          width: 100%;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
          max-width: 580px;
        }
        @media (min-width: 640px) {
          .hero-ctas {
            flex-direction: row;
            max-width: none;
            justify-content: center;
            gap: 16px;
          }
          .hero-ctas .hero-btn {
            width: auto;
          }
        }
        @media (min-width: 768px) {
          .hero-stats {
            gap: 40px;
          }
        }
      `}</style>

      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.7,
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(0,180,255,0.12) 0%, rgba(37,99,235,0.06) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Bottom gradient fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background:
            "linear-gradient(to top, var(--bg-primary), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        className="container-xl"
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          paddingTop: "40px",
          paddingBottom: "80px",
        }}
      >
        {/* Badge */}
        <div className="tag-pill" style={{ animation: "none" }}>
          <Zap size={12} />
          Agence IA & Automatisation · Antananarivo
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
            fontWeight: 800,
            maxWidth: "900px",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            fontFamily: "'Syne', sans-serif",
            color: "var(--text-primary)",
            textShadow: "0 10px 40px rgba(0,0,0,0.4)",
          }}
        >
          L&apos;IA travaille.{" "}
          <span
            className="gradient-text"
            style={{
              filter: "drop-shadow(0 0 15px rgba(0,180,255,0.3))",
              display: "inline-block",
            }}
          >
            Vous dirigez.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            fontWeight: 400,
            lineHeight: 1.7,
          }}
        >
          Saina Labs automatise les tâches répétitives de votre entreprise
          grâce à des outils IA conçus spécifiquement pour les{" "}
          <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>
            entrepreneurs malgaches
          </strong>
          .
        </p>

        {/* CTAs - Premium buttons */}
        <div className="hero-ctas">
          <a
            href="#waitlist"
            className="btn-primary hero-btn"
            style={{
              padding: "16px 32px",
              borderRadius: "14px",
              fontSize: "0.95rem",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Rejoindre les premiers
            <ArrowRight size={18} style={{ marginLeft: "4px" }} />
          </a>
          <a
            href="#services"
            className="btn-secondary hero-btn"
            style={{
              padding: "16px 32px",
              borderRadius: "14px",
              fontSize: "0.95rem",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            <Play
              size={16}
              style={{
                fill: "currentColor",
                opacity: 0.7,
              }}
            />
            Voir comment ça marche
          </a>
        </div>

        {/* Social proof */}
        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            letterSpacing: "0.02em",
            marginTop: "8px",
          }}
        >
          Étude de marché réalisée auprès de{" "}
          <span style={{ color: "var(--cyan)", fontWeight: 600 }}>
            +50 entrepreneurs malgaches
          </span>{" "}
          · Lancement prévu 2026
        </p>

        {/* Stats row */}
        <div
          className="hero-stats"
          style={{
            marginTop: "16px",
            paddingTop: "28px",
            borderTop: "1px solid var(--border)",
          }}
        >
          {[
            { value: "40+", label: "heures/mois récupérées" },
            { value: "24/7", label: "disponibilité IA" },
            { value: "2sem.", label: "délai moyen de déploiement" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
                  background:
                    "linear-gradient(135deg, #00B4FF, #38D1F8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "clamp(0.65rem, 1.8vw, 0.8rem)",
                  color: "var(--text-muted)",
                  marginTop: "4px",
                  lineHeight: 1.35,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#problems"
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          color: "var(--text-muted)",
          animation: "float 2s ease-in-out infinite",
          textDecoration: "none",
        }}
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
