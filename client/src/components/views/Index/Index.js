import React, { Component } from 'react';

import './style.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../../../node_modules/jquery/src/jquery';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

import temuin1 from './temuin1.jpg';
import temuin2 from './temuin2.jpg';
import temuin3 from './temuin3.jpg';
import Logo from './logo_temuin.png';
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
class Main extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="info">
                  <h1> Temuin</h1>
                  <div class="wrap">
                    <div id="cover">
                      <div class="tb">
                        <div class="td">
                          <button type="submit">
                            <div id="s-circle"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>#PastiBalikLagi</p>
                </div>
              </div>

              <div class="carousel-item">
                <div class="info">
                  <h1>Temuin</h1>
                  <div class="wrap">
                    <div id="cover">
                      <div class="tb">
                        <div class="td">
                          <button type="submit">
                            <div id="s-circle"></div>
                            <span></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>#TemuinDuluAja</p>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="info">
                  <h1>Temuin</h1>
                  <div class="wrap">
                    <div id="cover">
                      <div class="tb">
                        <div class="td">
                          <button type="submit">
                            <div id="s-circle"></div>
                            <span></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>#MasihAdaDiBumi</p>
                </div>
              </div>
            </div>

            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="site-section" id="features-section">
          <div class="container">
            <div
              class="row mb-5 justify-content-center text-center"
              data-aos="fade-up"
            >
              <div class="col-7 text-center  mb-5">
                <h2 class="section-title">
                  {' '}
                  <img class="menu__title" src={Logo}></img> Features
                </h2>
                <p class="lead">
                  Temuin adalah website yang ditujukan untuk membantu masyarakat
                  polban mencari barang hilang
                </p>
              </div>
            </div>
            <div class="row align-items-stretch">
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                <div class="unit-4 d-block">
                  <div class="unit-4-icon mb-3">
                    <span class="icon-wrap">
                      <span class="fa fa-search"></span>
                    </span>
                  </div>
                  <div>
                    <h3>Cari Barang Anda</h3>
                    <p>
                      Temuin menampilkan barang-barang hilang yang berada di
                      kawasan politeknik negeri bandung
                    </p>
                    <h3> #TenangDiaMasihDiBumi</h3>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-4 mb-4 mb-lg-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="unit-4 d-block">
                  <div class="unit-4-icon mb-3">
                    <span class="icon-wrap">
                      <span class="fa fa-phone"></span>
                    </span>
                  </div>
                  <div>
                    <h3>Hubungi Penemu Barang Anda</h3>
                    <p>Temuin menghubungkan anda dengan penemu barang anda</p>
                    <h3> #TenangDiaMasihDiBumi</h3>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-4 mb-4 mb-lg-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="unit-4 d-block">
                  <div class="unit-4-icon mb-3">
                    <span class="icon-wrap">
                      <span class="fa fa-archive"></span>
                    </span>
                  </div>
                  <div>
                    <h3>Ambil Barang Anda</h3>
                    <p>
                      <strong>Temuin</strong> akan memastikan barang anda
                      diterima dengan baik
                    </p>
                    <h3> #TenangDiaMasihDiBumi</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="site-section" id="blog-section">
          <div class="container">
            <div class="row mb-5">
              <div class="col-12 text-center">
                <h2 class="section-title mb-3">
                  <img class="menu__title" src={Logo}></img> Highlights
                </h2>
              </div>
            </div>
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
        </div>
        <div class="site-section" id="blog-section">
          <div class="container">
            <div class="row mb-5">
              <div class="col-12 text-center">
                <h2 class="section-title mb-3">
                  <img class="menu__title" src={Logo}></img> Testimonial
                </h2>
                <p class="lead">
                  Testimoni dari beberapa warga polban yang berhasil menemukan
                  barang hilangnya
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="h-entry">
                  <img src={temuin1} alt="Image" class="img-fluid"></img>
                  <h2>
                    <a href="#">Testimoni Temuin</a>
                  </h2>
                  <div class="meta mb-4">
                    Jimi Rumbiak -- Feb 25, 2020<a href="#"> Temuin Blog</a>
                  </div>
                  <p>
                    Berikut adalah testimoni dari rekan yang barangnya berhasil
                    ditemukan oleh Temuin
                  </p>
                  <p>
                    <a href="/blog">Continue Reading...</a>
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="h-entry">
                  <img src={temuin2} alt="Image" class="img-fluid"></img>
                  <h2>
                    <a href="#">Testimoni Temuin</a>
                  </h2>
                  <div class="meta mb-4">
                    Imaniar Salsabila--Jan 18, 2019 <a href="#"> Temuin Blog</a>
                  </div>
                  <p>
                    Berikut adalah testimoni dari rekan yang barangnya berhasil
                    ditemukan oleh Temuin
                  </p>
                  <p>
                    <a href="/blog">Continue Reading...</a>
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="h-entry">
                  <img src={temuin3} alt="Image" class="img-fluid"></img>
                  <h2>
                    <a href="#">Testimoni Temuin</a>
                  </h2>
                  <div class="meta mb-4">
                    Jimi Rumbiak -- Jan 18, 2019<a href="#"> Temuin Blog</a>
                  </div>
                  <p>
                    Berikut adalah testimoni dari rekan yang barangnya berhasil
                    ditemukan oleh Temuin
                  </p>
                  <p>
                    <a href="/blog">Continue Reading...</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
