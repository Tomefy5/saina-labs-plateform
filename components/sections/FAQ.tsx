"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Est-ce que je dois être technologue pour utiliser vos services ?",
    a: "Absolument pas. Notre philosophie est simple : vous continuez à faire ce que vous faites le mieux — gérer votre business — et on s'occupe de tout ce qui touche à la technologie. On vous forme à utiliser les outils qu'on déploie, en moins de quelques heures.",
  },
  {
    q: "Est-ce que c'est adapté à mon type d'activité ?",
    a: "Si vous avez des tâches répétitives dans votre activité — et toutes les entreprises en ont — Saina Labs peut vous aider. On a travaillé avec des commerces, des restaurants, des prestataires de services, des professionnels de santé, et plus encore.",
  },
  {
    q: "Combien de temps faut-il pour voir des résultats ?",
    a: "Entre 1 et 4 semaines selon la complexité de la solution. Une automatisation WhatsApp simple peut être opérationnelle en 48h. Un système plus complet avec agents IA sur-mesure prend 2 à 4 semaines. Mais vous verrez des résultats dès la première semaine.",
  },
  {
    q: "Que se passe-t-il si la connexion internet est instable ?",
    a: "C'est une réalité qu'on anticipe dans chaque solution. Nos systèmes sont conçus pour fonctionner avec une connexion limitée et pour gérer les interruptions sans perte de données. On connaît le contexte malgache — on n'impose pas des solutions pensées pour Paris ou New York.",
  },
  {
    q: "Et si j'ai déjà des outils en place (WhatsApp Business, Excel, etc.) ?",
    a: "Parfait. On s'intègre avec ce que vous avez déjà. Pas besoin de tout changer, ni de perdre vos données existantes. Notre travail est de connecter vos outils entre eux et de les rendre plus intelligents — pas de les remplacer.",
  },
  {
    q: "Quel est l'engagement minimum ?",
    a: "Aucun engagement long terme au départ. On commence par un diagnostic gratuit pour voir si on peut vous apporter de la valeur. Ensuite, on travaille projet par projet. Vous décidez de la suite en fonction des résultats — pas d'un contrat imposé.",
  },
  {
    q: "Comment garantissez-vous la confidentialité de mes données ?",
    a: "Vos données restent vôtres. On signe un accord de confidentialité avec chaque client. Nos infrastructures utilisent des solutions sécurisées (Supabase, serveurs hébergés en Europe) et on applique des bonnes pratiques de sécurité rigoureuses.",
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
                        ? "rgba(0,180,255,0.15)"
                        : "rgba(255,255,255,0.04)",
                    border:
                      openIndex === i
                        ? "1px solid rgba(0,180,255,0.3)"
                        : "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  {openIndex === i ? (
                    <Minus size={14} color="#00B4FF" />
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
              "linear-gradient(135deg, rgba(0,180,255,0.05), rgba(37,99,235,0.05))",
            border: "1px solid rgba(0,180,255,0.1)",
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
            href="https://wa.me/261340000000"
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
