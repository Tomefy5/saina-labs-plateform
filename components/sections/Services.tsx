"use client";

import { MessageCircle, BarChart3, Workflow, Bot, Search, GraduationCap } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Automatisation des réponses",
    subtitle: "Communication intelligente",
    description:
      "Répondeurs intelligents sur WhatsApp, email ou Messenger qui gèrent les questions fréquentes, les prises de rendez-vous et le suivi client — automatiquement.",
    example:
      "Un restaurant reçoit 40 messages/jour pour les réservations. Après notre intervention : 0 message manuel.",
    color: "#00B4FF",
  },
  {
    icon: BarChart3,
    title: "Gestion des données",
    subtitle: "Organisation centralisée",
    description:
      "Centralisation et structuration de vos données clients, stocks, ventes dans un système simple et automatisé.",
    example:
      "Un prestataire retrouve l'historique complet d'un client en 2 secondes.",
    color: "#38D1F8",
  },
  {
    icon: Workflow,
    title: "Flux de travail internes",
    subtitle: "Automatisation end-to-end",
    description:
      "Connexion de vos outils (WhatsApp, email, Excel, formulaires) pour que les informations circulent sans intervention humaine.",
    example:
      "Un formulaire de commande crée une facture, notifie l'équipe et met à jour le stock automatiquement.",
    color: "#2563EB",
  },
  {
    icon: Bot,
    title: "Agents IA sur-mesure",
    subtitle: "Intelligence personnalisée",
    description:
      "Assistants IA développés pour votre activité spécifique — un agent qui connaît votre catalogue, vos prix, vos process.",
    example:
      "Un agent répond aux devis en votre nom avec vos tarifs exacts, 24h/24.",
    color: "#00B4FF",
  },
  {
    icon: Search,
    title: "Audit & Conseil IA",
    subtitle: "Diagnostic précis",
    description:
      "Analyse de votre activité pour identifier les 3 à 5 tâches qui gagneraient le plus à être automatisées.",
    example:
      "2h de travail ensemble. Un rapport qui dit exactement où vous perdez du temps et de l'argent.",
    color: "#38D1F8",
  },
  {
    icon: GraduationCap,
    title: "Formation & Accompagnement",
    subtitle: "Montée en compétences",
    description:
      "Sessions courtes pour que vous et votre équipe maîtrisiez les outils mis en place — sans jargon technique.",
    example: "Votre assistante opère le système seule après une session de 3h.",
    color: "#2563EB",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding"
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, var(--bg-primary) 0%, rgba(7,13,26,0.8) 50%, var(--bg-primary) 100%)",
      }}
    >
      {/* Glow right */}
      <div
        style={{
          position: "absolute",
          right: "-200px",
          top: "30%",
          width: "600px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(0,180,255,0.06) 0%, transparent 70%)",
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
            Nos services
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              marginBottom: "20px",
            }}
          >
            Ce que Saina Labs{" "}
            <span className="gradient-text">fait pour vous</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "540px",
              margin: "0 auto",
              fontSize: "1.05rem",
            }}
          >
            Des solutions concrètes, mesurables, adaptées à votre réalité.
            Pas de promesses vagues — des résultats visibles.
          </p>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="glass-card"
                style={{
                  borderRadius: "18px",
                  padding: "32px 28px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                {/* Gradient corner glow */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "120px",
                    height: "120px",
                    background: `radial-gradient(circle at top right, ${service.color}18 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Icon + subtitle */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "12px",
                      background: `${service.color}15`,
                      border: `1px solid ${service.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color={service.color} />
                  </div>
                  <span
                    style={{
                      fontSize: "0.73rem",
                      fontWeight: 500,
                      color: service.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {service.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    marginBottom: "12px",
                    color: "var(--text-primary)",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    marginBottom: "20px",
                  }}
                >
                  {service.description}
                </p>

                {/* Example */}
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: "10px",
                    background: "rgba(0,0,0,0.25)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      color: service.color,
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    Cas réel →
                  </span>
                  {service.example}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
