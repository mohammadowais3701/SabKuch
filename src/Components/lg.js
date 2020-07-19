import React, { Component} from 'react'
import {add} from './addtocart'
import {view} from './addtocart'


import pro1 from '../img/MobilePhones/LG/1.jpg'
import pro2 from '../img/MobilePhones/LG/2.jpg'
import pro3 from '../img/MobilePhones/LG/3.jpg'
import pro4 from '../img/MobilePhones/LG/4.jpg'
import pro5 from '../img/MobilePhones/LG/5.jpg'
import pro6 from '../img/MobilePhones/LG/6.jpg'
import pro7 from '../img/MobilePhones/LG/7.jpg'
import pro8 from '../img/MobilePhones/LG/8.jpg'
import pro9 from '../img/MobilePhones/LG/1.jpg'
import pro10 from '../img/MobilePhones/LG/2.jpg'
import pro11 from '../img/MobilePhones/LG/3.jpg'
import pro12 from '../img/MobilePhones/LG/4.jpg'
import pro13 from '../img/MobilePhones/LG/5.jpg'
import pro14 from '../img/MobilePhones/LG/6.jpg'
import pro15 from '../img/MobilePhones/LG/7.jpg'
import pro16 from '../img/MobilePhones/LG/8.jpg'
import pro17 from '../img/MobilePhones/LG/1.jpg'
import pro18 from '../img/MobilePhones/LG/2.jpg'


import MyHeader from './header';
import Navigation from './navigation'

import Footer from './footer'
import {Link} from 'react-router-dom'
import './css/rangeSlider.css'
import BeautyStars from "beauty-stars";

 const products=[
	{	id:'LG1',
		pro:pro1,
		name:'LG G Flex2 16GB',
		rating:3,
		price:20000


	},
		{
		id:'LG2',
		pro:pro2,
		name:'LG G4 32GB',
		rating:0,
		price:25000


	},
		{
		id:'LG3',
		pro:pro3,
		name:'LG G5 Dual Sim',
		rating:0,
		price:30000


	},
		{
			id:'LG4',
		pro:pro4,
		name:'LG G6 Dual Sim',
		rating:0,
		price:55000


	},
		{
			id:'LG5',
		pro:pro5,
		name:'LG Nexus 5X 16GB',
		rating:0,
		// rating5:0,
		price:60000


	},
		{
			id:'LG6',
		pro:pro6,
		name:'LG V10',
		rating:0,
		// rating6:0,
		price:80000


	},
		{
			id:'LG7',
		pro:pro7,
		name:'LG V20',
		rating:4,
		// rating7:0,
		price:100000


	},
		{
			id:'LG8',
		pro:pro8,
		name:'LG V30+ 128GB',
		rating:0,
		// rating8:0,
		price:110000


	},
		{
			id:'LG9',
		pro:pro9,
		name:'LG G Flex2 16GB',
		rating:3,
		price:20000


	},

	{id:'LG10',
		pro:pro10,
	
		name:'LG G4 32GB',
		rating:0,
		price:25000


	},
	{
		id:'LG11',
		pro:pro11,
        name:'LG G5 Dual Sim',
		rating:0,
		price:30000


	},
	{
		id:'LG12',
		pro:pro12,
		name:'LG G6 Dual Sim',
		rating:0,
		price:55000


	},
		{
			id:'LG13',
		pro:pro13,
		name:'LG Nexus 5X 16GB',
		rating:0,
		// rating5:0,
		price:60000


	},
	{
		id:'LG14',
		pro:pro14,
		name:'LG V10',
		rating:0,
		// rating6:0,
		price:80000


	},
		{
			id:'LG15',
		pro:pro15,
		name:'LG V20',
		rating:4,
		// rating7:0,
		price:100000


	},
		{
			id:'LG16',
		pro:pro16,
		name:'LG V30+ 128GB',
		rating:0,
		// rating8:0,
		price:110000


	},
		{
			id:'LG17',
		pro:pro17,
				
		name:'LG G Flex2 16GB',
		rating:3,
		price:20000


	},
		{
			id:'LG18',
		pro:pro18,
		name:'LG G4 32GB',
		rating:0,
		price:25000


	},
		

]
var filteredProducts=[
	{	id:'LG1',
		pro:pro1,
		name:'LG G Flex2 16GB',
		rating:3,
		price:20000


	},
		{
		id:'LG2',
		pro:pro2,
		name:'LG G4 32GB',
		rating:0,
		price:25000


	},
		{
		id:'LG3',
		pro:pro3,
		name:'LG G5 Dual Sim',
		rating:0,
		price:30000


	},
		{
			id:'LG4',
		pro:pro4,
		name:'LG G6 Dual Sim',
		rating:0,
		price:55000


	},
		{
			id:'LG5',
		pro:pro5,
		name:'LG Nexus 5X 16GB',
		rating:0,
		// rating5:0,
		price:60000


	},
		{
			id:'LG6',
		pro:pro6,
		name:'LG V10',
		rating:0,
		// rating6:0,
		price:80000


	},
]

  
export default class extends Component{
	  state = { 
		  minvalue:0,
		  maxvalue:5000,
			  
	  p1value: products[0]['rating'],
	  p2value: products[1]['rating'],
	  p3value: products[2]['rating'] ,
	  p4value: products[3]['rating'],
	  p5value: products[4]['rating'],
	  p6value: products[5]['rating'],
	  p7value: products[6]['rating'],
	  p8value: products[7]['rating'],
	  p9value: products[8]['rating'],
	  p10value: products[9]['rating'],
	  p11value: products[10]['rating'],};
constructor(props){
		super(props);
		 this.filtered = this.filtered.bind(this);
	
	
	}
	
