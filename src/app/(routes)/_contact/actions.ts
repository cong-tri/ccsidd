/** @format */

"use server";

import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function handleSendMail(
  prevState: string,
  formData: any
): Promise<any | string | undefined> {
  if (formData) {
    try {
      const transporter = nodemailer.createTransport({
        pool: true,
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        secure: true,
        auth: {
          type: "login",
          user: process.env.AUTH_USER,
          pass: process.env.AUTH_PASS,
        },
      } as SMTPTransport.Options);

      await transporter.sendMail({
        from: process.env.SENDER,
        to: process.env.SENDER,
        subject: "Send contact to ccsidd",
        text: `
          Username: ${formData.username}\n
          Email: ${formData.email}\n
          Kind Contact: ${formData.kind}\n
          Message: ${formData.message}\n
        `,
      });

      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log(success);
        }
      });

      transporter.close();

      return "Successfully Send Contact To CCSIDD";
    } catch (error) {
      console.log(error);
      return "Unsuccessfully";
    }
  }
}
