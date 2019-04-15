'use strict'

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'jjimenezv24@gmail.com',
        pass: 'Labebepreciosa24'
    }
})

exports.sendMessage = async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;
    const mailOptions = {
        from: name,
        to: email,
        subject: 'Mensaje de Pagina',
        text: message
    }
    try {
        let info = await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.status(500).send(req.body);
            } else {
                console.log("Email sent");
                res.status(200).jsonp(req.body);
            }
        });
        console.log(info);
    } catch (error) {
        throw error.message;
    }


}