import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import MyHeader from './header';
import Navigation from './navigation'
import Footer from './footer'
class faq extends Component {

    render() {
        return ( 
        <div >
        
            <MyHeader />
            <Navigation />
           


<div class="container">
<h3>Online Store FAQ</h3>
<br/>
<br/>
<h4>1.    Q: How can I order</h4>
<h5 >A: You can order easily using our online platform. When you find a product you need, you can add it to cart, login and go through the ordering process. After the order is ready, you will receive order summary to your email.</h5>
</div>
<div class="container">
<h4>2.    Q: Why should I buy online?</h4>
<h5 >A: Speeding up the process. By ordering online you will you will get prices faster and you will be able to go through order confirmation and payment process much faster. This could save days of your time.
</h5>
</div>
<div class="container">
<h4>3.   Q: How can I change delivery address?</h4>
<h5 >A: Sign in to your account and go to “my account”. On “my account” you can change all your contact information.</h5>
</div>
<div class="container">
<h4>4.  Q: Can I cancel my order?</h4>
<h5 >A: If you want to cancel your order, please do so as soon as possible. If we have already processed your order, you need to contact us and return the product.</h5>
</div>
            <Footer/>

</div>
        );
    }
}

export default faq;