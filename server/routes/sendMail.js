var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.post('/send', (req, res) => {
  var output = `
  <p>Pemberitahuan Barang Team Temuin JTK</p>
  <h3>Pengguna Dengan Identitas: </h3>
  <ul>  
    <li>Nama: ${req.body.name}</li>
    <li>Prodi: ${req.body.prodi}</li>
    <li>Alamat: ${req.body.alamat}</li>
    <li>Telp: ${req.body.kontak}</li>
  </ul>
  <h3>Telah mengklaim barang yang anda upload ke website Temuin
  Deskripsi Barang Sebagai Berikut:</h3>
  <ul>
    <li>Nama Barang: ${req.body.barang}</li>
    <li>Kategori: ${req.body.kategori}</li>
    <li>Warna: ${req.body.warna}</li>
    <li>Detail Barang: ${req.body.deskripsi}</li>
  <ul>
  <h3>Waktu Hilang Barang Sebagai Berikut:</h3>
  <ul>
    <li>Tanggal Hilang: ${req.body.tanggal}</li>
    <li>Lokasi Hilang: ${req.body.lokasi}</li>
  <ul>
 
`;

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'kelompok3.proyek@gmail.com', // generated ethereal user
      pass: 'qsmyvztagmebxrjg', // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"TEAM TEMUIN" <kelompok3.proyek@gmail.com>', // sender address
    to: req.body.email, // list of receivers
    subject: 'TEMUIN JTK', // Subject line
    text: 'Hello world?', // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('contact', {
      msg: 'Email has been sent',
    });
  });
});

module.exports = router;
