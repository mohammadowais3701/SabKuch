import React, { Component} from 'react'
import pro1 from '../img/Watches/Boys/Strike/1.jpg'
import pro2 from '../img/Watches/Boys/Strike/4.jpg'
import pro3 from '../img/Watches/Boys/Strike/8.jpg'
import pro4 from '../img/Watches/Boys/Strike/11.jpg'
import pro5 from '../img/Watches/Boys/Strike/13.jpg'
import pro6 from '../img/Watches/Boys/Strike/16.jpg'
import pro7 from '../img/Watches/Boys/Strike/19.jpg'
import pro8 from '../img/Watches/Boys/Strike/24.jpg'
import pro9 from '../img/Watches/Boys/Strike/27.jpg'
import MyHeader from './header';
import Navigation from './navigation'
import Footer from './footer'
import {Link} from 'react-router-dom'
import $ from 'jquery';
import {setProducts} from './addtocart'
function refresh(){
let storage=JSON.parse(localStorage.getItem('products'));
	let cart=[];
	var con=document.getElementById('cart-content')
	con.innerHTML="";
	
	for ( var i=0;i<storage.length;i++){
  cart.push({id:storage[i]['id'],name:storage[i]['name'],price:storage[i]['price'],image:storage[i]['image'],qty:storage[i]['qty']})


}

con.innerHTML="";
for ( var i=0;i<cart.length;i++){
con.innerHTML+=`<tr>
										<td class="thumb"><img src=${cart[i].image} alt="" /></td>
										<td class="details">
											<a href="#">${cart[i].name}</a>
											
										</td>
										<td class="price text-center"><strong>${cart[i].price}</strong><br/></td>
										<td class="qty text-center"><input class="input" id="qty-class" data-id=${cart[i].id} type="number" value="${cart[i].qty}"/></td>
										<td class="total text-center"><strong class="primary-color">${cart[i].qty*cart[i].price}</strong></td>
										<td class="text-right"><button class="main-btn icon-btn" data-id=${cart[i].id}><i class="fa fa-close"></i></button></td>
									</tr>`

}
$(con).on('click','.main-btn',function(event){

	var id=$(this).attr('data-id');
	cart=cart.filter(function(product){
		if(product.id===id){
			
			document.getElementById('sub-total-cart').innerHTML=Number(document.getElementById('sub-total-cart').innerHTML)-Number(product.qty)*(Number(product.price));
		}
return product.id!==id;

});
localStorage.removeItem('products')
localStorage.setItem("products",JSON.stringify(cart));
localStorage.setItem('total-price',Number(document.getElementById('sub-total-cart').innerHTML))

document.getElementById("qt").innerHTML=Number(JSON.parse(localStorage.products).length);
con.innerHTML="";
for ( var i=0;i<cart.length;i++){
con.innerHTML+=`<tr>
										<td class="thumb"><img src=${cart[i].image} alt="" /></td>
										<td class="details">
											<a href="#">${cart[i].name}</a>
											
										</td>
										<td class="price text-center"><strong>${cart[i].price}</strong><br/></td>
										<td class="qty text-center"><input class="input" id="qty-class" data-id=${cart[i].id} type="number" value="${cart[i].qty}"/></td>
										<td class="total text-center"><strong class="primary-color">${cart[i].qty*cart[i].price}</strong></td>
										<td class="text-right"><button class="main-btn icon-btn" data-id=${cart[i].id}><i class="fa fa-close"></i></button></td>
									</tr>`

}
setProducts();
try{
(document.getElementsByClassName('sub-total'))[0].innerHTML=localStorage.getItem('total-price');
(document.getElementsByClassName('tot'))[0].innerHTML=Number((document.getElementsByClassName('sub-total'))[0].innerHTML)+Number(document.getElementById('shipping').innerHTML);}
catch(ex){}
//refresh();	
});

$(con).on('change','.input',function(event){
	
	var id=$(this).attr('data-id');
	cart=cart.filter(function(product){
		if(product.id===id){
			
			document.getElementById('sub-total-cart').innerHTML=(Number(document.getElementById('sub-total-cart').innerHTML)-Number(product.qty)*(Number(product.price)))+(event.target.value*Number(product.price));
			product.qty=event.target.value;
		
		}
		return cart


});
localStorage.removeItem('products')
localStorage.setItem("products",JSON.stringify(cart));
localStorage.setItem('total-price',Number(document.getElementById('sub-total-cart').innerHTML))

document.getElementById("qt").innerHTML=Number(JSON.parse(localStorage.products).length);
con.innerHTML="";
for ( var i=0;i<cart.length;i++){
con.innerHTML+=`<tr>
										<td class="thumb"><img src=${cart[i].image} alt="" /></td>
										<td class="details">
											<a href="#">${cart[i].name}</a>
											
										</td>
										<td class="price text-center"><strong>${cart[i].price}</strong><br/></td>
										<td class="qty text-center"><input class="input" id="qty-class" data-id=${cart[i].id} type="number" value="${cart[i].qty}"/></td>
										<td class="total text-center"><strong class="primary-color">${cart[i].qty*cart[i].price}</strong></td>
										<td class="text-right"><button class="main-btn icon-btn" data-id=${cart[i].id}><i class="fa fa-close"></i></button></td>
									</tr>`

}
setProducts();
try{
(document.getElementsByClassName('sub-total'))[0].innerHTML=localStorage.getItem('total-price');
(document.getElementsByClassName('tot'))[0].innerHTML=Number((document.getElementsByClassName('sub-total'))[0].innerHTML)+Number(document.getElementById('shipping').innerHTML);}
catch(ex){}
	
});
try{
(document.getElementsByClassName('sub-total'))[0].innerHTML=localStorage.getItem('total-price');
(document.getElementsByClassName('tot'))[0].innerHTML=Number((document.getElementsByClassName('sub-total'))[0].innerHTML)+Number(document.getElementById('shipping').innerHTML);}
catch(ex){}
	}
