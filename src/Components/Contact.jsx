import React from "react";
import Form from "./Form";

function Contact() {
  return (<div className="container contactContainer">
    <div className="row full">
      <div className="col-md-6">
        <div>
          <h1>
            Contact
          </h1>
          <p>Looking forward to hearing from you</p>

          <h4>Phone</h4>
          <p>123-456-7890</p>

          <h4>Email</h4>
          <p>info@mysite.com</p>
        </div>
      </div>
      <div className="col-md-6">
        <Form/>
      </div>
    </div>
  </div>);
}

export default Contact;
