"use client";

import Image from "next/image";

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "Comment ça marche" },
  { href: "#about", label: "À propos" },
  { href: "#waitlist", label: "Rejoindre la liste" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0, 180, 255, 0.15)",
        background: "linear-gradient(180deg, rgba(4,8,15,0.95) 0%, rgba(2,4,8,1) 100%)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "64px",
        paddingBottom: "32px",
      }}
    >
      <style jsx>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          margin-bottom: 48px;
        }
        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
        }
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .footer-brand { grid-column: 1 / -1; }
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr;
            gap: 48px;
          }
          .footer-brand { grid-column: auto; }
        }
      `}</style>

      {/* Background Grid Effect */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <div className="footer-grid">
          {/* Brand col */}
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{
                position: "relative",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(circle, rgba(0,180,255,0.4) 0%, transparent 70%)",
                  filter: "blur(8px)",
                  zIndex: 0
                }} />
                <Image
                  src="/logo-saina-transparent.png"
                  alt="Saina Labs Logo"
                  width={48}
                  height={48}
                  style={{ objectFit: "contain", zIndex: 1, position: "relative" }}
                />
              </div>
              <span style={{
                color: "var(--text-primary)",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "1.4rem",
                letterSpacing: "-0.01em",
                background: "linear-gradient(90deg, #FFFFFF, #B0BEC5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Saina Labs
              </span>
            </div>
            <p style={{
              color: "var(--cyan)",
              fontSize: "0.8rem",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              marginBottom: "12px",
            }}>
              L&apos;IA travaille. Vous dirigez.
            </p>
            <p style={{
              color: "var(--text-muted)",
              fontSize: "0.875rem",
              lineHeight: 1.7,
              maxWidth: "320px",
              marginBottom: "20px",
            }}>
              Agence d&apos;automatisation IA pour les entrepreneurs malgaches.
              Résultats concrets. Garantie ROI 30 jours.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                {
                  href: "https://www.linkedin.com/in/tomefy-ny-soa-andry-tsiresy-9a111a322",
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
                  label: "LinkedIn",
                },
                {
                  href: "https://web.facebook.com/profile.php?id=61574303794263",
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>,
                  label: "Facebook",
                },
                {
                  href: "https://wa.me/261327137415",
                  icon: <WhatsAppIcon />,
                  label: "WhatsApp",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--cyan)";
                    e.currentTarget.style.borderColor = "rgba(0,180,255,0.3)";
                    e.currentTarget.style.background = "rgba(0,180,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav col */}
          <div>
            <h4
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: "16px",
              }}
            >
              Navigation
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div>
            <h4
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: "16px",
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
                📍 Antananarivo, Madagascar
              </p>
              <a
                href="https://wa.me/261327137415"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--cyan)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                💬 WhatsApp Business
              </a>
              <a
                href="mailto:contact@sainalabs.com"
                style={{
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--cyan)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                ✉️ contact@sainalabs.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--border), transparent)",
            marginBottom: "24px",
          }}
        />

        {/* Bottom row */}
        <div className="footer-bottom">
          <p style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>
            © 2026 Saina Labs · Antananarivo, Madagascar · Tous droits réservés
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <a
              href="#"
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.75rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              Mentions légales
            </a>
            <a
              href="#"
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.75rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
