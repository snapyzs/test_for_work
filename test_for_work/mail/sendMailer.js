const nodemailer = require("nodemailer");

const mailUser = process.env.MAIL_USER;

const transporter = nodemailer.createTransport({
    port: `${process.env.MAIL_PORT}`,
    host: `${process.env.MAIL_HOST}`,
    auth: {
        user: `${mailUser}`,
        pass: `${process.env.MAIL_PASSWORD}`,
    },
    secure: true,

});

function sendMailer(to) {
    const mailData = {
        from: mailUser,
        to: to,
        subject: "Thank for registration!",
        text: "Thank for registration!",
        html: '<b>Hey! Thank you for registration on site</b><hr><h6>Dont reply this message</h6><hr>'
    }
    transporter.sendMail(mailData,(err,info) => {
        if (err) {
            console.log(err);
        }
        console.log(info.messageId);
    }) 
}

module.exports = sendMailer;