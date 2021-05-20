import React from "react";

function Form() {
  return (<div className="container half">
    <form className="" action="/contact" method="post">
      <div className="container">
        <div className="row formRow">
          <div className="col-md-6 formInput">
            <label for="fName">First Name</label>
            <input type="text" id="fName"/></div>
          <div className="col-md-6 formInput">
            <label for="lName">Last Name</label>
            <input type="text" id="lName"/></div>
        </div>
        <div className="row formRow">
          <div className="col-md-6 formInput">
            <label for="email">Email*</label>
            <input type="text" required="true" id="email"/></div>
          <div className="col-md-6 formInput">
            <label for="subject">Subject</label>
            <input type="text" id="subject" contentEditable="true"/></div>
        </div>
        <div className="row formRow">
          <div className="col-md-8 formInput">
            <label for="msg">Message</label>
            <textarea name="name" rows="5" cols="80" id="msg"></textarea>
          </div>
          <div className="col-md-4 formInput align-self-end">
            <button className="btn" type="submit" name="button">
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>);
}

export default Form;
