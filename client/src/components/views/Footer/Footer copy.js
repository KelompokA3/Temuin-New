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

              <div class="footer-pad" >
                <h4 >Siapa Kami</h4>
                <ul class="list-unstyled">
                  <li><a href="#">Layanan website JTK yang berfokus pada barang hilang</a></li>

                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">

              <div class="footer-pad">
                <h4>Alamat Kami</h4>
                <ul class="list-unstyled">
                  <li><a href="#">Jl. Gegerkalong Hilir, Ds. Ciwaruga
                  Bandung 40012, Kotak Pos 1234
Jawa Barat</a></li>

                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">

              <div class="footer-pad">
                <h4>Layanan Kami</h4>
                <ul class="list-unstyled">
                  <li><a href="#">Posting menemukan barang</a></li>
                  <li><a href="#">Posting kehilangan barang</a></li>

                  <li>
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <h4>Follow Us</h4>
              <ul class="social-network social-circle">
                <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/_temuin/?hl=id" class="icoInstagram" title="_temuin"><i class="fa fa-instagram"></i></a></li>
                <li><a href="#" class="icoGmail" title="kelompok3.proyek@gmail.com"><i class="fa fa-google"></i></a></li>
                <li><a href="https://github.com/KelompokA3" class="icoGit" title="KelompokA3"><i class="fa fa-github"></i></a></li>

              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 copy">
              <p class="text-center">&copy; Copyright 2020 - Temuin JTK.  All rights reserved.</p>
            </div>
          </div>


        </div>
      </div>
    </footer>



  );
}
export default Footer;

// const FooterContainer = styled.footer`
//   .footer-middle {
//     background: var(--mainDark);
//     padding-top: 3rem;
//     color: var(--mainWhite);
//   }

//   .footer-bottom {
//     padding-top: 3rem;
//     padding-bottom: 2rem;
//   }

//   ul li a {
//     color: var(--mainGrey);
//   }

//   ul li a:hover {
//     color: var(--mainLightGrey);
//   }
// `;
