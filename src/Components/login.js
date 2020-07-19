import React, { Component} from "react";
import MyHeader from './header';
import MyFooter from './footer';

import Navigation from './navigation'
import {Link} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

export default class extends Component{
    render(){
return (
  
<MDBContainer>
<MyHeader/>
<Navigation/>
  <MDBRow >
 
    <MDBCol md="6" >
    <div>
     <h3>Welcome to SabKuch, Please Login.</h3>
    
     </div>
      <form>
        {/* <p className="h5 text-center mb-4">Sign in</p> */}
        <div className="grey-text">
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Type your password" icon="lock" group type="password" validate />
        </div>
        <div className="text-left">
          <MDBBtn style={{float:'left'}} style={{background:'Coral'}}>Login</MDBBtn>
          &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;    &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;    &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;
           &nbsp;
            &nbsp;
             &nbsp;
           <a  ><Link to="/signup"> New Member, Signup</Link></a>
        </div>
    
      </form>
    </MDBCol>
  </MDBRow>
  <MyFooter/>
</MDBContainer>
);}
}