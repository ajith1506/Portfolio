import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Bikeserivce from "../../Assets/Projects/Bikeservice.png";
import Guvi from "../../Assets/Projects/GuviWebsite.png";
import Library from "../../Assets/Projects/Library.png";
import MobileCart from "../../Assets/Projects/mobileCart.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bikeserivce}
              isBlog={false}
              title="Bike Serive"
              description="his is a Responsive MERN-Stack web applications for motorcycle parts repair.
              In this site user can take our service, see his order list & reviews our site.
              In this site i implement stripe payment gateway. Without payment he/she can't take our service.
              User can also cancelled his order. But he/she can't cancel his first order. If he/she want to cancel his order he need to order more then one services."
              ghLink="https://github.com/ajith1506/bike-app-frontend"
              demoLink="https://guvi-bike-service.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Guvi}
              isBlog={false}
              title="Guvi-course-portfolio"
              description="A MERN Stack Developer is responsible for designing, developing, and maintaining guvi web applications using the MERN technology stack. Their role  frontend  development, ensuring seamless performance and optimal user experience"
              ghLink="https://github.com/ajith1506/day-26"
              demoLink="https://day-26-ak.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MobileCart}
              isBlog={false}
              title="Mobile Cart"
              description="A Mobile Cart built using the MERN stack typically refers to an e-commerce or online shopping application where users can browse products, add them to their cart, and proceed to checkout, all within a mobile-friendly interface. Here's a breakdown of the components and technologies involved:"
              ghLink="https://github.com/ajith1506/day-28.git"
              demoLink="https://day-28-ajith.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Library}
              isBlog={false}
              title="Library Management System"
              description="Creating a library management system with features for adding books and authors using the MERN stack involves several components and technologies. Below is a detailed description of each aspect:"
              ghLink="https://github.com/ajith1506/day-31.git"
              demoLink="https://day31-guvi-task.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
