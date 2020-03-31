import React, { Component } from 'react';

import './style.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../../../node_modules/jquery/src/jquery';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import ilham from './image/ilham.png';
import jimi from './image/jimi.png';
import rayhan from './image/rayhan.png';
import aji from './image/aji.png';
import iman from './image/iman.png';
import febri from './image/febri.png';





class About extends Component {

    render() {

        return (

            <div class="team-boxed">
                <div class="container">
                    <div class="intro">
                        <h2 class="text-center">Our Team </h2>
                        <p class="text-center">Tim kami</p>
                    </div>
                    <div class="row people">
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box">
                                <img class="rounded-circle" src={febri}></img>
                                <h3 class="name">Febriyoga Bagus Satria</h3>
                                <p class="title">Chief Head Officer</p>
                                <p class="description">...</p>
                                <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box">
                                <img class="rounded-circle" src={jimi}></img>
                                <h3 class="name">Jimi Rumbiak</h3>
                                <p class="title">Chief Marketing Officer</p>
                                <p class="description">...</p>
                                <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box">
                                <img class="rounded-circle" src={rayhan}></img>
                                <h3 class="name">Rayhan Zharfan Al Ghifati</h3>
                                <p class="title">Chief Technology Officer</p>
                                <p class="description">...</p>
                                <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box">
                                <img class="rounded-circle" src={ilham}></img>
                                <h3 class="name">Muhammad Ilham Surya</h3>
                                <p class="title">Technical Officer</p>
                                <p class="description">Hidup Hanya Sesaat</p>
                                <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box">
                                <img class="rounded-circle" src={iman}></img>
                                <h3 class="name">Imaniar Salsabila</h3>
                                <p class="title">Marketing Officer</p>
                                <p class="description">...</p>
                                <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box">
                                <img class="rounded-circle" src={aji}></img>
                                <h3 class="name">Aji Muhammad Zapar</h3>
                                <p class="title">Technical Officer</p>
                                <p class="description">"Sabar serta yakin. And don't forget, be the best version of yourself"</p>
                                <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
         

            </div>



        );
    }
}

export default About;

