import React, { Component} from 'react'
import logo from '../img/logo1.png'
import {Link} from 'react-router-dom'
export default class extends Component{
    render(){
    
    return (
        <div id="footer" class="section section-grey">
		
		<div class="container">
	
			<div class="row">
			
				<div class="col-md-3 col-sm-6 col-xs-6">
					<div class="footer">
					
						<div class="footer-logo">
							<a class="logo" href="#">
		            <img src={logo} alt=""/>
		          </a>
						</div>
					

						<p>SabKuch is a shopping website and you get the all latest products in our website</p>

						<ul class="footer-social">
							<li><a href="https://www.facebook.com/SabKuch3701/" target="_blank"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-instagram"></i></a></li>
							<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
							<li><a href="#"><i class="fa fa-pinterest"></i></a></li>
						</ul>
					
					</div>
				</div>
			
				<div class="col-md-3 col-sm-6 col-xs-6">
					<div class="footer">
						<h3 class="footer-header">My Account</h3>
						<ul class="list-links">
						
							<li><a href="#">Checkout</a></li>
							<li><a href="#">Login</a></li>
						</ul>
					</div>
				</div>
			

				<div class="clearfix visible-sm visible-xs"></div>

			
				<div class="col-md-3 col-sm-6 col-xs-6">
					<div class="footer">
						<h3 class="footer-header">Customer Service</h3>
						<ul class="list-links">
							<li><a href="#">About Us</a></li>
							<li><a href="#">Shiping & Return</a></li>
							<li><a href="#">Shiping Guide</a></li>
							<li><a ><Link to="/faq"> FAQ</Link></a></li>
						</ul>
					</div>
				</div>
		
				<div class="col-md-3 col-sm-6 col-xs-6">
					<div class="footer">
						<h3 class="footer-header">Stay Connected</h3>
						<a><Link to="/writetous"> WRITE TO US</Link></a>
						
					</div>
				</div>
				
			</div>
			
			<hr/>
			
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center">
				
					<div class="footer-copyright">
						
						Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This website is made  by <a href="http://localhost:3000/" target="_blank">SABKUCH</a>
					
					</div>
				
				</div>
			</div>
		
		</div>

	</div>    
  
    )
    }
}