	forceUpdateHandler(){
    this.forceUpdate();
  };
	clear(){
	
		document.getElementById('price-min').innerHTML=0 +' PKR';
		document.getElementById('price-max').innerHTML=5000 +' PKR';
        

	
		
	

	}
	changeGender(id){
		
		document.getElementById('gender').innerHTML=document.getElementById(id).innerHTML;
	}
	changeSize(size){
		document.getElementById('size').innerHTML=document.getElementById(size).innerHTML;
	}
	
	filtered(j=0){
	
	var x=0;
	var total=document.getElementById('show').value;
								
					
								filteredProducts=[]
							if(j==0){	
							var	min=document.getElementById('price-min').innerHTML;
							var	max=document.getElementById('price-max').innerHTML;

								for (var i=0;i<products.length;i++){
									if(Number(products[i]['price'])>=Number(min.split(" ")[0]) && Number(products[i]['price']) <=Number(max.split(" ")[0]) && x<total){
									filteredProducts.push({
										name:products[i]['name'],
										pro:products[i]['pro'],
										rating:products[i]['rating'],
										price:products[i]['price']
									},)
									x++;
									}
								}
								}
								else{
								j=(j*6)-5;
									for (var i=j;i<products.length;i++){
									if(x<=total){
									filteredProducts.push({
										name:products[i]['name'],
										pro:products[i]['pro'],
										rating:products[i]['rating'],
										price:products[i]['price']
									},)
									x++;
									}
								}
									
								}
	
this.forceUpdate();
							}


