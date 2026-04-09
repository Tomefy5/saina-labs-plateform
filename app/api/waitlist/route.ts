import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      sectors,
      teamSize,
      painPoints,
      maturity,
      automation,
      budget,
      firstName,
      lastName,
      whatsapp,
      email,
      wantsSession,
    } = data;

    // Validation basique
    if (!firstName || !lastName || !whatsapp) {
      return NextResponse.json(
        { error: "Les champs obligatoires sont manquants." },
        { status: 400 }
      );
    }

    const htmlContent = `
      <h2>Nouvelle inscription Waitlist - Saina Labs</h2>
      
      <h3>1. Informations personnelles</h3>
      <ul>
        <li><strong>Nom :</strong> ${firstName} ${lastName}</li>
        <li><strong>WhatsApp :</strong> ${whatsapp}</li>
        <li><strong>Email :</strong> ${email || "Non renseigné"}</li>
        <li><strong>Intéressé(e) par la session découverte :</strong> ${wantsSession ? "Oui" : "Non"}</li>
      </ul>

      <h3>2. Profil de l'entreprise</h3>
      <ul>
        <li><strong>Secteur(s) d'activité :</strong> ${sectors?.length ? sectors.join(", ") : "Non renseigné"}</li>
        <li><strong>Taille de l'équipe :</strong> ${teamSize || "Non renseigné"}</li>
        <li><strong>Rapport à la technologie :</strong> ${maturity || "Non renseigné"}</li>
      </ul>

      <h3>3. Besoins et Défis</h3>
      <ul>
        <li><strong>Pertes de temps (Pain points) :</strong> ${painPoints?.length ? painPoints.join(", ") : "Non renseigné"}</li>
        <li><strong>Priorité (Automatisation dans les 30 jours) :</strong> ${automation || "Non renseigné"}</li>
        <li><strong>Budget mensuel indicatif :</strong> ${budget || "Non renseigné"}</li>
      </ul>
    `;

    const { data: emailData, error } = await resend.emails.send({
      from: "Saina Labs <noreply@sainalabs.com>", // Sur un compte Resend de test, utilisez l'adresse fournie par défaut. En prod, remplacez par votre domaine vérifié, ex: "Saina Labs <contact@sainalabs.com>"
      to: ["contact@sainalabs.com"],
      subject: "Nouvelle inscription waitlist — Saina Labs",
      html: htmlContent,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: emailData }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}
