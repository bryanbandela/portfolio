// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require('dotenv').config();
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, mail, message } = req.body;
    console.log('this is the parsed contents', name, mail, message);

    //step1
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });

    //step2
    const emailOptions = {
      from: mail,
      to: 'bryan.bandela@gmail.com',
      subject: `${name}
    - ${mail} has sent you a mail from your portfolio website`,
      text: message,
    };

    await transporter.sendMail(emailOptions, (err, data) => {
      if (err) {
        console.log('There is an error', err);
      } else {
        res.status(200).json({ response: true, info: data });
        console.log('Email sent', data);
      }
    });
  } else {
    res.json({ message: "This is Bryan's api" });
  }
}
