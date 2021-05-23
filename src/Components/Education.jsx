import React from "react";
import TimeLine from "./TimeLine"

function Education() {
  return (<div className="container workExperience">
    <hr/>
    <div className="row">
      <div className="col-md-6">
        <h2>Education</h2>
      </div>
      <div className="col-md-6">
        <TimeLine date="2015 - 2017" heading="Establishment Name | Master’s Degree"/>
        <TimeLine date="2012 - 2015" heading="Establishment Name | Bachelor's Degree"/>
      </div>
    </div>
  </div>);
}

export default Education;
