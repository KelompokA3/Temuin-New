import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Icon, Col, Card, Row } from 'antd';
import ImageSlider from '../../utils/ImageSlider';
import CheckBox from './Sections/CheckBox';
import CheckBox2 from './Sections/CheckBox2';
import { location, category } from './Sections/Datas';
import SearchFeature from './Sections/SearchFeature';

const { Meta } = Card;

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState();
  const [SearchTerms, setSearchTerms] = useState('');

  const [Filters, setFilters] = useState({
    location: [],
    category: []
  });

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit
    };

    getProducts(variables);
  }, []);

  const getProducts = variables => {
    Axios.post('/api/product/getProducts', variables).then(response => {
      if (response.data.success) {
        if (variables.loadMore) {
          setProducts([...Products, ...response.data.products]);
        } else {
          setProducts(response.data.products);
        }
        setPostSize(response.data.postSize);
      } else {
        alert('Failed to fectch product datas');
      }
    });
  };

  const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
      loadMore: true
    };
    getProducts(variables);
    setSkip(skip);
  };

  const renderCards = Products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24}>
        <Card
          hoverable={true}
          cover={
            <a href={`/product/${product._id}`}>
              {' '}
              <ImageSlider images={product.images} />
            </a>
          }
        >
          <Meta title={product.title} description={product.description} />
        </Card>
      </Col>
    );
  });
  const showFilteredResults = filters => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: filters
    };
    getProducts(variables);
    setSkip(0);
  };
  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    if (category === 'price') {
    }

    console.log(newFilters);

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };
  const updateSearchTerms = newSearchTerm => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm
    };

    console.log(newSearchTerm);

    setSkip(0);
    setSearchTerms(newSearchTerm);

    getProducts(variables);
  };

  return (
    <div style={{ width: '75%', margin: '5rem auto' }}>
      <div style={{ textAlign: 'center', margin: '5rem' }}>
        <h2>
          {' '}
          Cari Barang Anda <Icon type="search" />{' '}
        </h2>
      </div>

      {/* Filter  */}

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <CheckBox
            list={location}
            handleFilters={filters => handleFilters(filters, 'location')}
          />
        </Col>
        <Col lg={12} xs={24}>
          <CheckBox2
            list={category}
            handleFilters={filters => handleFilters(filters, 'category')}
          />
        </Col>
      </Row>
      {/* Search  */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '1rem auto'
        }}
      >
        <SearchFeature refreshFunction={updateSearchTerms} />
      </div>

      {Products.length === 0 ? (
        <div
          style={{
            display: 'flex',
            height: '300px',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h2>No post yet...</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      )}
      <br />
      <br />

      {PostSize >= Limit && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={onLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
