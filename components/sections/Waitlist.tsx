"use client";

import { useState } from "react";
import { Check, ArrowRight, Loader } from "lucide-react";

const sectors = [
  "Commerce/Distribution",
  "Restauration/Hôtellerie",
  "Services professionnels",
  "Santé/Bien-être",
  "Éducation/Formation",
  "Artisanat/Production",
  "Autre",
];

const teamSizes = ["Juste moi", "2 à 5", "6 à 20", "Plus de 20"];

const painPoints = [
  "Répondre aux messages clients",
  "Gérer les factures/paiements",
  "Suivre mes stocks",
  "Recruter ou gérer l'équipe",
  "Créer du contenu/marketing",
  "Analyser mes chiffres",
  "Gérer les rendez-vous",
];

const digitalMaturity = [
  "Je n'utilise presque pas d'outils numériques",
  "J'utilise quelques outils basiques (WhatsApp, Excel)",
  "J'ai des outils mais ils ne sont pas bien connectés",
  "Je suis à l'aise et je cherche à aller plus loin",
];

const budgets = [
  "Moins de 50k Ar",
  "50k à 150k Ar",
  "150k à 500k Ar",
  "Plus de 500k Ar",
  "Je veux d'abord voir les résultats",
];

type FormState = {
  sectors: string[];
  teamSize: string;
  painPoints: string[];
  maturity: string;
  automation: string;
  budget: string;
  firstName: string;
  lastName: string;
  whatsapp: string;
  email: string;
  wantsSession: boolean;
};

const initialState: FormState = {
  sectors: [],
  teamSize: "",
  painPoints: [],
  maturity: "",
  automation: "",
  budget: "",
  firstName: "",
  lastName: "",
  whatsapp: "",
  email: "",
  wantsSession: false,
};

