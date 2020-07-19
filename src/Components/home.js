import React, { Component} from 'react'

import ban1 from '../img/banner01.jpg'
import ban2 from '../img/banner02.jpg'
import ban3 from '../img/banner03.jpg'

export default class extends Component{
render(){

return (
<div   id="home">

    <div  className="container">
 
        <div className="home-wrap">
 
            <div id="home-slick" >
            
                <div  className="banner banner-1">
                    <img style={{height: "306px"}} src={ban1} alt=""/>
                    <div className="banner-caption text-center">
                        <h1>Bags sale</h1>
                        <h3 className="white-color font-weak">Up to 50% Discount</h3>
                        <button className="primary-btn">Shop Now</button>
                    </div>
                </div>
                
                <div  className="banner banner-1">
                    <img style={{height: "306px"}}  src={ban2} alt=""/>
                    <div className="banner-caption">
                        <h1 className="primary-color">HOT DEAL<br/><span className="white-color font-weak">Up to 50% OFF</span></h1>
                        <button className="primary-btn">Shop Now</button>
                    </div>
                </div>
           
                <div className="banner banner-1">
                    <img style={{height: "306px"}}  src={ban3} alt=""/>
                    <div className="banner-caption">
                        <h1 className="white-color">New Product <span>Collection</span></h1>
                        <button className="primary-btn">Shop Now</button>
                    </div>
                </div>
               
            </div>
       
        </div>
     
    </div>


</div>
/*<div className="slider-area">
    <div className="slider_img">
    <img style={{height: "306px"}} src={ban1} alt=""/>
    <img style={{height: "306px"}}  src={ban2} alt=""/>
    <img style={{height: "306px"}}  src={ban3} alt=""/>
    </div>

</div>*/
)

}

}