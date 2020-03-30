import React, { useState } from 'react';
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Location = [
  { key: 1, value: 'Gedung A' },
  { key: 2, value: 'Gedung B' },
  { key: 3, value: 'Gedung C' },
  { key: 4, value: 'Gedung D' },
  { key: 5, value: 'Gedung E' },
  { key: 6, value: 'Gedung F' },
  { key: 7, value: 'Gedung G' },
  { key: 8, value: 'Gedung H' },
  { key: 9, value: 'Pendopo' },
  { key: 10, value: 'Gedung Direktorat' },
  { key: 11, value: 'Gedung P2T' },
  { key: 12, value: 'Area Parkiran Mahasiswa' },
  { key: 13, value: 'Area Parkiran Dosen' },
  { key: 14, value: 'Student Center' },
  { key: 15, value: 'Masjid LH' },
  { key: 16, value: 'BRI Polban' },
  { key: 17, value: 'Student Center' }
];
const Category = [
  { key: 0, value: 'Any' },
  { key: 1, value: 'ATK ' },
  { key: 2, value: 'Aksesoris' },
  { key: 3, value: 'Barang Elektronik' },
  { key: 4, value: 'Pakaian' },
  { key: 5, value: 'Kunci' },
  { key: 6, value: 'lainnya' }
];

//rfce
function UploadProductPage(props) {
  // title & deskripsi string, harga int
  const [TitleValue, setTitleValue] = useState('');
  const [DescriptionValue, setDescriptionValue] = useState('');
  const [LocationValue, setLocationValue] = useState('');
  const [FounderValue, setFounderValue] = useState('');
  const [CategoryValue, setCategoryValue] = useState('');
  const [DateValue, setDateValue] = useState(0);
  const [Images, setImages] = useState([]);
  const onTitleChange = event => {
    setTitleValue(event.currentTarget.value);
  };
  const onDescriptionChange = event => {
    setDescriptionValue(event.currentTarget.value);
  };
  const onLocationChange = event => {
    setLocationValue(event.currentTarget.value);
  };
  const onCategoryChange = event => {
    setCategoryValue(event.currentTarget.value);
  };
  const onFounderChange = event => {
    setFounderValue(event.currentTarget.value);
  };
  const onDateValue = event => {
    setDateValue(event.currentTarget.value);
  };
  const updateImages = newImages => {
    console.log(newImages);
    setImages(newImages);
  };
  const onSubmit = event => {
    event.preventDefault();

    // Create Alert if the field still empty
    if (
      !TitleValue ||
      !DescriptionValue ||
      !DateValue ||
      !LocationValue ||
      !CategoryValue ||
      !FounderValue ||
      !Images
    ) {
      return alert('Harap Isi Semua Kolom!');
    }

    const variables = {
      writer: props.user.userData._id,
      title: TitleValue,
      description: DescriptionValue,
      date: DateValue,
      location: LocationValue,
      category: CategoryValue,
      founder: FounderValue,
      images: Images
    };
    Axios.post('/api/product/uploadProduct', variables).then(response => {
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
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}> Upload Barang</Title>
      </div>

      <Form onSubmit={onSubmit}>
        {/*Dropzone*/}
        <FileUpload refreshFunction={updateImages} />
        <br />
        <br />
        <label>Nama Barang</label>
        <Input onChange={onTitleChange} value={TitleValue} />
        <br />
        <br />
        <label>Deskripsi Barang</label>
        <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
        <br />
        <br />
        <label>Lokasi</label>
        <select onChange={onLocationChange}>
          {Location.map(item => (
            <option key={item.key} value={item.key}>
              {item.value}{' '}
            </option>
          ))}
        </select>
        <label>Kategori</label>
        <select onChange={onCategoryChange}>
          {Category.map(item => (
            <option key={item.key} value={item.key}>
              {item.value}{' '}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label>Penemu</label>
        <Input onChange={onFounderChange} value={FounderValue} />
        <br />
        <br />
        <label>Tanggal Hilang</label>
        <Input onChange={onDateValue} value={DateValue} type="date" />
        <br />
        <br />

        <Button onClick={onSubmit}> Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
