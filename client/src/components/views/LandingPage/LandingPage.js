import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Icon, Col, Card, Row } from 'antd';
import ImageSlider from '../../utils/ImageSlider';
import CheckBox from './Sections/CheckBox';
import CheckBox2 from './Sections/CheckBox2';
import { location, category } from './Sections/Datas';
import './style.css';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../../../node_modules/jquery/src/jquery';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import SearchFeature from './Sections/SearchFeature';

import brg1 from './1585311447115_IMG20200310111154.jpg';
import brg2 from './1585311800377_IMG20200310142129.jpg';
import brg3 from './1585311807233_IMG20200302165028.jpg';
import brg4 from './1586747416003_IMG20200309115730.jpg';
import brg5 from './1585311751021_IMG20200229210300.jpg';
import brg6 from './1586748213629_IMG20200309121111.jpg';
import brg7 from './1586749760771_IMG20200310130811.jpg';
import brg8 from './1586750282828_IMG_20200224_103618.jpg';
import brg9 from './1585311453161_IMG20200310111318.jpg';
import brg10 from './1585311701014_IMG20200303110125.jpg';
import brg11 from './1585312204320_IMG20200225101010.jpg';
import brg12 from './1585312276769_IMG20200225100841.jpg';

const { Meta } = Card;

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState();
  const [SearchTerms, setSearchTerms] = useState('');

  const [Filters, setFilters] = useState({
    location: [],
    category: [],
  });

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };

    getProducts(variables);
  }, []);

  const getProducts = (variables) => {
    Axios.post('/api/product/getProducts', variables).then((response) => {
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
      loadMore: true,
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
  const showFilteredResults = (filters) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: filters,
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
  const updateSearchTerms = (newSearchTerm) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm,
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
          <section class="breadcrumb-section4 set-bg">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <div class="breadcrumb__text">
                    <h2>
                      {' '}
                      Cari Barang Anda <Icon type="search" />{' '}
                    </h2>
                    <div class="breadcrumb__option">
                      <a href="/">Home</a>
                      <span>Search</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
          </section>
        </h2>
        <section class="carousel-products">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2></h2>
                <div
                  id="myCarousel"
                  class="carousel slide"
                  data-ride="carousel"
                  data-interval="0"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#myCarousel"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>

                  <div class="carousel-inner">
                    <div class="item carousel-item active">
                      <div class="row">
                        <div class="col-sm-3">
                          <div class="thumb-wrapper">
                            <div class="img-box">
                              {' '}
                              <img
                                src={brg1}
                                class="img-responsive img-fluid"
                                alt=""
                              ></img>
                            </div>
                            <div class="thumb-content">
                              <h4>
                                <strong>Jaket </strong>
                              </h4>
                              <p class="item-price">
                                <span>Pakaian</span>
                              </p>

                              <a href="#" class="btn btn-primary">
                                Barang Saya
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <div class="thumb-wrapper">
                            <div class="img-box">
                              {' '}
                              <img
                                src={brg2}
                                class="img-responsive img-fluid"
                                alt=""
                              ></img>
                            </div>
                            <div class="thumb-content">
                              <h4>
                                <strong>Dompet</strong>
                              </h4>
                              <p class="item-price">
                                <span>Aksesoris</span>
                              </p>

                              <a href="/contact" class="btn btn-primary">
                                Barang Saya
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <div class="thumb-wrapper">
                            <div class="img-box">
                              {' '}
                              <img
                                src={brg3}
                                class="img-responsive img-fluid"
                                alt=""
                              ></img>
                            </div>
                            <div class="thumb-content">
                              <h4>
                                <strong>Kotak Makan</strong>
                              </h4>
                              <p class="item-price">
                                <span>Alat Makan</span>
                              </p>

                              <a href="#" class="btn btn-primary">
                                Barang Saya
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <div class="thumb-wrapper">
                            <div class="img-box">
                              {' '}
                              <img
                                src={brg4}
                                class="img-responsive img-fluid"
                                alt=""
                              ></img>
                            </div>
                            <div class="thumb-content">
                              <h4>
                                <strong>Tip-X</strong>
                              </h4>
                              <p class="item-price">
                                <span>Alat Tulis</span>
                              </p>

                              <a href="/contact" class="btn btn-primary">
                                Barang Saya
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item carousel-item">
                      <div class="row">
                        <div class="col-sm-3">
                          <div class="thumb-wrapper">
                            <div class="img-box">
                              {' '}
                              <img
                                src={brg5}
                                class="img-responsive img-fluid"
                                alt=""
                              ></img>
                            </div>
                            <div class="thumb-content">
                              <h4>
                                <strong>Charger HP</strong>
                              </h4>
                              <p class="item-price">
                                <span>Elektronik</span>
                              </p>

                              <a href="/contact" class="btn btn-primary">
                                Barang Saya
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <div class="thumb-wrapper">
                            <div class="img-box">
                              {' '}
                              <img
                                src={brg6}
                                class="img-responsive img-fluid"
                                alt=""
                              ></img>
                            </div>
                            <div class="thumb-content">
                              <h4>
                                <strong>Penggaris Besi</strong>
                              </h4>
                              <p class="item-price">
                                <span>Alat Tulis</span>
                              </p>

                              <a href="/contact" class="btn btn-primary">
                                Barang Saya
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <div class="thumb-wrapper">
                            <div class="img-box">
                              {' '}
                              <img
                                src={brg7}
                                class="img-responsive img-fluid"
                                alt=""
                              ></img>
                            </div>
                            <div class="thumb-content">
                              <h4>
                                <strong>Flashdisk</strong>
                              </h4>
                              <p class="item-price">
                                <span>Elektronik</span>
                              </p>

                              <a href="/contact" class="btn btn-primary">
                                Barang Saya
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <div class="thumb-wrapper">
                            <div class="img-box">
                              {' '}
                              <img
                                src={brg8}
                                class="img-responsive img-fluid"
                                alt=""
                              ></img>
                            </div>
                            <div class="thumb-content">
                              <h4>
                                <strong>Converter</strong>
                              </h4>
                              <p class="item-price">
                                <span>Elektronik</span>
                              </p>

                              <a href="/contact" class="btn btn-primary">
                                Barang Saya
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item carousel-item">
                      <div class="row">
                        <div class="col-sm-3">
                          <div class="thumb-wrapper">
                            <div class="img-box">
                              {' '}
                              <img
                                src={brg9}
                                class="img-responsive img-fluid"
                                alt=""
                              ></img>
                            </div>
                            <div class="thumb-content">
                              <h4>
                                <strong>Kotak Pensil </strong>
                              </h4>
                              <p class="item-price">
                                <span>Alat Tulis</span>
                              </p>

                              <a href="/contact" class="btn btn-primary">
                                Barang Saya
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <div class="thumb-wrapper">
                            <div class="img-box">
                              {' '}
                              <img
                                src={brg10}
                                class="img-responsive img-fluid"
                                alt=""
                              ></img>
                            </div>
                            <div class="thumb-content">
                              <h4>
                                <strong>Mouse </strong>
                              </h4>
                              <p class="item-price">
                                <span>Elektronik</span>
                              </p>

                              <a href="/contact" class="btn btn-primary">
                                Barang Saya
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <div class="thumb-wrapper">
                            <div class="img-box">
                              {' '}
                              <img
                                src={brg11}
                                class="img-responsive img-fluid"
                                alt=""
                              ></img>
                            </div>
                            <div class="thumb-content">
                              <h4>
                                <strong>Kunci Motor</strong>
                              </h4>
                              <p class="item-price">
                                <span>Aksesoris</span>
                              </p>

                              <a href="/contact" class="btn btn-primary">
                                Barang Saya
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <div class="thumb-wrapper">
                            <div class="img-box">
                              {' '}
                              <img
                                src={brg12}
                                class="img-responsive img-fluid"
                                alt=""
                              ></img>
                            </div>
                            <div class="thumb-content">
                              <h4>
                                <strong>Jam Tangan</strong>
                              </h4>
                              <p class="item-price">
                                <span>Aksesoris</span>
                              </p>

                              <a href="/contact" class="btn btn-primary">
                                Barang Saya
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    class="carousel-control left carousel-control-prev"
                    href="#myCarousel"
                    data-slide="prev"
                  >
                    <i class="fa fa-angle-left"></i>
                  </a>
                  <a
                    class="carousel-control right carousel-control-next"
                    href="#myCarousel"
                    data-slide="next"
                  >
                    <i class="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Filter  */}

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <CheckBox
            list={location}
            handleFilters={(filters) => handleFilters(filters, 'location')}
          />
        </Col>
        <Col lg={12} xs={24}>
          <CheckBox2
            list={category}
            handleFilters={(filters) => handleFilters(filters, 'category')}
          />
        </Col>
      </Row>
      {/* Search  */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '1rem auto',
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
            alignItems: 'center',
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
