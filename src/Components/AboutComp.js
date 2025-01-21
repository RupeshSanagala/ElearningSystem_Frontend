import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import constantData from '../Shared/Constant/MyImagesComp';
import { Outlet } from 'react-router-dom';
const AboutComp = () => {
  return (
    <div>
      <div className="text-center my-4">
        <h2>About Us</h2>
      </div>

      <div className="container">
        <p className="text-justify">
          In addition to IT education, our organization offers IT training, consulting, corporate training, application development, and digital marketing services. 
          Our young team of technology experts is committed to providing the best solutions to our customers. We specialize in equipping workforces with the skills 
          and knowledge needed to excel in today’s dynamic business landscape. By delivering comprehensive, tailored training solutions across various industries, 
          we empower individuals and organizations to reach their full potential. Our commitment to excellence and passion for learning drive us to continuously 
          upgrade our performance and deliver top-notch training programs that achieve significant results.
        </p>
      </div>

      <div className="container text-center my-5">
        <h3>Our Mission, Vision, and Values</h3>
      </div>

      <div className="container">
        <div className="row text-center">
         
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img 
                src={constantData.mission} 
                alt="Mission" 
                className="card-img-top" 
                style={{ height: '250px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Mission</h5>
                <p className="card-text">
                  To provide the best quality IT training to our clients with the understanding of industry requirements, the latest technology, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>

         
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img 
                src={constantData.purpose} 
                alt="Purpose" 
                className="card-img-top" 
                style={{ height: '250px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Purpose</h5>
                <p className="card-text">
                  To transform and empower the clients using our effective and excellent training techniques, and to become a leader in the training industry.
                </p>
              </div>
            </div>
          </div>

          {/* Values Card */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img 
                src={constantData.values} 
                alt="Values" 
                className="card-img-top" 
                style={{ height: '250px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Values</h5>
                <p className="card-text">
                  Integrity, Efficiency, Responsibility, and Continuous Growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