export default class extends Component{
	constructor(props){
		super(props);
	
	
	
	}

	componentDidMount(){
	
	 refresh();
	}
    render(){
        return(
            <div>
            <MyHeader/>
            <Navigation/>
<div className="col-md-12">
						<div className="order-summary clearfix">
							<div className="section-title">
								<h3 className="title">Order Review</h3>
							</div>
							<table className="shopping-cart-table table">
								<thead>
									<tr>
										<th>Product</th>
										<th></th>
										<th className="text-center">Price</th>
										<th className="text-center">Quantity</th>
										<th className="text-center">Total</th>
										<th className="text-right"></th>
									</tr>
								</thead>
								<tbody className="cart-contents" id='cart-content'>
									{/* <tr>
										<td className="thumb"><img src="./img/thumb-product01.jpg" alt="" /></td>
										<td className="details">
											<a href="#">Product Name Goes Here</a>
											<ul>
												<li><span>Size: XL</span></li>
												<li><span>Color: Camelot</span></li>
											</ul>
										</td>
										<td className="price text-center"><strong>$32.50</strong><br/><del className="font-weak"><small>$40.00</small></del></td>
										<td className="qty text-center"><input className="input" type="number" value="1"/></td>
										<td className="total text-center"><strong className="primary-color">$32.50</strong></td>
										<td className="text-right"><button className="main-btn icon-btn"><i className="fa fa-close"></i></button></td>
									</tr>
									 */}
								</tbody>
								<tfoot>
									<tr>
										<th className="empty" colspan="3"></th>
										<th>SUBTOTAL</th>
										<th colspan="2" className="sub-total">0</th>
									</tr>
									<tr>
										<th className="empty" colspan="3"></th>
										<th>SHIPING</th>
										<td colspan="2" id="shipping">150</td>
									</tr>
									<tr>
										<th className="empty" colspan="3"></th>
										<th>TOTAL</th>
										<th colspan="2" className="total tot">0</th>
									</tr>
								</tfoot>
							</table>
							<div className="pull-right">
								<button className="primary-btn">Place Order</button>
							</div>
						</div>

					</div>
            <Footer/>
           
    </div>


        )
    }

}