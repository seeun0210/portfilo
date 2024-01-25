import nodemailer from "nodemailer";
import { AUTH_PASS, AUTH_USER } from "@/config";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: AUTH_USER,
    pass: AUTH_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const body = req.body;

  try {
    await sendEmail(body);
    return res.status(200).json({ message: "메일을 성공적으로 보냈습니다." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: `메일 전송에 실패하였습니다.${error}` });
  }
}

export async function sendEmail({ name, email, subject, message }) {
  const mailData = {
    to: AUTH_USER,
    subject: `[portfolio]${name}: ${subject}`,
    from: email,
    html: `<h1>${subject}<h1> <p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailData);
  } catch (error) {
    console.error(error);
    throw new Error(`메일 전송에 실패하였습니다.${error}`);
  }
}
