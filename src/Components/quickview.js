import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {add} from './addtocart'
import {view} from './addtocart'

import $ from 'jquery';
import MyHeader from './header';
import Navigation from './navigation'
// import Home from './home'
// import Deals from './dealsoftheday'
// import Lproduct from './latestProduct'
import Footer from './footer'

let myproduct=[];
export function load(product){

myproduct=product;
}
function showUI(product){
var ui=document.getElementById('quick');

ui.innerHTML="";
ui.innerHTML=`
<div class="col-md-6">
						<div id="product-main-view">
							<div class="product-view">
								<img src=${product[3]} alt="" />
							</div>
							
						
							
						</div>
					</div>
<div class="col-md-6" >
						<div class="product-body">
							
							<h2 class="product-name">${product[1]}</h2>
							<h3 class="product-price">${product[2]} PKR</h3>
						
							<h4><b>BRAND</b>:${product[1]}</h4>
							<h5>Launched in 1956, the Day-Date made its debut as the first waterproof and self-winding chronometer wristwatch to offer a modern calendar with an instantaneous day display, spelt out in full in a window on the dial, in addition to the date.</h5>
						

							<div class="product-btns">
								
								<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
							
							</div>
						</div>
					</div>`
$(ui).on('click','.add-to-cart',function(event){
add(product);
	
	
});
  // additems(product);

}
class quickview extends Component {
    componentDidMount(){
        showUI(myproduct);
    }
    render() {
        return ( 
        <div>
        
            <MyHeader />
            <Navigation />
           




	<div  className="section">

		<div className="container">

			<div className="row">

				<div id='quick' className="product product-details clearfix" >
					
				

				</div>
		
			</div>

		</div>
	
	</div>
            <Footer/>

</div>
        );
    }
}

export default quickview;