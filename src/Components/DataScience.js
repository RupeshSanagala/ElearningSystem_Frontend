import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import constantData from "../Shared/Constant/MyImagesComp";
import HttpService from "../Shared/service/HttpService";

const DataScience = () => {
  const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);
  const images = [
     constantData.python,
    constantData.ml,
   constantData.dataCleaning,
   constantData.datavisualization, 
   constantData.statistics,
   constantData.deepLearning
  ];
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await HttpService.get("/Course"); // Fetch all courses
        const DataScienceCourses = response.data.filter(
          (course) => course.category === "Data Science"
        );
        setCourses(DataScienceCourses); // Set only Web Development courses
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError("Failed to fetch courses. Please try again later.");
      }
    };

    fetchCourses();
  }, []);

  const handleEnroll = (courseTitle) => {
    alert(`Successfully enrolled in ${courseTitle}!`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Data Science Courses</h2>
      {error ? (
        <p className="text-danger text-center">{error}</p>
      ) : (
        <div className="row">
          {courses.map((course, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={images[index % images.length]} // Cycle through images list
                  alt={course.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title"><b>{course.title}</b></h5>
                  <p className="card-text">{course.description}</p>
                  <p className="card-text">Price: <b>₹{course.price}</b></p>
                  <button
                    className="btn btn-success mt-auto"
                    onClick={() => handleEnroll(course.title)}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataScience;

