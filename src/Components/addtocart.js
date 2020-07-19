import $ from 'jquery';
import {load} from './quickview.js';
let cart=[]
let storage=JSON.parse(localStorage.getItem('products'));





try{
	
for ( var i=0;i<storage.length;i++){
  cart.push({id:storage[i]['id'],name:storage[i]['name'],price:storage[i]['price'],image:storage[i]['image'],qty:storage[i]['qty']})


}

}
catch(Exception){

}
setTimeout(setProducts, 1000);

export function view(product){
    
load(product);


}

export function add(product){


  additems(product);




}
export function additems(product){

var total=document.getElementById('sub-total-cart');

const count=cart.filter((obj)=>obj.id===product[0]).length;
if(count==0){
	  document.getElementById("qt").innerHTML=Number(document.getElementById("qt").innerHTML)+1;
cart.push({id:product[0],name:product[1],price:product[2],image:product[3],qty:count+1})}
else{
	cart.filter(function(obj){
		if(obj.id===product[0]){
		obj.qty=obj.qty+1;
		}
	});
	
	}

localStorage.setItem("products",JSON.stringify(cart));
total.innerHTML=Number(total.innerHTML)+Number(product[2])
localStorage.setItem('total-price',Number(total.innerHTML))


setProducts();

}
export function setProducts(){
try{
document.getElementById('sub-total-cart').innerHTML=localStorage.getItem('total-price');


let content=document.getElementsByClassName('shopping-cart-list');

if(content[0].innerHTML!==undefined)
content[0].innerHTML='';
for(var i=0; i<cart.length;i++){
content[0].innerHTML+=`<div class="product product-widget">
											<div class="product-thumb">
												<img src=${cart[i].image} alt=""/>
											</div>
											<div class="product-body">
												<h3 class="product-price">${cart[i].price} </h3><span className="qty">x${cart[i].qty}</span></h3>
												<h2 class="product-name"><a href="#">${cart[i].name}</a></h2>
											</div>
											<button class="cancel-btn" data-id=${cart[i].id} ><i class="fa fa-trash" ></i></button>
										</div>`;
										


}

$(content[0]).on('click','.cancel-btn',function(event){

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
setProducts();
	
});
}
catch(ex){}
// var elements=document.getElementsByClassName('fa-trash');
// for(var i=0; i<cart.length;i++){
//   elements[i].on('click','button',removeItems())
// }

}
