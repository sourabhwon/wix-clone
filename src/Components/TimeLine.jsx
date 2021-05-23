import React from "react";

function TimeLine(param) {
  return (<div className="container timeLine">
    <div className="row">
      <div className="col-md-3">
        <p>{param.date}</p>
      </div>
      <div className="col-md-9">
        <h5>{param.heading}</h5>
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
      </div>

    </div>
  </div>);
}
export default TimeLine;
