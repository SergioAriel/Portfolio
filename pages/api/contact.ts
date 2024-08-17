import nodemailer from "nodemailer";
import { google } from "googleapis"
import { NextApiRequest, NextApiResponse } from "next";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const sendEmail = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { subject, from, message } = req.body;
    const oAuthClient = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI
    )
    oAuthClient.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
    })
    const nodemail = async () => {
      try {
        const access_token = await oAuthClient.getAccessToken()
        const token = access_token.token
        
        if( !token ) {
          res.status(500).json({ err: "Error token" });
          return;
        }



        const SMTPTransport: SMTPTransport.Options = {
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            type: "OAuth2",
            user: process.env.USER_MAIL,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: token
          },
        }

        const transporter = nodemailer.createTransport(SMTPTransport);

        const priority: 'high' = 'high'
        console.log({
          name: from.name,
          address: from.email
        })

        const mailOption = {
          from: `${from.name} <${from.email}>`,
          to: "solis.sergioariel@gmail.com",
          subject: `${subject}`,
          html: message,
          headers: {
            'reply-to': from.email,
          },
          priority,
        };

        transporter.sendMail(mailOption, (err, data) => {
          if (err) {
            console.log(err)
            res.status(500).json({ err: err });
          } else {
            res.status(200).json({ res: "success" });
          }
        });
      } catch (err) {

        res.status(500).json({ err: err });
      }
    }
    nodemail()
  } catch (err) {
    res.status(500).json({ err });
  }
}

export default sendEmail