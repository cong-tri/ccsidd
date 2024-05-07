/** @format */

"use server";

import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function handleSendMail(values: any) {
console.log(values);

//   try {
//     const transporter = nodemailer.createTransport({
//       pool: true,
//       host: process.env.MAIL_HOST,
//       port: Number(process.env.MAIL_PORT),
//       secure: true,
//       auth: {
//         type: "login",
//         user: process.env.AUTH_USER,
//         pass: process.env.AUTH_PASS,
//       },
//     } as SMTPTransport.Options);
//     await transporter.sendMail({
//       from: process.env.SENDER,
//       to: process.env.SENDER,
//       subject: "Send contact to ccsidd",
//       text: `
//           Username: ${values.username}\n
//           Email: ${values.email}\n
//           Kind Contact: ${values.kind}\n
//           Message: ${values.message}\n
//         `,
//     });
//     transporter.verify(function (error, success) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(success);
//       }
//     });
//     transporter.close();
//   } catch (error) {
//     console.log(error);
//   }
  return {
    message: "Successfully",
  };
}
