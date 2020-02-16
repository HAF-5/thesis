import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Footer/footer.css'

class Footer extends Component {

  render() {
    return (
      <div>
        <footer>
        	<div class="footer-top">
		        <div class="container " style={{textAlign:"left"}}>
		        	<div class="row">
		        		<div class="col-md-4 footer-about wow fadeInUp animated" >
		        			<h3>About us</h3>
		        			<p>We are a young company always looking for new and creative ideas to help you with our products in your everyday work.</p>
		        			<p>© HAF</p>
	              </div>
		        		<div class="col-md-4 offset-md-1 footer-contact wow fadeInDown animated" >
		        			<h3>Contact</h3>
                  <p><i class="fas fa-map-marker-alt"></i> RBK 10, 10136 ghazala</p>
                  <p><i class="fas fa-phone"></i> Phone: (0039) 333 12 68 347</p>
                  <p><i class="fas fa-envelope"></i> Email: <a href="test@domain.com">hello@domain.com</a></p>
	              </div> 
                <div class="footer-bottom">            
                  <div class="col footer-social">
                    <a href="#"><i class="fab fa-facebook-f"></i></a> 
                    <a href="#"><i class="fab fa-twitter"></i></a> 
                    <a href="#"><i class="fab fa-google-plus-g"></i></a> 
                    <a href="#"><i class="fab fa-instagram"></i></a> 
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                  </div>
                </div>
              </div>
		        </div>
	          </div>
        </footer>
      </div>
    )
  }
}
export default  Footer