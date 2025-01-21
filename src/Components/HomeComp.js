import React from 'react';
import constantData from '../Shared/Constant/MyImagesComp';
import { Carousel } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
const HomeComp = () => {
  return (
    <div>
     
      <div className="container-fluid p-0">
   
   <Carousel>
     <Carousel.Item>
       <img
         src={constantData.student}
         className="d-block w-100"
         alt="Student Slide"
         style={{ objectFit: 'cover', height: '50vh' }} // Optional for full height
       />
       <Carousel.Caption>
         <h3>Welcome to the Student Portal</h3>
         <p>Empowering students with knowledge.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         src={constantData.faculty}
         className="d-block w-100"
         alt="Faculty Slide"
         style={{ objectFit: 'cover', height: '50vh' }}
       />
       <Carousel.Caption>
         <h3>Expert Faculty</h3>
         <p>Learn from the best in the industry.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         src={constantData.college}
         className="d-block w-100"
         alt="College Slide"
         style={{ objectFit: 'cover', height: '50vh' }}
       />
       <Carousel.Caption>
         <h3>State-of-the-art Infrastructure</h3>
         <p>Modern facilities for comprehensive learning.</p>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
 </div>
 <div class='main'>
 <Container className="mt-4">
  <h1 class="text-center">Why You Should Visit Our Website</h1>
      <Row className="g-4">
        <Col xs={12} sm={6} md={4} lg={3}>
          <img
            src={constantData.img1}
            alt="Image 1"
            className="img-fluid rounded shadow"
          /><br></br>
          <b>Get University Credits</b>
          <p>Earn University Credits and get them transferred to your degree</p>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <img
            src={constantData.img2}
            alt="Image 2"
            className="img-fluid rounded shadow"
          /><br></br>
          <b>Self-Paced Learning</b>
          <p>Learn at your own pace, Anytime, Anywhere</p>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <img
            src={constantData.img3}
            alt="Image 3"
            className="img-fluid rounded shadow"
          /><br></br>
          <b>Free Course from Top Instructors</b>
          <p>Find Free courses from the Best Instructors</p>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <img
            src={constantData.img4}
            alt="Image 4"
            className="img-fluid rounded shadow"
          /><br></br>
          <b>Earn Certifications</b>
           <p> Earn Certifications and Recognition from the Top Universities</p>
        </Col>
      </Row>
    </Container>
 </div>
      </div>
  
   
  );
};

export default HomeComp;
