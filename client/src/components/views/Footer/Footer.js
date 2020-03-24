import React from 'react';
import { Icon } from 'antd';
import './Footer.css'
function Footer() {
  return (
    <div class="main-footer widgets-dark typo-light">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="widget subscribe no-box">
              <h5 class="widget-title">TEMUIN<span></span></h5>
              <p>Cari barang hilang anda disini</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="widget no-box">
              <h5 class="widget-title">Contact Person<span></span></h5>
              <ul class="thumbnail-widget">
                <li>
                  <div class="thumb-content"><a href="#.">Jimi Rumbiak/085281527982</a></div>
                </li>
                <li>
                  <div class="thumb-content"><a href="#.">Imaniar Salsabila/088213142637</a></div>
                </li>

              </ul>

            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="widget no-box">
              <h5 class="widget-title">Daftar Disini<span></span></h5>
              <p>Upload barang hilang anda disini</p>
              <a class="btn" href="/register" target="_blank">Daftar Sekarang</a>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="widget no-box">
              <h5 class="widget-title">Contact Us<span></span></h5>

              <p><a href="mailto:info@domain.com" title="glorythemes">kelompok3.proyek@gmail.com</a></p>

            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <p>#TenangMasihAdaDiBumi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;
