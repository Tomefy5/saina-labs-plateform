"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Zap, Shield, Smartphone, Clock } from "lucide-react";

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

    const colors = ["#00B4FF", "#2563EB", "#38D1F8", "#7C3AED", "#A78BFA"];

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
          max-width: 380px;
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
        .hero-trust {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
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
          .hero-trust {
            flex-direction: row;
            gap: 20px;
          }
        }
        @media (min-width: 768px) {
          .hero-stats {
            gap: 40px;
          }
        }
        .hero-floating-logo {
          position: absolute;
          top: 15%;
          right: -10%;
          opacity: 0.25;
          z-index: 1;
          pointer-events: none;
          filter: drop-shadow(0 0 60px rgba(0, 180, 255, 0.3)) drop-shadow(0 0 100px rgba(124, 58, 237, 0.3));
          animation: floatSlow 8s ease-in-out infinite;
          transform: rotate(15deg);
        }
        @media (min-width: 1024px) {
          .hero-floating-logo {
            right: 5%;
            top: 25%;
            opacity: 0.4;
          }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(15deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
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
            "radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, rgba(0,180,255,0.12) 30%, rgba(37,99,235,0.06) 60%, transparent 80%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Premium Floating Logo */}
      <div className="hero-floating-logo">
        <Image
          src="/logo-saina-transparent.png"
          alt=""
          width={450}
          height={450}
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

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
          Automatisation IA pour entrepreneurs malgaches
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
              filter: "drop-shadow(0 0 15px rgba(124,58,237,0.3))",
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
            maxWidth: "620px",
            fontWeight: 400,
            lineHeight: 1.7,
          }}
        >
          Gagnez{" "}
          <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
            40h par mois
          </strong>
          . Automatisez réponses WhatsApp, suivi client et gestion des stocks
          — sans rien changer à vos habitudes.
        </p>

        {/* CTAs */}
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
            Diagnostic gratuit
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
            Voir les résultats
          </a>
        </div>

        {/* Trust badges */}
        <div className="hero-trust" style={{ marginTop: "8px" }}>
          {[
            { icon: Shield, text: "Garantie ROI 30 jours" },
            { icon: Smartphone, text: "WhatsApp natif" },
            { icon: Clock, text: "Déploiement en 2 semaines" },
          ].map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                }}
              >
                <Icon size={13} color="#7C3AED" />
                <span>{badge.text}</span>
              </div>
            );
          })}
        </div>

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
            { value: "40h/mois", label: "de temps récupéré" },
            { value: "24/7", label: "réponses automatiques" },
            { value: "30j", label: "garantie ROI" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
                  background:
                    "linear-gradient(135deg, #00B4FF, #7C3AED)",
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