    render(){
			
        return(
            <div>
	
            <MyHeader />
            <Navigation mystate={false} />
           < div className="section">
	
		<div className="container">
		
			<div className="row">
			
				<div id="aside" className="col-md-3">
				
					<div className="aside">
						<h3 className="aside-title">Shop by:</h3>
						
                           
						{/* <ul className="filter-list">
							<li><span className="text-uppercase">Size:</span></li>
							<li id="size"></li>
							
						</ul> */}

						<ul className="filter-list" >
							<li><span className="text-uppercase">Price:</span></li>
							MIN:
							<li id="price-min" value='0' ></li> &nbsp;
						MAX:
							<li  id="price-max" value="1">	</li>
							
						</ul>
                      

						
						<button onClick={this.clear} className="primary-btn">Clear</button>
						&nbsp; &nbsp;
						<button onClick={()=>this.filtered()} className="primary-btn">Filter</button>
					</div>
			
					<div>
					
						<h3 className="aside-title">Filter by Price
						<br/>
							<br/>
								
							<div id="priceslider" ></div>
						</h3>
					
					

					
					
					</div>
					
					
		
				

					<div className="aside">
					
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
		
					<div className="aside">
						{/* <h3 className="aside-title">Filter by Gender</h3>
						<ul className="list-links" >
							<li id="men"  onClick={() => this.changeGender('men')} ><a href="#" >Men</a></li>
							<li id="women"  onClick={() => this.changeGender('women')}><a href="#">Women</a></li>
						</ul> */}
					</div>
				
					<div className="aside">
						<h3 className="aside-title">Top Rated Product</h3>
		
						<div className="product product-widget">
							<div className="product-thumb">
								<img src={pro3} alt=""/>
							</div>
							<div className="product-body">
								<h2 className="product-name"><a href="#">Kurta</a></h2>
								<h3 className="product-price">700 PKR</h3>
								<div className="product-rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o empty"></i>
								</div>
							</div>
						</div>
				
						<div className="product product-widget">
							<div className="product-thumb">
								<img src={pro7} alt=""/>
							</div>
							<div className="product-body">
								<h2 className="product-name"><a href="#">Kurta</a></h2>
								<h3 className="product-price">600 PKR</h3>
								<div className="product-rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o empty"></i>
								</div>
							</div>
						</div>
						
					</div>
				
				</div>
				
				<div id="main" className="col-md-9">
			
					<div className="store-filter clearfix">
						
						<div className="pull-right">
							<div className="page-filter">
								<span className="text-uppercase">Show:</span>
								<select id="show" onChange={()=>this.filtered()} className="input">
										<option value="5">5</option>
										<option value="10">10</option>
										<option value="15">15</option>
									</select>
							</div>
							<ul className="store-pages">
								<li><span className="text-uppercase">Page:</span></li>
								<li onClick={()=>this.filtered(1)} ><a href="#1">1</a></li>
								<li onClick={()=>this.filtered(2)}><a href="#2">2</a></li>
								<li onClick={()=>this.filtered(3)}><a href="#3">3</a></li>
								
							</ul>
						</div>
					</div>
			
					<div id="store">
					
						<div className="row">
				{/* const products=[
	{
		pro:{pro1},
		name:'ROLEX',
		rating1:0,
		price:600


	}, */}
	<div>
	
		{filteredProducts.filter(product=>product).map(filteredproduct=>(
		
							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<div className="product-label">
								
										</div>
									<a ><button onClick={()=>view([filteredproduct.id,filteredproduct.name,filteredproduct.price,filteredproduct.pro])}  className="main-btn quick-view"><i className="fa fa-search-plus"></i> <Link to="/quickview"> QUICKVIEW</Link></button></a>	
										<img height="260px" src={filteredproduct.pro} alt=""/>
									</div>
									
									<div className="product-body">
										<h3 className="product-price">{filteredproduct.price} PKR </h3>
										<BeautyStars size={15} inactiveColor={"#DCDCDC"} activeColor={"Coral"} gap={8}
												value={Math.floor(Math.random()*6)}
												onChange={p1value => this.setState({p1value})}
     																						 /> 
										<h2 className="product-name"><a href="#">{filteredproduct.name}</a></h2>
										<div className="product-rating">
										 

										</div>
										<div className="product-btns">
											

											<button className="primary-btn add-to-cart" id="addtocart" onClick={()=>add([filteredproduct.id,filteredproduct.name,filteredproduct.price,filteredproduct.pro])}><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							
							</div> ))}
			 <div className="clearfix visible-sm visible-xs"></div>
			 
			 </div>
					

						</div>
				
					</div>
				
					<div className="store-filter clearfix">
						
						<div className="pull-right">
							
							<ul className="store-pages">
								<li><span className="text-uppercase">Page:</span></li>
								<li onClick={()=>this.filtered(1)} ><a href="#1">1</a></li>
								<li onClick={()=>this.filtered(2)}><a href="#2">2</a></li>
								<li onClick={()=>this.filtered(3)}><a href="#3">3</a></li>
								
							</ul>
						</div>
					</div>
				
				</div>
			
			</div>
		
		</div>
	
	</div>
	<Footer/>
    </div>


        )
    }

}