const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: '',
  },
});

const mailOptions = {
  from: 'pokecardagas@gmail.com',
  to: 'raymy.gas@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Testing for coba lagi',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
