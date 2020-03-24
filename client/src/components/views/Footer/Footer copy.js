import React from 'react';
import styled from 'styled-components';
import gaya from './FooterStyle.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="SosialMedia">
              <h4>Sosial Media</h4>
              <ul className="list-unstyled">
                <li><i class="fa fa-instagram  "></i>  _temuin</li>
                <li><i class="fa fa-gmail  "></i>kelompok3.proyek@gmail.com</li>
                <li><i class="fa fa-git  "></i>kelompokA3</li>
                {/* <li>Lorem ipsum</li>
                <li>Lorem ipsum</li> */}
              </ul>
            </div>
            {/* Column 2 */}
            <div className="LayananKami">
              <h4>Layanan Kami</h4>
              <ul className="list-unstyled">
                <li>
                  <p>Posting menemukan barang</p>
                </li>
                <li>
                  <p>Posting kehilangan barang</p>
                </li>
                {/* <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li> */}
              </ul>
            </div>
            {/* Column 3 */}
            <div className="Alamat">
              <h4>Alamat</h4>
              <ul className="list-unstyled">
                <li>
                  <p>Jl. Gegerkalong Hilir, Ds. Ciwaruga
Bandung 40012, Kotak Pos 1234
Jawa Barat</p>
                </li>
                {/* <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li> */}
              </ul>
            </div>
            {/* Column 4 */}
            {/* <div className="col-md-3-col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
              </ul>
            </div> */}
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Temuin App - All Rights
              Reserved
            </p>
            <p className= "hastag">
               #TenangDiaMasihDiBumi
            </p>
          </div>
        </div>
      </div>
    </div>
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
