const nodemailer = require("nodemailer")

const sendMail = async (email, subject, text) => {

    try {

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            
            port: 465,
            secure: true,
            auth: {
                user: "benkadircagdas@gmail.com",
                pass: "nymf ckyg qpid pzop"
            }
        })


        await transporter.sendMail({
            from: "benkadircagdas@gmail.com",
            to: email,
            subject: subject,
            html: text
        })
        console.log('Email sent successfully!');
    } catch (error) {
        console.log("Error sending email: ");
        console.log(error);
    }

}

module.exports = sendMail