import React, { Component } from 'react';

import './style.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/src/jquery';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

import A from './terpilih/GedungA.png';
import B from './terpilih/GedungB.png';
import Aa from './terpilih/AsramaA.png';
import Akun from './terpilih/akun.png';
import Ab from './terpilih/AsramaB.png';
import Ac from './terpilih/AsramaC.png';
import Direk from './terpilih/Direktorat.png';
import C from './terpilih/GedungC.png';
import D from './terpilih/GedungD.png';
import F from './terpilih/GedungF.png';
import H from './terpilih/GedungH.png';
import Sipil from './terpilih/GedungSipil.png';
import HA from './terpilih/HanggarAero.png';
import JTKB from './terpilih/JurusanTeknikKimia.png';
import LabBis from './terpilih/LabBis.png';
import LabMesin from './terpilih/Labmesinatas.png';
import LabTeknologi from './terpilih/LabTeknologiTeganganTinggi.png';
import LapBas from './terpilih/Lapangbasket.png';
import LH from './terpilih/LH.png';
import MesinElektro from './terpilih/Mesindanelektro.png';
import MKU from './terpilih/MKU.png';
import P2T from './terpilih/P2T.png';
import pendopo from './terpilih/Pendopo.png';
import R from './terpilih/Refrigrasi.png';
import SC from './terpilih/SC.png';
import TAP from './terpilih/Teinggedungnaon.png';
import TekkimA from './terpilih/TekKimatas.png';
import W from './terpilih/Welding.png';

import Popper from 'popper.js';

class Locations extends Component {
  render() {
    return (
      <div class="team-boxed">
        <div class="container">
          <section class="breadcrumb-section3 set-bg">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <div class="breadcrumb__text">
                    <h2>Location</h2>
                    <div class="breadcrumb__option">
                      <a href="/">Home</a>
                      <span>Location</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
          </section>
          <div class="row people">
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={A}></img>
                <h3 class="name">Gedung Kuliah A</h3>
                {/* <p class="title">Chief Head Officer</p> */}
                {/* <p class="description">...</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={B}></img>
                <h3 class="name">Gedung Kuliah B</h3>
                {/* <p class="title">Chief Marketing Officer</p> */}
                {/* <p class="description">...</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={C}></img>
                <h3 class="name">Gedung Kuliah C</h3>
                {/* <p class="title">Chief Technology Officer</p> */}
                {/* <p class="description">...</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={D}></img>
                <h3 class="name">Gedung Kuliah D</h3>
                {/* <p class="title">Technical Officer</p> */}
                {/* <p class="description">Hidup Hanya Sesaat</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={F}></img>
                <h3 class="name">Gedung Kuliah F</h3>
                {/* <p class="title">Marketing Officer</p> */}
                {/* <p class="description">...</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={H}></img>
                <h3 class="name">Gedung Kuliah H</h3>
                {/* <p class="title">Technical Officer</p> */}
                {/* <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={Akun}></img>
                <h3 class="name">Gedung Kuliah Akuntansi</h3>
                {/* <p class="title">Technical Officer</p> */}
                {/* <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={Aa}></img>
                <h3 class="name">Asrama A</h3>
                {/* <p class="title">Technical Officer</p> */}
                {/* <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={Ab}></img>
                <h3 class="name">Asrama B</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={Ac}></img>
                <h3 class="name">Asrama C</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={Direk}></img>
                <h3 class="name">Direktorat</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={Sipil}></img>
                <h3 class="name">Gedung Kuliah Sipil</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={JTKB}></img>
                <h3 class="name">Gedung Kuliah Teknik Kimia</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={LabBis}></img>
                <h3 class="name">Lab. Bisnis</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={LabMesin}></img>
                <h3 class="name">Lab. Teknik Mesin</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={HA}></img>
                <h3 class="name">Hanggar Aeronautika</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={LabTeknologi}></img>
                <h3 class="name">Lab. Teknologi Tegangan Tinggi</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={LapBas}></img>
                <h3 class="name">Lapangan Basket</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={LH}></img>
                <h3 class="name">Lukmanul Hakim</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={MesinElektro}></img>
                <h3 class="name">
                  Gedung Kuliah Teknik Mesin dan Teknik Elektro
                </h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={MKU}></img>
                <h3 class="name">Gedung MKU</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={P2T}></img>
                <h3 class="name">Gedung P2T</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={pendopo}></img>
                <h3 class="name">Pendopo</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={R}></img>
                <h3 class="name">Gedung Kuliah Teknik Refrigrasi</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={SC}></img>
                <h3 class="name">Student Center</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={TAP}></img>
                <h3 class="name">Gedung Putih</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={TekkimA}></img>
                <h3 class="name">Teknik Kimia Atas</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={W}></img>
                <h3 class="name">Lab. Welding</h3>
                {/* <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p> */}
                {/* <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Locations;
