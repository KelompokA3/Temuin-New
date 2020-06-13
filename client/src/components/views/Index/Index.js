import React, { Component } from 'react';

import './style.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../../../node_modules/jquery/src/jquery';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

import temuin1 from './temuin1.jpg';
import temuin2 from './temuin2.jpg';
import temuin3 from './temuin3.jpg';


class Main extends Component {

  render() {

    return (

      <div class="container-fluid">
        <div class="row">

          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="info">

                  <h1>Temuin</h1>
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

            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>

          </div>
        </div>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <div class="site-section" id="features-section">
          <div class="container">
            <div class="row mb-5 justify-content-center text-center" data-aos="fade-up">
              <div class="col-7 text-center  mb-5">
                <h2 class="section-title">Temuin Features</h2>
                <p class="lead">Temuin adalah website yang ditujukan untuk membantu masyarakay polban mencari barang hilang</p>
              </div>
            </div>
            <div class="row align-items-stretch">
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">

                <div class="unit-4 d-block">

                  <div class="unit-4-icon mb-3">
                    <span class="icon-wrap"><span class="fa fa-search"></span></span>
                  </div>
                  <div>
                    <h3>Cari Barang Anda</h3>
                    <p>Temuin menampilkan barang-barang hilang yang berada di kawasan politeknik negeri bandung</p>
                    <h3> #TenangDiaMasihDiBumi</h3>
                  </div>
                </div>

              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">

                <div class="unit-4 d-block">
                  <div class="unit-4-icon mb-3">
                    <span class="icon-wrap"><span class="fa fa-phone"></span></span>
                  </div>
                  <div>
                    <h3>Hubungi Penemu Barang Anda</h3>
                    <p>Temuin menghubungkan anda dengan penemu barang anda</p>
                    <h3> #TenangDiaMasihDiBumi</h3>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div class="unit-4 d-block">
                  <div class="unit-4-icon mb-3">
                    <span class="icon-wrap"><span class="fa fa-archive"></span></span>
                  </div>
                  <div>
                    <h3>Ambil Barang Anda</h3>
                    <p><strong>Temuin</strong> akan memastikan barang anda diterima dengan baik
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
                <h2 class="section-title mb-3">Testimonial</h2>
                <p class="lead">Testimoni dari beberapa warga polban yang berhasil menemukan barang hilangnya</p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="h-entry">
                  <img src={temuin1} alt="Image" class="img-fluid"></img>
                  <h2><a href="#">Testimoni Temuin</a></h2>
                  <div class="meta mb-4">Jimi Rumbiak -- Feb 25, 2020<a href="#"> TemuiNews</a></div>
                  <p>Berikut adalah testimoni dari rekan yang barangnya berhasil ditemukan oleh Temuin</p>
                  <p><a href="#">Continue Reading...</a></p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="h-entry">
                  <img src={temuin2} alt="Image" class="img-fluid"></img>
                  <h2><a href="#">Testimoni Temuin</a></h2>
                  <div class="meta mb-4">Imaniar Salsabila--Jan 18, 2019 <a href="#"> TemuiNews</a></div>
                  <p>Berikut adalah testimoni dari rekan yang barangnya berhasil ditemukan oleh Temuin</p>
                  <p><a href="#">Continue Reading...</a></p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div class="h-entry">
                  <img src={temuin3} alt="Image" class="img-fluid"></img>
                  <h2><a href="#">Testimoni Temuin</a></h2>
                  <div class="meta mb-4">Jimi Rumbiak -- Jan 18, 2019<a href="#"> TemuiNews</a></div>
                  <p>Berikut adalah testimoni dari rekan yang barangnya berhasil ditemukan oleh Temuin</p>
                  <p><a href="#">Continue Reading...</a></p>
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

