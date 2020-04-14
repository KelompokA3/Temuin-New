import React, { useState } from 'react';
import {
  Typography,
  Button,
  Form,
  message,
  Input,
  Icon,
  DatePicker,
} from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';
const { Title } = Typography;
const { TextArea } = Input;
const nodemailer = require('nodemailer');

//rfce
function UploadProductPage2(props) {
  // title & deskripsi string, harga int
  const [TitleValue, setTitleValue] = useState('');
  const [NameValue, setNameValue] = useState('');
  const [KategoriValue, setKategoriValue] = useState('');
  const [WarnaValue, setWarnaValue] = useState('');
  const [DetailValue, setDetailValue] = useState('');
  const [TglValue, setTglValue] = useState('');
  const [LokasiValue, setLokasiValue] = useState('');
  const [NamaLengkapValue, setNamaLengkapValue] = useState('');
  const [ProdiValue, setProdiValue] = useState('');
  const [JurusanValue, setJurusanValue] = useState('');
  const [EmailValue, setEmailValue] = useState('');
  const [KontakValue, setKontakValue] = useState('');
  const [AlamatValue, setAlamatValue] = useState('');
  const [KeteranganValue, setKeteranganValue] = useState('');
  const [Images, setImages] = useState([]);

  // const onTitleChange = event => {
  //   setTitleValue(event.currentTarget.value);
  // };
  const onNameChange = (event) => {
    setNameValue(event.currentTarget.value);
  };
  const onKategoriChange = (event) => {
    setKategoriValue(event.currentTarget.value);
  };
  const onWarnaChange = (event) => {
    setWarnaValue(event.currentTarget.value);
  };
  const onDetailChange = (event) => {
    setDetailValue(event.currentTarget.value);
  };
  const onTglChange = (event) => {
    setTglValue(event.currentTarget.value);
  };
  //   onChange = date => this.setState({ date })
  const onLokasiChange = (event) => {
    setLokasiValue(event.currentTarget.value);
  };
  const onNamaLengkapChange = (event) => {
    setNamaLengkapValue(event.currentTarget.value);
  };
  const onProdiChange = (event) => {
    setProdiValue(event.currentTarget.value);
  };
  const onJurusanChange = (event) => {
    setJurusanValue(event.currentTarget.value);
  };
  const onEmailChange = (event) => {
    setEmailValue(event.currentTarget.value);
  };
  const onKontakChange = (event) => {
    setKontakValue(event.currentTarget.value);
  };
  const onAlamatChange = (event) => {
    setAlamatValue(event.currentTarget.value);
  };
  const onKeteranganChange = (event) => {
    setKeteranganValue(event.currentTarget.value);
  };
  const updateImages = (newImages) => {
    console.log(newImages);
    setImages(newImages);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    // Create Alert if the field still empty
    if (
      !NameValue ||
      !KategoriValue ||
      !WarnaValue ||
      !DetailValue ||
      !TglValue ||
      !LokasiValue ||
      !NamaLengkapValue ||
      !ProdiValue ||
      !JurusanValue ||
      !EmailValue ||
      !KontakValue ||
      !AlamatValue ||
      !KeteranganValue ||
      !Images
    ) {
      return alert('Harap Isi Semua Kolom!');
    }

    const variables = {
      nama: NameValue,
      kategori: KategoriValue,
      warna: WarnaValue,
      detail: DetailValue,
      tgl: TglValue,
      lokasi: LokasiValue,
      namalengkap: NamaLengkapValue,
      prodi: ProdiValue,
      jurusan: JurusanValue,
      email: EmailValue,
      kontak: KontakValue,
      alamat: AlamatValue,
      keterangan: KeteranganValue,
      images: Images,
    };
    Axios.post('/api/product/uploadProduct2', variables).then((response) => {
      if (response.data.success) {
        alert('Product Successfully Uploaded');
        props.history.push('/');
      } else {
        alert('Failed to upload Product');
      }
    });


  };

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          backgroundColor: '#8F00FF',
        }}
      >
        <Title level={2} style={{ color: 'white' }}>
          {' '}
          KLAIM BARANG
        </Title>
      </div>

      <Form onSubmit={onSubmit}>
        {/*Dropzone*/}
        <FileUpload refreshFunction={updateImages} />
        <br />
        <br />
        <label>
          <b>Deskripsi Barang</b>
        </label>
        <br />
        <label>Nama Barang</label>
        <Input onChange={onNameChange} value={NameValue} />
        <br />
        <br />
        <label>Kategori</label>
        <Input onChange={onKategoriChange} value={KategoriValue} />
        <br />
        <br />
        <label>Warna</label>
        <Input onChange={onWarnaChange} value={WarnaValue} />
        <br />
        <br />
        <label>Detail Baranga</label>
        <TextArea onChange={onDetailChange} value={DetailValue} />
        <br />
        <br />
        <label>
          <b>Waktu dan Lokasi</b>
        </label>
        <br />
        <label>Tanggal Hilang</label>
        <br />
        <Input onChange={onTglChange} value={TglValue} type="date" />
        <br />
        <br />
        <label>Lokasi Hilang</label>
        <TextArea onChange={onLokasiChange} value={LokasiValue} />
        <br />
        <br />
        <label>
          <b>Profile Anda</b>
        </label>
        <br />
        <label>Nama Lengkap</label>
        <Input onChange={onNamaLengkapChange} value={NamaLengkapValue} />
        <br />
        <br />
        <label>Prodi</label>
        <Input onChange={onProdiChange} value={ProdiValue} />
        <br />
        <br />
        <label>Jurusan</label>
        <Input onChange={onJurusanChange} value={JurusanValue} />
        <br />
        <br />
        <label>Email</label>
        <Input onChange={onEmailChange} value={EmailValue} />
        <br />
        <br />
        <label>Kontak</label>
        <Input onChange={onKontakChange} value={KontakValue} />
        <br />
        <br />
        <label>Alamat</label>
        <TextArea onChange={onAlamatChange} value={AlamatValue} />
        <br />
        <br />
        <label>Keterangan Lainnya</label>
        <TextArea onChange={onKeteranganChange} value={KeteranganValue} />
        <br />
        <br />
        <Button
          onClick={onSubmit}
          style={{ color: 'white', backgroundColor: '#8F00FF', margin: 'auto' }}
        >
          {' '}
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UploadProductPage2;
