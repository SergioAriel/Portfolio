const nodemailer = require('nodemailer')

export default function (req, res) {

    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.gmail.com",
         auth: {
              user:  process.env.USER_MAIL,
              pass: process.env.PASSWORD_MAIL,
           },
      secure: true,
    });
    
    const mailData = {
        from: req.body.email,
        to: 'your email',
        subject: `Mensaje de ${req.body.name}: ${req.body.subject}`,
        text: req.body.message + " | Enviado desde: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body)
    res.send('success')
  }