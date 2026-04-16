"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Est-ce que je dois être technologue pour utiliser vos services ?",
    a: "Absolument pas. Vous continuez à gérer votre business — on s'occupe de toute la partie technique. On vous forme à utiliser les outils qu'on déploie, en moins de quelques heures.",
  },
  {
    q: "Est-ce que c'est adapté à mon type d'activité ?",
    a: "Si vous avez des tâches répétitives — et toutes les entreprises en ont — Saina Labs peut vous aider. On travaille avec des commerces, e-commerces, agences RH, cabinets de recrutement, restaurants, prestataires de services, et plus encore.",
  },
  {
    q: "Combien de temps pour voir des résultats ?",
    a: "Une automatisation WhatsApp simple peut être opérationnelle en 48h. Un système complet prend 1 à 2 semaines. Vous verrez des résultats dès la première semaine.",
  },
  {
    q: "Comment fonctionne la garantie ROI 30 jours ?",
    a: "C'est simple : si après 30 jours vous ne constatez pas un gain de temps mesurable, on vous rembourse intégralement. On croit en nos solutions — c'est pourquoi on prend le risque, pas vous.",
  },
  {
    q: "Vous acceptez Mobile Money pour les paiements ?",
    a: "Oui. On s'adapte à vos habitudes de paiement. Mobile Money, virement bancaire, ou tout autre moyen qui vous convient. Pas de friction inutile.",
  },
  {
    q: "Que se passe-t-il si la connexion internet est instable ?",
    a: "Nos systèmes sont conçus pour le contexte malgache : connexion limitée, interruptions gérées sans perte de données. On n'impose pas des solutions pensées pour Paris ou New York.",
  },
  {
    q: "Et si j'ai déjà des outils en place (WhatsApp Business, Excel, etc.) ?",
    a: "Parfait. On s'intègre avec ce que vous avez déjà. Notre travail est de connecter vos outils entre eux et de les rendre plus intelligents — pas de les remplacer.",
  },
  {
    q: "Quel est l'engagement minimum ?",
    a: "Aucun engagement long terme. On commence par un diagnostic gratuit. Ensuite, on travaille projet par projet. Vous décidez de la suite en fonction des résultats — pas d'un contrat imposé.",
  },
  {
    q: "Comment garantissez-vous la confidentialité de mes données ?",
    a: "Vos données restent vôtres. Accord de confidentialité signé avec chaque client. Infrastructures sécurisées et bonnes pratiques de sécurité rigoureuses.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding" style={{ position: "relative" }}>
      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            className="tag-pill"
            style={{ marginBottom: "20px", display: "inline-flex" }}
          >
            FAQ
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Vos questions,{" "}
            <span className="gradient-text">nos réponses</span>
          </h2>
        </div>

        {/* Accordion */}
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: "1px solid var(--border)",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "22px 0",
                  background: "none",
                  border: "none",
                  color:
                    openIndex === i
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  transition: "color 0.2s",
                }}
              >
                <span style={{ flex: 1 }}>{faq.q}</span>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background:
                      openIndex === i
                        ? "rgba(124,58,237,0.15)"
                        : "rgba(255,255,255,0.04)",
                    border:
                      openIndex === i
                        ? "1px solid rgba(124,58,237,0.3)"
                        : "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  {openIndex === i ? (
                    <Minus size={14} color="#7C3AED" />
                  ) : (
                    <Plus size={14} color="var(--text-muted)" />
                  )}
                </div>
              </button>

              <div
                style={{
                  maxHeight: openIndex === i ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}
              >
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    paddingBottom: "24px",
                    paddingRight: "44px",
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "56px",
            padding: "36px",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, rgba(0,180,255,0.05), rgba(124,58,237,0.05))",
            border: "1px solid rgba(124,58,237,0.1)",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p
            style={{
              color: "var(--text-secondary)",
              marginBottom: "20px",
              fontSize: "0.95rem",
            }}
          >
            Vous avez une question spécifique à votre situation ?
          </p>
          <a
            href="https://wa.me/261327137415"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: "12px 28px",
              borderRadius: "10px",
              fontSize: "0.875rem",
              textDecoration: "none",
            }}
          >
            💬 Écrire sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
