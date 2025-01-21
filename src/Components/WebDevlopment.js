import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import constantData from "../Shared/Constant/MyImagesComp";
import HttpService from "../Shared/service/HttpService";

const WebDevelopment = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  // Predefined list of images
  const images = [
    constantData.Angular,
    constantData.react,
    constantData.Vuejs,
    constantData.nodejs,
    constantData.JavaScript
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await HttpService.get("/Course"); // Fetch all courses
        const webDevCourses = response.data.filter(
          (course) => course.category === "Web Development"
        );
        setCourses(webDevCourses); // Set only Web Development courses
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
      <h2 className="text-center mb-4">Web Development Courses</h2>
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

export default WebDevelopment;
