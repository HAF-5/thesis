import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './home.css';
import Img1 from '../img/templates.png';
import Img2 from '../img/share.png';
import Img3 from '../img/art.png';
import Img from '../img/example3.png'
export default class home extends Component {
    render() {
        return (
            <div>
               <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow nav-head" >
                    <h5 className="my-0 mr-md-auto font-weight-normal">H A F 5</h5>

                    <a className="btn btn-outline-primary btn-create" href="#" >Create Free Website</a>
                </div>
                <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div class="col-md-6 p-lg-5 mx-auto my-5">
                        <h1 class="display-4 font-weight-normal title">Create your website</h1>
                        <p class="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
                        <a class="btn btn-outline-primary btn-create" href="#">Create website</a>
                    </div>
                    <div class="product-device box-shadow d-none d-md-block"></div>
                    <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
                </div>
                <div style={{backgroundColor:"white"}}>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 container mx-auto text-center">
                    <h6 className="display-4">Rock your website with HAF builder </h6>
                    
                    <div class="div1">
                        <h5 class="h5-div1">
                        Get access to customizable webpage designs and useful tools to build your website and grow your ideal business. 
                        Easily build a free website to help you get discovered and grow your customer base in style.
                         Start today with our powerful free website builder.
                        </h5>
                        <img src={Img} style={{height: "600px"}}/>

                    </div>
                </div>
                </div>

                <div class="container marketing">
                    <h1 class="div-title"> Create a website in 3 steps</h1>
                    <div class="row">
                        
                        <div class="col-lg-4">
                        <img class="img" src={Img1} alt="Generic placeholder image" />
                            <h2>Choose a template</h2>
                            <p>We offers a lot of beautiful templates based on popular topics. Choose one to start creating your website. </p>
                            
                        </div>
                        <div class="col-lg-4">
                            <img class="img" src={Img3} alt="Generic placeholder image" />
                            <h2>Edit your website</h2>
                            <p>Edit and style your website the way you want. Flexible settings make web design easy for even the most novice.</p>
                            
                        </div>
                        <div class="col-lg-4">
                            <img  class="img" src={Img2} alt="Generic placeholder image" />
                            <h2>Publish easily</h2>
                            <p>Quickly publish your website, connect domain and submit to Google. Get your website online in a few clicks!</p>
                            
                        </div>

                    </div>
                </div>
    
                <footer className="pt-4 my-md-5 pt-md-5 border-top">
                    <div className="container">
                    <div className="row">
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Cool stuff</a></li>
                        <li><a className="text-muted" href="#">Another one</a></li>
                        <li><a className="text-muted" href="#">Last time</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Resource</a></li>
                        <li><a className="text-muted" href="#">Resource name</a></li>
                        <li><a className="text-muted" href="#">Another resource</a></li>

                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Team</a></li>
                        <li><a className="text-muted" href="#">Locations</a></li>
                        <li><a className="text-muted" href="#">Privacy</a></li>
                        </ul>
                    </div>
                    </div>
                    </div>
                </footer>
            </div>
        )
    }
}
