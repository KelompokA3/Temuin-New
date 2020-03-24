import React, { Component } from 'react';

import './style.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../../../node_modules/jquery/src/jquery';
import Popper from 'popper.js';






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


      </div>



    );
  }
}

export default Main;

