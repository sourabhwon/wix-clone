import React from "react";
import TimeLine from "./TimeLine"

function WorkExperience() {
  return (<div className="container workExperience">
    <h1>Resume</h1>
    <div className="row">
      <div className="col-md-6">
        <h2>Work Experince</h2>
      </div>
      <div className="col-md-6">
        <TimeLine date="2020 - Present" heading="Editor"/>
        <TimeLine date="2018 - 2020" heading="Writer at Large"/>
        <TimeLine date="2017 - 2018" heading="Intern"/>
      </div>
    </div>
  </div>);
}

export default WorkExperience;
