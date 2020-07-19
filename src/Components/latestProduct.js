import React, { Component} from 'react'
import pro1 from '../img/product01.jpg'
import pro2 from '../img/product02.jpg'
import pro3 from '../img/product03.jpg'
import pro4 from '../img/product04.jpg'
export default class extends Component{
    render(){
    
    return (

        <div className="section">

		<div className="container">
		
			<div className="row">
			
				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Latest Products</h2>
					</div>
				</div>
			
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src={pro1} alt="" />
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50</h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
			
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src={pro2} alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src={pro3} alt="" />
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src={pro4} alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50</h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
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