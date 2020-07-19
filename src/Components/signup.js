import React, { Component} from "react";
import MyHeader from './header';
import MyFooter from './footer';
import Navigation from './navigation'
import {Link} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const FormPage = () => {
return (
<MDBContainer>
<MyHeader/>
<Navigation/>
  <MDBRow>
    <MDBCol md="6">
    <div>
     <h3>Create your account for SabKuch</h3>
    
     </div>
      <form>
 
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
            error="wrong" success="right" />
          <MDBInput label="Your Shipping Address" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your password" icon="lock" group type="password" validate />
        </div>
        <div >
          <MDBBtn color="primary">Register</MDBBtn>&nbsp;  &nbsp; &nbsp;   &nbsp; &nbsp;    &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;    &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;   &nbsp; &nbsp;
           &nbsp;
            &nbsp;
             &nbsp;
              <a  ><Link to="/login"> Already a member,signIn</Link></a>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
    <MyFooter/>
</MDBContainer>
);
};

export default FormPage;