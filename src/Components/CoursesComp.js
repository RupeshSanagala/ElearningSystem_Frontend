import React from "react";
import { Link, Outlet } from "react-router-dom";

const CoursesComp = () => {
  return (
    <div className="container mt-4 text-center">
      {/* <h1>Courses</h1>
      <b>Select a course to learn more</b><br></br>
      */}
        
          {/* <Link to="web-development" className="btn btn-danger">
            Web Development
          </Link>{" "}
        
       
          <Link to="data-science" className="btn btn-danger">
            Data Science
          </Link>{" "}
        
       
          <Link to="machine-learning" className="btn btn-danger">
            Machine Learning
          </Link>{" "}
        
      
          <Link to="graphic-design" className="btn btn-danger">
            Graphic Design
          </Link> */}
       
      <div className="mt-4">
        <Outlet /> {/* This renders the selected subcomponent */}
      </div>
    </div>
  );
};

export default CoursesComp;

