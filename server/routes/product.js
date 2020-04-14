const express = require('express');
const router = express.Router();
const { Barang } = require('../models/Barang');
const { Ketemu } = require('../models/Ketemu');
const multer = require('multer');

const { auth } = require('../middleware/auth');

var nodemailer = require('nodemailer');

router.post('/send', auth, (req, res, next) => {

  var output = `
  <p>Pemberitahuan Barang Temuin JTK</p>
  <h3>Pengguna Dengan Identitas: </h3>
  <ul>  
    <li>Nama: ${req.body.name}</li>
    <li>Prodi: ${req.body.prodi}</li>
    <li>Alamat: ${req.body.message}</li>
  
  </ul>
 
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
    from: '"Temuin JTK" <kelompok3.proyek@gmail.com>', // sender address
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

})


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.jpg' || ext !== '.png') {
      return cb(res.status(400).end('only jpg, png are allowed'), false);
    }
    cb(null, true);
  },
});

var upload = multer({ storage: storage }).single('file');

//=================================
//             Product
//=================================

router.post('/uploadImage', auth, (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.post('/uploadProduct', auth, (req, res) => {
  //save all the data we got from the client into the DB
  const product = new Barang(req.body);

  product.save((err) => {
    if (err) returnres.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post('/uploadProduct2', auth, (req, res) => {
  //save all the data we got from the client into the DB
  const ketemu = new Ketemu(req.body);

  ketemu.save((err) => {
    if (err) returnres.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post('/getProducts', (req, res) => {
  let order = req.body.order ? req.body.order : 'desc';
  let sortBy = req.body.sortBy ? req.body.sortBy : '_id';
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);

  let findArgs = {};
  let term = req.body.searchTerm;

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === 'category') {
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1],
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  console.log(findArgs);

  if (term) {
    Barang.find(findArgs)
      .find({ $text: { $search: term } })
      .populate('writer')
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec((err, products) => {
        if (err) return res.status(400).json({ success: false, err });
        res
          .status(200)
          .json({ success: true, products, postSize: products.length });
      });
  } else {
    Barang.find(findArgs)
      .populate('writer')
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec((err, products) => {
        if (err) return res.status(400).json({ success: false, err });
        res
          .status(200)
          .json({ success: true, products, postSize: products.length });
      });
  }
});

//?id=${productId}&type=single
//id=12121212,121212,1212121   type=array
router.get('/products_by_id', (req, res) => {
  let type = req.query.type;
  let productIds = req.query.id;

  if (type === 'array') {
    let ids = req.query.id.split(',');
    productIds = [];
    productIds = ids.map((item) => {
      return item;
    });
  }

  //we need to find the product information that belong to product Id
  Barang.find({ _id: { $in: productIds } })
    .populate('writer')
    .exec((err, product) => {
      if (err) return req.status(400).send(err);
      return res.status(200).send(product);
    });
});

module.exports = router;
