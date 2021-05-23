import React from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education"
import Skills from "./Skills"

function Resume() {
  return (<div>
    <WorkExperience/>
    <Education/>
    <Skills/>
  </div>);
}

export default Resume;
