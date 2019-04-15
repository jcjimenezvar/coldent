'use strict'
const sendmail = require('sendmail')();
const CONSTANTES = require('../constants/constants')
exports.sendMessage = async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;
    try {
        await sendmail({
            from: CONSTANTES.EMAIL_INFORMATION.FROM,
            to: CONSTANTES.EMAIL_INFORMATION.SEND,
            subject: CONSTANTES.EMAIL_INFORMATION.SUBJECT,
            html: `<p><b>${CONSTANTES.EMAIL_INFORMATION.TITLE}</b> to myself </p>` +
                `<p>Información mensaje: Cliente: ${name}, Email: ${email}, Mensaje: ${message} <br/></p>`
        }, function (err, reply) {
            if (err) console.log(`No se pudo enviar el correo a ${email}`);

            console.dir(reply)
        })
    } catch (error) {
        throw error.message;
    }
}