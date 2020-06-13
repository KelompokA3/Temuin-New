import React, { Component } from 'react';
import axios from 'axios';
import { Button, Typography } from 'antd';
const { Title } = Typography;

function ContactForm() {
  const onSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const prodi = document.getElementById('prodi').value;
    const alamat = document.getElementById('alamat').value;
    const kontak = document.getElementById('kontak').value;
    const barang = document.getElementById('barang').value;
    const kategori = document.getElementById('kategori').value;
    const warna = document.getElementById('warna').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const tanggal = document.getElementById('tanggal').value;
    const lokasi = document.getElementById('lokasi').value;
    const message = document.getElementById('message').value;
    const variables = {
      name: name,
      email: email,
      messsage: message,
      prodi: prodi,
      alamat: alamat,
      kontak: kontak,
      barang: barang,
      kategori: kategori,
      warna: warna,
      deskripsi: deskripsi,
      tanggal: tanggal,
      lokasi: lokasi,
    };
    axios.post('/api/mail/send', variables).then((response) => {
      if (response.data.success) {
        alert('Product Successfully Uploaded');
      } else {
        alert('Failed to upload Product');
      }
    });
  };

  return (
    <div className="col-sm-4 offset-sm-4">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}> Klaim Barang</Title>
      </div>
      <form id="contact-form" onSubmit={onSubmit} method="POST">
        <label>Identitas Anda: </label>
        <div className="form-group">
          <label for="name">Nama</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label for="name">Prodi</label>
          <input type="text" className="form-control" id="prodi" />
        </div>
        <div className="form-group">
          <label for="name">Alamat</label>
          <input type="text" className="form-control" id="alamat" />
        </div>
        <div className="form-group">
          <label for="name">Kontak</label>
          <input type="text" className="form-control" id="kontak" />
        </div>
        <label>Deskripsi Barang: </label>
        <div className="form-group">
          <label for="name">Nama Barang</label>
          <input type="text" className="form-control" id="barang" />
        </div>
        <div className="form-group">
          <label for="name">Kategori</label>
          <input type="text" className="form-control" id="kategori" />
        </div>
        <div className="form-group">
          <label for="name">Warna</label>
          <input type="text" className="form-control" id="warna" />
        </div>
        <div className="form-group">
          <label for="message">Deskripsi Barang</label>
          <textarea className="form-control" rows="5" id="deskripsi"></textarea>
        </div>
        <label>Lokasi Dan Tanggal Kehilangan: </label>
        <div className="form-group">
          <label for="name">Tanggal</label>
          <input type="date" className="form-control" id="tanggal" />
        </div>
        <div className="form-group">
          <label for="name">Lokasi</label>
          <input type="text" className="form-control" id="lokasi" />
        </div>
        <label>Informasi Penemu: </label>
        <div className="form-group">
          <label for="exampleInputEmail1">Email Penemu Barang</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label for="message">Notes: </label>
          <textarea className="form-control" rows="5" id="message"></textarea>
        </div>
        <Button onClick={onSubmit}> Submit</Button>
      </form>
    </div>
  );
}

export default ContactForm;
