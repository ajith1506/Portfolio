import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiRender,
  SiNetlify,
  SiPostman,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h4>Netlify</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h4>Postman</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender />
        <h4>Render</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h4>Visualstudiocode</h4>
      </Col>
    </Row>
  );
}

export default Toolstack;
