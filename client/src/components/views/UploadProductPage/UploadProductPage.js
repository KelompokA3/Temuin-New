import React, { useState } from 'react';
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Location = [
  { key: 1, value: "JTK Lt 1" },
  { key: 2, value: "JTK Lt 2" },
  { key: 3, value: "Pujasera" },
  { key: 4, value: "Masjid LH" },
  { key: 5, value: "ATM" },
  { key: 6, value: "Lainnya" },
]

//rfce
function UploadProductPage(props) {
  // title & deskripsi string, harga int
  const [TitleValue, setTitleValue] = useState('');
  const [DescriptionValue, setDescriptionValue] = useState('');
  const [LocationValue, setLocationValue] = useState('');
  const [FounderValue, setFounderValue] = useState('');
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
            <option key={item.key} value={item.key}>{item.value} </option>
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
