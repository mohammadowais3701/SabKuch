import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import {setProducts} from './addtocart'
import logo from '../img/logo1.png'

export default class extends Component{
componentDidMount(){
	let storage=JSON.parse(localStorage.getItem('products'));
	try{
	 document.getElementById("qt").innerHTML=storage.length;}
	 catch(ex){}
	setProducts();
	}
    render(){
        return(
        <div id="header">
			<div className="container">
				<div className="pull-left">
				
					<div className="header-logo">
						<a className="logo" >
						
							<img src={logo} alt="" />
							<Link to="/"><li ></li></Link>
						</a>
					</div>
				
				
				
				</div>
				<div className="pull-right">
					<ul className="header-btns">
					
						<li className="header-account dropdown default-dropdown">
							<div className="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
								<div className="header-btns-icon">
									<i className="fa fa-user-o"></i>
								</div>
								<strong className="text-uppercase">My Account <i className="fa fa-caret-down"></i></strong>
							</div>
							<a href="#" className="text-uppercase">Login</a> / <a href="#" className="text-uppercase">Join</a>
							<ul className="custom-menu">
								
								<li><a href="#"><i className="fa fa-check"></i> <Link to="/orderreview" >CheckOut</Link></a></li>
								
								<li><a href="#"><i className="fa fa-unlock-alt"></i><Link to="/login"> Login</Link></a></li>
								<li><a href="#"><i className="fa fa-user-plus"></i><Link to="/signup"> Signup</Link></a></li>
							</ul>
						</li>
					
						<li className="header-cart dropdown default-dropdown">
							<a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
								<div className="header-btns-icon">
									<i className="fa fa-shopping-cart"></i>
									<span className="qty" id="qt">0</span>
								</div>
								<strong className="text-uppercase">My Cart:</strong>
								<br/>
								<span id="sub-total-cart">0</span>
							</a>
							<div className="custom-menu">
								<div id="shopping-cart">
									<div className="shopping-cart-list" id='shopping-cart' >
										{/* <div className="product product-widget">
											<div className="product-thumb">
												<img src="./img/thumb-product01.jpg" alt=""/>
											</div>
											<div className="product-body">
												<h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
												<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
											</div>
											<button className="cancel-btn"><i className="fa fa-trash"></i></button>
										</div>
										<div className="product product-widget">
											<div className="product-thumb">
												<img src="./img/thumb-product01.jpg" alt=""/>
											</div>
											<div className="product-body">
												<h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
												<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
											</div>
											<button className="cancel-btn"><i className="fa fa-trash"></i></button>
										</div> */}
									</div>
									<div className="shopping-cart-btns">
										<button className="main-btn">View Cart</button>
										<button className="primary-btn"><Link to="/orderreview" >CheckOut</Link> <i className="fa fa-arrow-circle-right"></i></button>
									</div>
								</div>
							</div>
						</li>
						

					
						<li className="nav-toggle">
							<button className="nav-toggle-btn main-btn icon-btn"><i className="fa fa-bars"></i></button>
						</li>
					
					</ul>
				</div>
			</div>
		
		</div>
    

        )
    }
}