import React, { useEffect, useState } from 'react';
import { Button, Descriptions } from 'antd';

function ProductInfo(props) {
  const [Product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);

  return (
    <div>
      <Descriptions title="Product Info"></Descriptions>

      <br />
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button size="large" shape="round" type="danger">
          Barang Saya !
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
