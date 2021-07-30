import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaDownload } from "react-icons/fa";
import  MyResume from "../../resume/resume";

const Home = () => {
  return (
    <div>
      <div className="skills">
        <div>
          <h1>Front End</h1>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>HTML</ListGroup.Item>
              <ListGroup.Item>CSS</ListGroup.Item>
              <ListGroup.Item>Javascript</ListGroup.Item>
              <ListGroup.Item>React</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div>
          <h1>Back End</h1>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Nodejs</ListGroup.Item>
              <ListGroup.Item>Expressjs</ListGroup.Item>
              <ListGroup.Item>SQL</ListGroup.Item>
              <ListGroup.Item>NoSQL</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div>
          <h1>General</h1>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>OOP</ListGroup.Item>
              <ListGroup.Item>API's</ListGroup.Item>
              <ListGroup.Item>MVC</ListGroup.Item>
              <ListGroup.Item>PWA's</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>
      <div className="download">
        <h2>
          <MyResume />
          <FaDownload />
        </h2>
      </div>
    </div>
  );
};

export default Home;
