import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import {BrowserRouter as Router,Route} from "react-router-dom"
import {browserHistory,IndexRoute} from '@version/react-router-v3'

import MYPAGE from './Components/mainpage';
import ROLEXPRODUCT from './Components/products(Rolex)'
import CITIZENPRODUCT from './Components/products(citizen)'
import CKPRODUCT from './Components/products(ck)'
import STRIKEPRODUCT from './Components/products(strike)'
import POLICEPRODUCT from './Components/products(police)'
import LOGIN from './Components/login'
import SIGNUP from './Components/signup.js'
import ORDERREVIEW from './Components/OrderReview.js'
import WRITETOUS from './Components/writetous.js'
import QUICKVIEW from './Components/quickview.js'
import FAQ from './Components/faq.js'
import AQUATIME from './Components/aquatime.js'
import DIOR from './Components/diorProduct.js'
import PHULUN from './Components/phulunProducts.js'
import COUPLEWATCHES from './Components/coupleWatches.js'
import CASUAL from './Components/casualFootware.js'
import SANDALS from './Components/ladiesSandals.js'
import PEEPTOE from './Components/peeptoe.js'
import PUMPS from './Components/pumps.js'
import UNSTICH from './Components/Unstich.js'
import KURTIS from './Components/kurtis.js'
import EMLAWN from './Components/emlawn.js'
import BRIDAL from './Components/bottomtights.js'
import BOTTOM from './Components/bracelets.js'
import BRACELETS from './Components/bracelets.js'
import RINGS from './Components/rings.js'
import EARRINGS from './Components/earrings.js'
import SHIRTS from './Components/shirts.js'
import KURTAS from './Components/kurtas.js'
import SAMSUNG from './Components/samsung.js'
import APPLE from './Components/apple.js'
import LG from './Components/lg.js'
import OPPO from './Components/oppo.js'
import INFINIX from './Components/infinix.js'
import BAGS from './Components/bags.js'


class App extends Component {
    render() {
        return ( 
        <Router history={browserHistory}>
            <div>
   
        <Route path="/" exact component={MYPAGE}/>
        <Route path="/rolexProduct" component={ROLEXPRODUCT}/>
        <Route path="/citizenProduct" component={CITIZENPRODUCT}/>
        <Route path="/ckProduct" component={CKPRODUCT}/>
        <Route path="/strikeProduct" component={STRIKEPRODUCT}/>
        <Route path="/policeProduct" component={POLICEPRODUCT}/>
        <Route path="/aquatime" component={AQUATIME} />
         <Route path="/dior" component={DIOR} />
         <Route path="/phulun" component={PHULUN} />
          <Route path="/coupleWatches" component={COUPLEWATCHES} />
           <Route path="/casual" component={CASUAL} />
             <Route path="/sandals" component={SANDALS} />
              <Route path="/peeptoe" component={PEEPTOE} />
              <Route path="/pumps" component={PUMPS} />
              <Route path="/unstich" component={UNSTICH} />
            <Route path="/kurtis" component={KURTIS} />
               <Route path="/emlawn" component={EMLAWN} />
               <Route path="/bridaldresses" component={BRIDAL} />
               <Route path="/bottomtights" component={BOTTOM} />
                <Route path="/bracelets" component={BRACELETS} />
                 <Route path="/rings" component={RINGS} />
   <Route path="/earrings" component={EARRINGS} />
                  <Route path="/shirt" component={SHIRTS} />
                  <Route path="/kurtas" component={KURTAS} />
                  <Route path="/samsung" component={SAMSUNG} />
                  <Route path="/apple" component={APPLE} />
                  <Route path="/lg" component={LG} />
                  <Route path="/oppo" component={OPPO} />
                  <Route path="/infinix" component={INFINIX} />
                    <Route path="/bags" component={BAGS} />
        <Route path="/login" component={LOGIN}/>
        <Route path="/signup" component={SIGNUP} />
        <Route path="/orderreview" component={ORDERREVIEW} />
        <Route path="/writetous" component={WRITETOUS} />
         <Route path="/quickview" component={QUICKVIEW} />
         
          
          <Route path="/faq" component={FAQ} />
          
    
            </div>
        
</Router>
        );
    }
}

export default App;