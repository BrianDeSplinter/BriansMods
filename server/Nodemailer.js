require('dotenv').config()

const nodemailer = require("nodemailer");
const {EMAIL, PASSWORD, TEST_EMAIL} = process.env

"use strict";
module.exports = {
    main:
         (req, res) => {
            const options = {
                service: "Yahoo",
                // host: "smtp.mail.yahoo.email",
                // port: 587,
                // secure: false, // true for 465, false for other ports
                auth: {
                  user: EMAIL,
                  pass: PASSWORD , 
                }}

            let transporter =  nodemailer.createTransport({options});

            console.log('transporter',transporter)
            
            let message = {
              from: `"Brians Mods" <${EMAIL}>`,
              to: `${TEST_EMAIL}`,
              subject: "Order Confirmation",
              text: "Thank you for your oder", 
              html: "<b>Thank you for your oder!</b>", 
            }    

            transporter.sendMail({message}, (err, info) =>{
            
            // console.log('Error!!:', err);
            // //console.log('Envelope!!:', info.envelope);
            // //console.log('MessageID!!:', info.messageId);
            // console.log('info!!:', info);
            // //console.log('info', info);
            // res.send({
            //     success: true,
            //     message: 'Done'
            // })
            if (err) {
                console.log('ERROR!!:', err);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
        }
}


