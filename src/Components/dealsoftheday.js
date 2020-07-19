import React, { Component} from 'react'
import ban from '../img/banner14.jpg'
import product1 from '../img/product01.jpg'
import product2 from '../img/product02.jpg'
import product3 from '../img/product03.jpg'
import product6 from '../img/product06.jpg'
import {add} from './addtocart'
import {view} from './addtocart'
import {Link} from 'react-router-dom'
export default class extends Component{
    render(){
    
        return (
        <div className="section">
	
		<div className="container">
		
			<div className="row">
			
				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Deals Of The Day</h2>
						<div className="pull-right">
							<div className="product-slick-dots-1 custom-dots"></div>
						</div>
					</div>
				</div>
		
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="banner banner-2">
						<img src={ban} alt="" />
						<div className="banner-caption">
							<h2 className="white-color">NEW<br/>COLLECTION</h2>
							
						</div>
					</div>
				</div>
			
				<div className="col-md-9 col-sm-6 col-xs-6">
					<div className="row">
						<div id="product-slick-1" className="product-slick">
						
							<div className="product product-single">
								<div className="product-thumb">
								
									
								<a ><button onClick={()=>view(["DB1","Bag","700",{product1}])}  className="main-btn quick-view"><i className="fa fa-search-plus"></i> <Link to="/quickview"> QUICKVIEW</Link></button></a>	
									<img src={product1} alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">700 PKR</h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Bag</a></h2>
									<div className="product-btns">
						
											<button className="primary-btn add-to-cart" id="addtocart" onClick={()=>add(["DB1","Bag","700",{product1}])}><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
					
							<div className="product product-single">
								<div className="product-thumb">
									
									
	<a ><button onClick={()=>view(["DW1","Watch","650",{product2}])}  className="main-btn quick-view"><i className="fa fa-search-plus"></i> <Link to="/quickview"> QUICKVIEW</Link></button></a>	
									<img src={product2} alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">650 PKR</h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Watch</a></h2>
									<div className="product-btns">
										
										<button className="primary-btn add-to-cart" id="addtocart" onClick={()=>add(["DW2","Watch","650",{product2}])}><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
						
							<div className="product product-single">
								<div className="product-thumb">
								
									
									<a ><button onClick={()=>view(["DW","Wallet","550",{product3}])}  className="main-btn quick-view"><i className="fa fa-search-plus"></i> <Link to="/quickview"> QUICKVIEW</Link></button></a>	
									<img src={product3} alt="" />
								</div>
								<div className="product-body">
									<h3 className="product-price">500 PKR</h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Wallet</a></h2>
									<div className="product-btns">
										
										<button className="primary-btn add-to-cart" id="addtocart" onClick={()=>add(["DW1","Wallet","500",{product3}])}><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
						
							<div className="product product-single">
								<div className="product-thumb">
								
									
									<a ><button onClick={()=>view(["DB3","Bag","750",{product6}])}  className="main-btn quick-view"><i className="fa fa-search-plus"></i> <Link to="/quickview"> QUICKVIEW</Link></button></a>	
									<img src={product6} alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">750 PKR </h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Bags</a></h2>
									<div className="product-btns">
									
										<button className="primary-btn add-to-cart" id="addtocart" onClick={()=>add(["DB2","Bag","750",{product6}])}><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
						
						</div>
					</div>
				</div>
			
			</div>
            </div>
</div>
    )
    
    }
    
    }