export default function Waitlist() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const totalSteps = 4;

  const toggleArrayField = (
    field: "sectors" | "painPoints",
    value: string,
    max?: number
  ) => {
    setForm((prev) => {
      const arr = prev[field];
      if (arr.includes(value)) {
        return { ...prev, [field]: arr.filter((v) => v !== value) };
      }
      if (max && arr.length >= max) return prev;
      return { ...prev, [field]: [...arr, value] };
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSubmitted(true);
  };

  const canProceed = () => {
    if (step === 1) return form.sectors.length > 0 && form.teamSize !== "";
    if (step === 2) return form.painPoints.length > 0 && form.maturity !== "";
    if (step === 3) return form.automation.trim() !== "";
    if (step === 4)
      return (
        form.firstName.trim() !== "" &&
        form.lastName.trim() !== "" &&
        form.whatsapp.trim() !== ""
      );
    return true;
  };

  if (submitted) {
    return (
      <section
        id="waitlist"
        className="section-padding"
        style={{ position: "relative" }}
      >
        <div className="container-xl">
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #00B4FF20, #2563EB30)",
                border: "2px solid rgba(0,180,255,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 28px",
              }}
            >
              <Check size={36} color="#00B4FF" />
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                marginBottom: "16px",
              }}
            >
              Bienvenue dans la communauté{" "}
              <span className="gradient-text">Saina Labs</span> !
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
              }}
            >
              Merci {form.firstName} ! Tomefy vous contactera{" "}
              <strong style={{ color: "var(--text-primary)" }}>sous 48h</strong>{" "}
              sur WhatsApp pour un premier échange. Préparez vos questions — on
              a hâte de vous rencontrer.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="waitlist"
      className="section-padding"
      style={{ position: "relative" }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-xl" style={{ position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div
            className="tag-pill"
            style={{ marginBottom: "20px", display: "inline-flex" }}
          >
            ⭐ Liste d&apos;attente
          </div>
          <h2
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "16px" }}
          >
            Rejoignez les{" "}
            <span className="gradient-text">premiers</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "500px",
              margin: "0 auto",
              fontSize: "1.05rem",
            }}
          >
            Répondez à 4 questions rapides. On vous contacte personnellement
            avec une proposition adaptée à votre situation.
          </p>
        </div>

        {/* Form card */}
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "rgba(255,255,255,0.025)",
            border: "1px solid var(--border)",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          {/* Progress bar */}
          <div
            style={{
              background: "rgba(0,0,0,0.3)",
              padding: "20px 32px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                Étape {step} sur {totalSteps}
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--cyan)", fontWeight: 600 }}>
                {Math.round((step / totalSteps) * 100)}%
              </span>
            </div>
            <div
              style={{
                height: "4px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "100px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${(step / totalSteps) * 100}%`,
                  background: "linear-gradient(90deg, #00B4FF, #2563EB)",
                  borderRadius: "100px",
                  transition: "width 0.4s ease",
                }}
              />
            </div>
          </div>

          {/* Step content */}
          <div style={{ padding: "40px 32px" }}>
            {/* STEP 1 */}
            {step === 1 && (
              <div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Parlez-nous de votre activité
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.875rem",
                    marginBottom: "28px",
                  }}
                >
                  Ces informations nous aident à personnaliser notre approche.
                </p>

                <div style={{ marginBottom: "28px" }}>
                  <label style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "12px", fontSize: "0.9rem" }}>
                    Votre secteur d&apos;activité
                  </label>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {sectors.map((s) => (
                      <button
                        key={s}
                        onClick={() => toggleArrayField("sectors", s)}
                        style={{
                          padding: "8px 16px",
                          borderRadius: "100px",
                          fontSize: "0.8rem",
                          fontWeight: 500,
                          cursor: "pointer",
                          transition: "all 0.2s",
                          fontFamily: "'DM Sans', sans-serif",
                          background: form.sectors.includes(s)
                            ? "linear-gradient(135deg, #00B4FF, #2563EB)"
                            : "rgba(255,255,255,0.04)",
                          border: form.sectors.includes(s)
                            ? "1px solid transparent"
                            : "1px solid var(--border)",
                          color: form.sectors.includes(s)
                            ? "white"
                            : "var(--text-secondary)",
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "12px", fontSize: "0.9rem" }}>
                    Taille de l&apos;équipe
                  </label>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {teamSizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setForm((p) => ({ ...p, teamSize: s }))}
                        style={{
                          padding: "8px 18px",
                          borderRadius: "100px",
                          fontSize: "0.8rem",
                          fontWeight: 500,
                          cursor: "pointer",
                          transition: "all 0.2s",
                          fontFamily: "'DM Sans', sans-serif",
                          background:
                            form.teamSize === s
                              ? "linear-gradient(135deg, #00B4FF, #2563EB)"
                              : "rgba(255,255,255,0.04)",
                          border:
                            form.teamSize === s
                              ? "1px solid transparent"
                              : "1px solid var(--border)",
                          color:
                            form.teamSize === s
                              ? "white"
                              : "var(--text-secondary)",
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Votre plus grande perte de temps
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.875rem",
                    marginBottom: "28px",
                  }}
                >
                  Sélectionnez jusqu&apos;à 2 tâches.
                </p>

                <div style={{ marginBottom: "28px" }}>
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: "8px" }}
                  >
                    {painPoints.map((p) => (
                      <button
                        key={p}
                        onClick={() => toggleArrayField("painPoints", p, 2)}
                        style={{
                          padding: "12px 16px",
                          borderRadius: "10px",
                          fontSize: "0.875rem",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          fontFamily: "'DM Sans', sans-serif",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          background: form.painPoints.includes(p)
                            ? "rgba(0,180,255,0.08)"
                            : "rgba(255,255,255,0.02)",
                          border: form.painPoints.includes(p)
                            ? "1px solid rgba(0,180,255,0.3)"
                            : "1px solid var(--border)",
                          color: form.painPoints.includes(p)
                            ? "var(--text-primary)"
                            : "var(--text-secondary)",
                        }}
                      >
                        <div
                          style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "50%",
                            border: `2px solid ${form.painPoints.includes(p) ? "#00B4FF" : "var(--text-muted)"}`,
                            background: form.painPoints.includes(p)
                              ? "#00B4FF"
                              : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            transition: "all 0.2s",
                          }}
                        >
                          {form.painPoints.includes(p) && (
                            <Check size={10} color="white" />
                          )}
                        </div>
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "12px", fontSize: "0.9rem" }}>
                    Votre rapport à la technologie
                  </label>
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: "8px" }}
                  >
                    {digitalMaturity.map((m) => (
                      <button
                        key={m}
                        onClick={() => setForm((p) => ({ ...p, maturity: m }))}
                        style={{
                          padding: "12px 16px",
                          borderRadius: "10px",
                          fontSize: "0.875rem",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          fontFamily: "'DM Sans', sans-serif",
                          textAlign: "left",
                          background:
                            form.maturity === m
                              ? "rgba(0,180,255,0.08)"
                              : "rgba(255,255,255,0.02)",
                          border:
                            form.maturity === m
                              ? "1px solid rgba(0,180,255,0.3)"
                              : "1px solid var(--border)",
                          color:
                            form.maturity === m
                              ? "var(--text-primary)"
                              : "var(--text-secondary)",
                        }}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Votre priorité immédiate
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.875rem",
                    marginBottom: "28px",
                  }}
                >
                  Ces réponses nous permettent de vous proposer exactement ce
                  dont vous avez besoin.
                </p>

                <div style={{ marginBottom: "28px" }}>
                  <label
                    style={{
                      color: "var(--text-primary)",
                      fontWeight: 600,
                      marginBottom: "8px",
                      fontSize: "0.9rem",
                    }}
                  >
                    Si vous pouviez automatiser une seule chose dans les 30
                    prochains jours, ce serait ?
                  </label>
                  <textarea
                    value={form.automation}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, automation: e.target.value }))
                    }
                    placeholder="Ex: Répondre automatiquement aux demandes de prix sur WhatsApp..."
                    rows={4}
                    style={{ resize: "none" }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      color: "var(--text-primary)",
                      fontWeight: 600,
                      marginBottom: "12px",
                      fontSize: "0.9rem",
                    }}
                  >
                    Budget mensuel indicatif{" "}
                    <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>
                      (optionnel)
                    </span>
                  </label>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                  >
                    {budgets.map((b) => (
                      <button
                        key={b}
                        onClick={() =>
                          setForm((p) => ({
                            ...p,
                            budget: p.budget === b ? "" : b,
                          }))
                        }
                        style={{
                          padding: "8px 14px",
                          borderRadius: "100px",
                          fontSize: "0.78rem",
                          fontWeight: 500,
                          cursor: "pointer",
                          transition: "all 0.2s",
                          fontFamily: "'DM Sans', sans-serif",
                          background:
                            form.budget === b
                              ? "linear-gradient(135deg, #00B4FF, #2563EB)"
                              : "rgba(255,255,255,0.04)",
                          border:
                            form.budget === b
                              ? "1px solid transparent"
                              : "1px solid var(--border)",
                          color:
                            form.budget === b ? "white" : "var(--text-secondary)",
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Presque terminé 🎉
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.875rem",
                    marginBottom: "28px",
                  }}
                >
                  On vous contacte personnellement sous 48h.
                </p>

                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
                >
                  <div>
                    <label>Prénom *</label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, firstName: e.target.value }))
                      }
                      placeholder="Tomefy"
                    />
                  </div>
                  <div>
                    <label>Nom *</label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, lastName: e.target.value }))
                      }
                      placeholder="Rakoto"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label>Numéro WhatsApp *</label>
                  <input
                    type="tel"
                    value={form.whatsapp}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, whatsapp: e.target.value }))
                    }
                    placeholder="+261 34 XX XXX XX"
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label>
                    Email{" "}
                    <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>
                      (optionnel)
                    </span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="vous@email.com"
                  />
                </div>

                <label
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    cursor: "pointer",
                    color: "var(--text-secondary)",
                    fontSize: "0.875rem",
                    marginBottom: 0,
                    fontWeight: 400,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={form.wantsSession}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, wantsSession: e.target.checked }))
                    }
                    style={{
                      width: "18px",
                      height: "18px",
                      minWidth: "18px",
                      marginTop: "2px",
                      accentColor: "#00B4FF",
                    }}
                  />
                  Je suis intéressé(e) par une{" "}
                  <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                    session découverte gratuite
                  </strong>
                </label>
              </div>
            )}

            {/* Navigation */}
            <div
              style={{
                display: "flex",
                justifyContent: step > 1 ? "space-between" : "flex-end",
                marginTop: "36px",
                paddingTop: "28px",
                borderTop: "1px solid var(--border)",
              }}
            >
              {step > 1 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="btn-secondary"
                  style={{
                    padding: "12px 24px",
                    borderRadius: "10px",
                    fontSize: "0.875rem",
                  }}
                >
                  Retour
                </button>
              )}
              {step < totalSteps ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canProceed()}
                  className="btn-primary"
                  style={{
                    padding: "12px 28px",
                    borderRadius: "10px",
                    fontSize: "0.875rem",
                    opacity: canProceed() ? 1 : 0.4,
                    cursor: canProceed() ? "pointer" : "not-allowed",
                  }}
                >
                  Continuer
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed() || loading}
                  className="btn-primary"
                  style={{
                    padding: "12px 28px",
                    borderRadius: "10px",
                    fontSize: "0.875rem",
                    opacity: canProceed() && !loading ? 1 : 0.5,
                    cursor: canProceed() && !loading ? "pointer" : "not-allowed",
                  }}
                >
                  {loading ? (
                    <>
                      <Loader size={16} style={{ animation: "spin 1s linear infinite" }} />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Rejoindre la liste
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Trust line */}
        <p
          style={{
            textAlign: "center",
            fontSize: "0.78rem",
            color: "var(--text-muted)",
            marginTop: "20px",
          }}
        >
          🔒 Vos données restent confidentielles · Aucun spam · Désinscription
          à tout moment
        </p>
      </div>
    </section>
  );
}
