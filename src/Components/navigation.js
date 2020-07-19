import React, { Component} from 'react'
import shoes from '../img/banner06.jpg'
import watch from '../img/banner08.jpg'
import ladiessuit from '../img/ladiesDressbanner.jpg'
import Jewellery from '../img/jewellerybanner.jpg'
import mencloths from '../img/gentsbanner.jpg'
import phonesbanner from '../img/phonesbanner.png'
import acc from '../img/mobileacceroriesbanner.png'
import {Link} from 'react-router-dom'


export default class extends Component{
	state = {
		
		
		showMenu: this.props.mystate 
	
	
	}
	
	

	toggleMenu = () => {
	//	alert(!this.state.showMenu)
	  this.setState({
		showMenu: !this.state.showMenu
	  })
	}
    render(){
		const showOnClick = this.state.showMenu ? 'open' :'';
        return(
<div>
    <div id="navigation">
	
		<div className="container">
			<div id="responsive-nav">
			
				<div  className="category-nav show-on-click">
					<span onClick={this.toggleMenu} className="category-header">Categories <i className="fa fa-list"></i></span>
					<ul  className={`category-list ${showOnClick}`}>
						<li className="dropdown side-dropdown">
							<a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Women’s Fashion <i className="fa fa-angle-right"></i></a>
							<div className="custom-menu">
								<div className="row">
									<div className="col-md-3">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img src={shoes} alt=""/>
												<div className="banner-caption text-center">
													<h3 style={{color:'coral'}} className="white-color text-uppercase">Shoes</h3>
												</div>
											</a>
											<hr/>
										</div>
										<ul className="list-links">
											<li>
												<h3  className="list-links-title">Shoes</h3></li>
												<Link to="/casual"><li >CASUAL-FOOTWARE</li></Link>
												<Link to="/sandals"><li >SANDALS</li></Link>
												<Link to="/peeptoe"><li >PEEP TOE</li></Link>
												<Link to="/pumps"><li >PUMPS</li></Link>
												
										</ul>
									</div>
									<div className="col-md-3">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img src={watch} alt=""/>
												<div className="banner-caption text-center">
													<h3 style={{color:'coral'}} className="white-color text-uppercase">Watches</h3>
												</div>
											</a>
										</div>
										<hr/>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Watches</h3></li>
											<Link to="/aquatime"><li >AQUA-TIME</li></Link>
											<Link to="/dior"><li >DIOR</li></Link>
											<Link to="/phulun"><li >Phulun</li></Link>
											<Link to="/coupleWatches"><li >Couple Watches</li></Link>
											
										</ul>
									</div>
									<div className="col-md-3">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img height="72px" src={ladiessuit} alt=""/>
												<div className="banner-caption text-center">
													<h3 style={{color:'coral'}} className="white-color text-uppercase">Cloths</h3>
												</div>
											</a>
										</div>
										<hr/>
											<ul className="list-links">
											<li>
												<h3 className="list-links-title">Dresses</h3></li>
											<Link to="/unstich"><li >Unstiched </li></Link>
											<Link to="/kurtis"><li >Kurtis</li></Link>
											<Link to="/emlawn"><li >Embroidered Lawn</li></Link>
											<Link to="/bridaldresses"><li >Bridal Dresses</li></Link>
											<Link to="/bottomtights"><li >Bottom&Tights</li></Link>
											
										</ul>
									</div>
									<div className="col-md-3">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img height="72px" src={Jewellery} alt=""/>
												<div className="banner-caption text-center">
													<h3 style={{color:'coral'}} className="white-color text-uppercase">Jewellery</h3>
												</div>
											</a>
										</div>
										<hr/>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Jewellery</h3></li>
											<Link to="/bracelets"><li >Bracelets </li></Link>
											<Link to="/earrings"><li >Ear Rings</li></Link>
											<Link to="/rings"><li >Rings</li></Link>
											
										</ul>
									</div>
								
								</div>
							</div>
						</li>
						<li className="dropdown side-dropdown">
							<a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Men’s Fashion <i className="fa fa-angle-right"></i></a>
							<div className="custom-menu">
								<div className="row">
									{/* <div className="col-md-4">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img src={shoes} alt=""/>
												<div className="banner-caption text-center">
													<h3 style={{color:'coral'}} className="white-color text-uppercase">SHOES</h3>
												</div>
											</a>
											<hr/>
										</div>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Shoes</h3></li>
											<li><a href="#">Sneakers</a></li>
											<li><a href="#">Slip-Ons&Loafers</a></li>
											<li><a href="#">Formal Shoes</a></li>
											<li><a href="#">Ankle Boots</a></li>
											<li><a href="#">Sandals</a></li>
										</ul>
									</div> */}
									<div className="col-md-6">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img src={watch} alt=""/>
												<div className="banner-caption text-center">
													<h3 style={{color:'coral'}} className="white-color text-uppercase">Watches</h3>
												</div>
											</a>
										</div>
										<hr/>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Watches</h3></li>
											<Link to="/rolexProduct"><li >ROLEX</li></Link>
											<Link to="/citizenProduct"><li >CITIZEN</li></Link>
											<Link to="/ckProduct"><li >CK</li></Link>
											<Link to="/strikeProduct"><li >STRIKE</li></Link>
											<Link to="/policeProduct"><li >POLICE & TISSOT</li></Link>
											
											
										</ul>
									</div>
									<div className="col-md-6">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img height="160px" src={mencloths} alt="" />
												<div className="banner-caption text-center">
													<h3 style={{color:'coral'}} className="white-color text-uppercase">Cloths</h3>
												</div>
											</a>
										</div>
										<hr/>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">CLOTHS</h3></li>
											<Link to="/shirt"><li >Shirts</li></Link>
											<Link to="/kurtas"><li >Kurtas</li></Link>
									
											
											
										</ul>
									</div>
								
								</div>
							</div>
						</li>
						<li className="dropdown side-dropdown"><a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Phones & Accessories <i className="fa fa-angle-right"></i></a>
							<div className="custom-menu">
								<div className="row">
									<div className="col-md-6">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img height="130px" src={phonesbanner} alt=""/>
												<div className="banner-caption text-center">
													<h3 style={{color:'coral'}} className="white-color text-uppercase">Phones</h3>
												</div>
											</a>
											<hr/>
										</div>
										<ul className="list-links">
											<li>
												<h3  className="list-links-title">Mobile Phones</h3></li>
											<Link to="/samsung"><li >Samsung</li></Link>
											<Link to="/apple"><li >Apple</li></Link>
											<Link to="/lg"><li >LG</li></Link>
											<Link to="/oppo"><li >Oppo</li></Link>
											<Link to="/infinix"><li >Infinix</li></Link>
										</ul>
									</div>
									<div className="col-md-6">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img src={acc} alt=""/>
												<div className="banner-caption text-center">
													<h3 style={{color:'coral'}} className="white-color text-uppercase">Accessories</h3>
												</div>
											</a>
										</div>
										<hr/>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Accessories</h3></li>
											<li><a href="#">Phone Cases</a></li>
											<li><a href="#">Power Banks</a></li>
											<li><a href="#">Cables</a></li>
											<li><a href="#">Chargers</a></li>
											<li><a href="#">HandsFree and HeadPhones</a></li>
										</ul>
									</div>
									
								
								</div>
							</div>
						</li>
					
						<li><a><Link to="/bags"><li >Bags</li></Link></a></li>
					
					</ul>
				</div>
			
				<div className="menu-nav">
					<span className="menu-header">Menu <i className="fa fa-bars"></i></span>
					<ul className="menu-list">
						<li><a  ><Link style={{color:'white'}} to="/"><li >Home</li></Link></a></li>
						<li><a href="#">Hot Deals</a></li>
						<li><a href="#">Sale On SabKuch</a></li>
						<li><a href="#">Track My Order</a></li>
					
					
					</ul>
				</div>
				
			</div>
		</div>
	
	</div>
	<div id="breadcrumb">
		<div class="container">
			<ul class="breadcrumb">
				<li><a href="#">Home</a></li>
				<li class="active">Products</li>
			</ul>
		</div>
	</div>
    </div>

        )
    }
}