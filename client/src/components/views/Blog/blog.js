import React, { Component } from 'react';


import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../../../node_modules/jquery/src/jquery';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import './style.css'
import blog1 from "./temuin1.jpg";
import blog2 from "./temuin2.jpg";
import blog3 from "./temuin3.jpg";
import gambar1 from "./barang1.png";
import gambar2 from "./barang2.png";
import gambar3 from "./barang3.png";
import gambar4 from "./barang4.png";
import gambar5 from "./barang5.png";
import gambar6 from "./barang6.png";
class Blog extends Component {

    render() {

        return (
            <div class="container">
                <section class="breadcrumb-section set-bg" >

                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <div class="breadcrumb__text">
                                    <h2>Blog</h2>
                                    <div class="breadcrumb__option">
                                        <a href="/">Home</a>
                                        <span>Blog</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    </br>
                </section>
                <section class="blog spad">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-5">
                                <div class="blog__sidebar">
                                    <div class="blog__sidebar__search">
                                        <form action="#">
                                            <input type="text" placeholder="Search..."></input>
                                            <button type="submit"><span class="icon_search"></span></button>
                                        </form>
                                    </div>

                                    <div class="blog__sidebar__item">
                                        <h4>Hot News</h4>
                                        <div class="blog__sidebar__recent">
                                            <a href="#" class="blog__sidebar__recent__item">
                                                <div class="blog__sidebar__recent__item__pic">
                                                    <a href="https://www.instagram.com/p/B-HQcUoDHi5/" class="blog__sidebar__recent__item__pic"><img class="blog__sidebar__recent__item__pic" class="img-fluid" alt="Responsive image" src={blog2}></img></a>
                                                </div>
                                                <div class="blog__sidebar__recent__item__text">
                                                    <h6>Dia Sudah Kembali<br />Yes!!</h6>
                                                    <span>MAR 10, 2020</span>
                                                </div>
                                            </a>
                                            <a href="#" class="blog__sidebar__recent__item">
                                                <div class="blog__sidebar__recent__item__pic">
                                                    <a href="https://www.instagram.com/p/B-HNwi-j9uc/"><img class="blog__item__pic" alt="Image" class="img-fluid" src={blog3}></img></a>
                                                </div>
                                                <div class="blog__sidebar__recent__item__text">
                                                    <h6>Dia Sudah Kembali<br />Yes!!</h6>
                                                    <span>MAR 10, 2020</span>
                                                </div>
                                            </a>
                                            <a href="#" class="blog__sidebar__recent__item">
                                                <div class="blog__sidebar__recent__item__pic">
                                                    <a href="https://www.instagram.com/p/B-HNpp6jmnH/"><img class="blog__item__pic" alt="Image" class="img-fluid" src={blog1}></img></a>
                                                </div>
                                                <div class="blog__sidebar__recent__item__text">
                                                    <h6>Dia Sudah Kembali<br />Yes!!</h6>
                                                    <span>FEB 25, 2020</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-8 col-md-7">
                                <div class="row">


                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="blog__item">

                                            <div class="blog__item__pic">
                                                <a href="https://www.instagram.com/_temuin/?hl=id"><img class="blog__item__pic" alt="Image" class="img-fluid" src={blog1}></img></a>

                                            </div>
                                            <div class="blog__item__text">
                                                <ul>
                                                    <li><i class="fa fa-calendar"></i> Februari 25,2020</li>
                                                    <li><i class="fa fa-comment"></i> 5</li>
                                                </ul>
                                                <h5><a href="#">Berhasil Kembali</a></h5>
                                                <p>Akhinya Dia Kembali guys
                                                Barang yang selama ini dicari
akhirnya kembali ke tangan pemiliknya 😊 </p>
                                                <a href="https://www.instagram.com/_temuin/?hl=id" class="blog__btn">READ MORE <span class="arrow_right"></span></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="blog__item">

                                            <div class="blog__item__pic">
                                                <a href="https://www.instagram.com/_temuin/?hl=id"><img class="blog__item__pic" alt="Image" class="img-fluid" src={blog2}></img></a>

                                            </div>
                                            <div class="blog__item__text">
                                                <ul>
                                                    <li><i class="fa fa-calendar"></i> Mar 10,2020</li>
                                                    <li><i class="fa fa-comment"></i> 3</li>
                                                </ul>
                                                <h5><a href="#">Berhasil Kembali</a></h5>
                                                <p>Akhinya Dia Kembali guys
                                                Barang yang selama ini dicari
akhirnya kembali ke tangan pemiliknya 😊 </p>
                                                <a href="https://www.instagram.com/_temuin/?hl=id" class="blog__btn">READ MORE <span class="arrow_right"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="blog__item">

                                            <div class="blog__item__pic">
                                                <a href="https://www.instagram.com/_temuin/?hl=id"><img class="blog__item__pic" alt="Image" class="img-fluid" src={gambar1}></img></a>

                                            </div>
                                            <div class="blog__item__text">
                                                <ul>
                                                    <li><i class="fa fa-calendar"></i> Feb 28,2020</li>
                                                    <li><i class="fa fa-comment"></i> 3</li>
                                                </ul>
                                                <h5><a href="#">~ Penemuan Barang ~</a></h5>
                                                <p>Telah di temukan Mouse di Lab ICT-2 Gedung JTK POLBAN Bagi yang merasa kehilangan bisa menghubungi kontak dibawah ini.
                                                </p><p> Cp:
                                                Line: helmirbk / imaniarsalsa Atau
  <span class="icon-wrap"> <span class="fa fa-whatsapp"></span></span> 085281527982 / 088213142637</p>
                                                <a href="https://www.instagram.com/_temuin/?hl=id" class="blog__btn">READ MORE <span class="arrow_right"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="blog__item">

                                            <div class="blog__item__pic">
                                                <a href="https://www.instagram.com/_temuin/?hl=id"><img class="blog__item__pic" alt="Image" class="img-fluid" src={gambar2}></img></a>

                                            </div>
                                            <div class="blog__item__text">
                                                <ul>
                                                    <li><i class="fa fa-calendar"></i> Mar 03,2020</li>
                                                    <li><i class="fa fa-comment"></i> 3</li>
                                                </ul>
                                                <h5><a href="#">~ Penemuan Barang ~</a></h5>
                                                <p>Telah di temukan KTP atas nama FARHAN ATTALLAH ARIQ di sekitar Polban

                                                </p><p> Cp:
                                                Line: helmirbk / imaniarsalsa Atau
  <span class="icon-wrap"> <span class="fa fa-whatsapp"></span></span> 085281527982 / 088213142637</p>
                                                <a href="https://www.instagram.com/_temuin/?hl=id" class="blog__btn">READ MORE <span class="arrow_right"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="blog__item">

                                            <div class="blog__item__pic">
                                                <a href="https://www.instagram.com/_temuin/?hl=id"><img class="blog__item__pic" alt="Image" class="img-fluid" src={gambar3}></img></a>

                                            </div>
                                            <div class="blog__item__text">
                                                <ul>
                                                    <li><i class="fa fa-calendar"></i> Feb 24,2020</li>
                                                    <li><i class="fa fa-comment"></i> 3</li>
                                                </ul>
                                                <h5><a href="#">~ Penemuan Barang ~</a></h5>
                                                <p>Telah di temukan Mouse di ruang D219 Gedung JTK Polban
                                                </p><p> Cp:
                                                Line: helmirbk / imaniarsalsa Atau
  <span class="icon-wrap"> <span class="fa fa-whatsapp"></span></span> 085281527982 / 088213142637</p>
                                                <a href="https://www.instagram.com/_temuin/?hl=id" class="blog__btn">READ MORE <span class="arrow_right"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="blog__item">

                                            <div class="blog__item__pic">
                                                <a href="https://www.instagram.com/_temuin/?hl=id"><img class="blog__item__pic" alt="Image" class="img-fluid" src={gambar4}></img></a>

                                            </div>
                                            <div class="blog__item__text">
                                                <ul>
                                                    <li><i class="fa fa-calendar"></i> Feb 24,2020</li>
                                                    <li><i class="fa fa-comment"></i> 3</li>
                                                </ul>
                                                <h5><a href="#">~ Penemuan Barang ~</a></h5>
                                                <p>Telah di temukan topi di ruang D219 Gedung JTK POLBAN
                                                </p><p> Cp:
                                                Line: helmirbk / imaniarsalsa Atau
  <span class="icon-wrap"> <span class="fa fa-whatsapp"></span></span> 085281527982 / 088213142637</p>
                                                <a href="https://www.instagram.com/_temuin/?hl=id" class="blog__btn">READ MORE <span class="arrow_right"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="blog__item">

                                            <div class="blog__item__pic">
                                                <a href="https://www.instagram.com/_temuin/?hl=id"><img class="blog__item__pic" alt="Image" class="img-fluid" src={gambar5}></img></a>

                                            </div>
                                            <div class="blog__item__text">
                                                <ul>
                                                    <li><i class="fa fa-calendar"></i> Feb 24,2020</li>
                                                    <li><i class="fa fa-comment"></i> 3</li>
                                                </ul>
                                                <h5><a href="#">~ Penemuan Barang ~</a></h5>
                                                <p>Telah temukan Kotak Earphone warna hitam dan masih berfungsi di Gedung JTK POLBAN
                                                </p><p> Cp:
                                                Line: helmirbk / imaniarsalsa Atau
  <span class="icon-wrap"> <span class="fa fa-whatsapp"></span></span> 085281527982 / 088213142637</p>
                                                <a href="https://www.instagram.com/_temuin/?hl=id" class="blog__btn">READ MORE <span class="arrow_right"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="blog__item">

                                            <div class="blog__item__pic">
                                                <a href="https://www.instagram.com/_temuin/?hl=id"><img class="blog__item__pic" alt="Image" class="img-fluid" src={gambar6}></img></a>

                                            </div>
                                            <div class="blog__item__text">
                                                <ul>
                                                    <li><i class="fa fa-calendar"></i> Feb 24,2020</li>
                                                    <li><i class="fa fa-comment"></i> 3</li>
                                                </ul>
                                                <h5><a href="#">~ Penemuan Barang ~</a></h5>
                                                <p>Telah temukan Charger Sony warna hitam di Gedung JTK POLBAN
                                                </p><p> Cp:
                                                Line: helmirbk / imaniarsalsa Atau
  <span class="icon-wrap"> <span class="fa fa-whatsapp"></span></span> 085281527982 / 088213142637</p>
                                                <a href="https://www.instagram.com/_temuin/?hl=id" class="blog__btn">READ MORE <span class="arrow_right"></span></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="product__pagination blog__pagination">
                                            <a href="#">1</a>
                                            <a href="#">2</a>
                                            <a href="#">3</a>
                                            <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>




        );
    }
}

export default Blog;

