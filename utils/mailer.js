const nodeMailer = require('nodemailer');

const mailerConfig = require('../config').mailer;

const transport = nodeMailer.createTransport({
  service: mailerConfig.service,
  auth: {
    user: mailerConfig.email,
    pass: mailerConfig.pass
  }
});

const mailOptions = {
  from: mailerConfig.from,
  subject: mailerConfig.subject,
  text: mailerConfig.text
};

module.exports.send = (toEmail, callback) => {
	mailOptions.to = toEmail;
	transport.sendMail(mailOptions, (err, info) => err ? callback(err) : callback(null, info));
}