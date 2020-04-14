const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ketemuSchema = mongoose.Schema({

  nama: {
    type: String,
    maxlength: 50
  },
  kategori: {
    type: String
  },
  detail: {
    type: String,
    default: 'Unknown'
  },
  warna: {
    type: String,
    default: 'Unknown'
  },
  tgl: {
    type: String,
    default: 'Unknown'
  },
  lokasi: {
    type: String,
    default: 'Unknown'
  },
  namalengkap: {
    type: String,
    default: 'Unknown'
  },
  prodi: {
    type: String,
    default: 'Unknown'
  },
  jurusan: {
    type: String,
    default: 'Unknown'
  },
  email: {
    type: String,
    default: 'Unknown'
  },
  kontak: {
    type: String,
    default: 'Unknown'
  },
  alamat: {
    type: String,
    default: 'Unknown'
  },
  keterangan: {
    type: String,
    default: 'Unknown'
  },
  images: {
    type: Array,
    default: []
  },
  date: {
    type: Date
  },

});

ketemuSchema.index({
  title:'text',
  description:'text',
},{
  weights:{
    name: 5,
    description:1
  }
})

const Ketemu = mongoose.model('Ketemu', ketemuSchema);

module.exports = { Ketemu };
