import React from 'react';
import styled from 'styled-components';
import gaya from './FooterStyle.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    <footer class="mainfooter" role="contentinfo">
      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="footer-pad">
                <h4>Siapa Kami</h4>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">
                      Layanan website JTK yang berfokus pada barang hilang
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="footer-pad">
                <h4>Alamat Kami</h4>
                <ul class="list-unstyled">
                  <li>
                    <a href="https://www.google.com/maps/place/Jurusan+Teknik+Komputer+dan+Informatika+Politeknik+Negeri+Bandung/@-6.8707103,107.5717499,18z/data=!4m8!1m2!2m1!1sJl.+Gegerkalong+Hilir,+Ds.+Ciwaruga+Bandung+40012,+Kotak+Pos+1234+Jawa+Barat!3m4!1s0x2e68e42040b49163:0xa1ddabf7c25e325!8m2!3d-6.8692133!4d107.5723439">
                      Jl. Gegerkalong Hilir, Ds. Ciwaruga Bandung 40012, Kotak
                      Pos 1234 Jawa Barat
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="footer-pad">
                <h4>Layanan Kami</h4>
                <ul class="list-unstyled">
                  <li>
                    <a href="/product/upload">Posting menemukan barang</a>
                  </li>
                  <li>
                    <a href="/cari">Posting kehilangan barang</a>
                  </li>

                  <li>
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <h4>Ikuti Kami</h4>
              <ul class="social-network social-circle">
                <li>
                  <a href="#" class="icoFacebook" title="Facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/_temuin/?hl=id"
                    class="icoInstagram"
                    title="_temuin"
                  >
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/search?safe=strict&sxsrf=ALeKk034xBO-EnWx3LQTvMYvjI29NbliuQ%3A1592226070018&source=hp&ei=FXHnXo_lMvbVz7sPhcKL6AM&q=kelompok3.proyek%40gmail.com&oq=kelompok3.proyek%40gmail.com&gs_lcp=CgZwc3ktYWIQA1C2AliYJmDaJ2gAcAB4AYABAIgBAJIBAJgBEKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwjPw62q8IPqAhX26nMBHQXhAj0Q4dUDCAY&uact=5"
                    class="icoGmail"
                    title="kelompok3.proyek@gmail.com"
                  >
                    <i class="fa fa-google"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/KelompokA3"
                    class="icoGit"
                    title="KelompokA3"
                  >
                    <i class="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 copy">
              <p class="text-center">
                &copy; Copyright 2020 - Temuin JTK. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

