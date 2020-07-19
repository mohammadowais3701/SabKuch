import React, { Component } from 'react'
import ReactDOM from 'react-dom';




import MyHeader from './header';
import Navigation from './navigation'
import Home from './home'
import Deals from './dealsoftheday'
import Lproduct from './latestProduct'
import Footer from './footer'


class mainPage extends Component {
    
    render() {
        return ( 
        <div>
        
            <MyHeader />
            <Navigation mystate={true} />
            <Home/>
            <Deals/>
           
            <Footer/>

</div>
        );
    }
}

export default mainPage;