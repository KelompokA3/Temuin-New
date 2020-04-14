import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Row, Col } from 'antd';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import ContactForm from '../UploadProductPage/ContactForm';
import { Button, Descriptions } from 'antd';
import {Link} from 'react-router-dom';

function DetailProductPage(props) {
  
  const productId = props.match.params.productId;
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get(`/api/product/products_by_id?id=${productId}&type=single`).then(
      (response) => {
        setProduct(response.data[0]);
      }
    );
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    

  };
  return (
    <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>{Product.title}</h1>
      </div>

      <br />

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <ProductImage detail={Product} />
        </Col>
        <Col lg={12} xs={24}>
          <Descriptions title="Informasi barang">
            <Descriptions.Item label="Tanggal Hilang">
              {' '}
              {Product.date}
            </Descriptions.Item>
            <Descriptions.Item label="Kategori">
              {' '}
              {Product.category}
            </Descriptions.Item>
            <Descriptions.Item label="Kontak Penemu">
              {' '}
              {Product.founder}
            </Descriptions.Item>
            <Descriptions.Item label="Deskripsi">
              {' '}
              {Product.description}
            </Descriptions.Item>
          </Descriptions>
          <br />
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              size="large"
              shape="round"
              type="danger"
              onClick={onSubmit}
            >
            <Link to='/contact'>Barang Saya</Link>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default DetailProductPage;
