import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const urgencyLabels: Record<string, string> = {
  low: "Basse — pas de contrainte calendaire",
  normal: "Normale — délai standard (2–4 semaines)",
  high: "Haute — date de remise d'offre proche",
  urgent: "Urgente — moins d'une semaine",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const projectType = typeof body.projectType === "string" ? body.projectType.trim() : "";
    const blockchain = typeof body.blockchain === "string" ? body.blockchain.trim() : "";
    const urgency = typeof body.urgency === "string" ? body.urgency.trim() : "normal";

    const missing: string[] = [];
    if (!name) missing.push("nom");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) missing.push("email valide");
    if (!subject) missing.push("objet");
    if (!message) missing.push("message");
    if (!projectType) missing.push("type de prestation");
    if (!blockchain) missing.push("contexte organisationnel");

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Champs manquants ou invalides : ${missing.join(", ")}.` },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: (process.env.SMTP_SECURE ?? "true") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"BlockHack.io" <${process.env.SMTP_USER}>`,
      to: "contact@blockhack.io",
      replyTo: email,
      subject: `Demande de prestation : ${subject}`,
      text: [
        `Nom : ${name}`,
        `Email : ${email}`,
        `Entreprise : ${company || "—"}`,
        `Type de prestation : ${projectType}`,
        `Contexte organisationnel : ${blockchain}`,
        `Urgence : ${urgencyLabels[urgency] ?? urgency}`,
        "",
        `Objet : ${subject}`,
        "",
        "Message :",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "L'envoi a échoué. Réessayez ou écrivez directement à contact@blockhack.io." },
      { status: 500 }
    );
  }
}
