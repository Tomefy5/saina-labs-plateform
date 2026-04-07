"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "Comment ça marche" },
  { href: "#about", label: "À propos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navBg = scrolled || mobileOpen;

  return (
    <>
      <style jsx>{`
        .nav-desktop { display: none; }
        .nav-hamburger { display: block; }
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .nav-hamburger { display: none !important; }
        }
      `}</style>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.3s ease",
          background: navBg ? "rgba(4, 8, 15, 0.97)" : "transparent",
          backdropFilter: navBg ? "blur(24px)" : "none",
          WebkitBackdropFilter: navBg ? "blur(24px)" : "none",
          borderBottom: navBg
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div className="container-xl">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "72px",
            }}
          >
            {/* Logo */}
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
              }}
            >
              <Image
                src="/logo-saina-labs-gd-removebg-preview.png"
                alt="Saina Labs Logo"
                width={48}
                height={48}
                style={{ objectFit: "contain", width: 44, height: 44 }}
              />
              <span
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Saina Labs
              </span>
            </a>

            {/* Desktop nav */}
            <div
              className="nav-desktop"
              style={{
                alignItems: "center",
                gap: "32px",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    transition: "color 0.2s ease",
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
              <a
                href="#waitlist"
                className="btn-primary"
                style={{
                  padding: "10px 24px",
                  borderRadius: "10px",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                }}
              >
                Rejoindre la liste
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="nav-hamburger"
              aria-label="Menu"
              style={{
                background: "none",
                border: "none",
                color: "var(--text-primary)",
                cursor: "pointer",
                padding: "8px",
              }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          style={{
            maxHeight: mobileOpen ? "400px" : "0px",
            overflow: "hidden",
            transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            background: "rgba(4, 8, 15, 0.99)",
            boxShadow: mobileOpen ? "0 20px 60px rgba(0,0,0,0.6)" : "none",
          }}
        >
          <div style={{ padding: "8px 24px 28px" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  padding: "14px 0",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  borderBottom: "1px solid var(--border)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="btn-primary"
              style={{
                marginTop: "20px",
                padding: "14px 22px",
                borderRadius: "12px",
                fontSize: "0.9rem",
                textDecoration: "none",
                textAlign: "center",
                width: "100%",
              }}
            >
              Rejoindre la liste
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
