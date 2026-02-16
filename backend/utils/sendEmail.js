import nodemailer from "nodemailer";

const  transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});
 
export const sendEmail = async (options) => {
  const mailOptions = {
        from: "e-commerce <admin@e-commerce.com>",
        to: options.email,
        subject: options.subject,
        html: options.message
  };
  await transport.sendMail(mailOptions);
};
    