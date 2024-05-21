import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiReact,
  DiGit,
  DiHtml5,
  DiJavascript1,
} from "react-icons/di";
import { SiFirebase, SiBootstrap } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h4>Javascript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h4>Node Js</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h4>Mongo DB</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h4>MYSQL</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4>React</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4>Git</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h4>HTML 5</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <h4>bootstrap</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h4>Firebase</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
