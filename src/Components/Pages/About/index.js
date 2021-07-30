import React from "react";
import Card from "react-bootstrap/Card";

const About = () => {

  return (
    <div>
      <h1>About</h1>
      <Card>
        <Card.Body className="about-body">
          I am a full stack developer that is passionate about honing my current skills and seeking new technologies. I am a Graduate of University of Denver’s 
          Coding Bootcamp. Proficient with front-end technologies HTML, CSS, JavaScript and React, and skilled in back-end technologies such as Node, SQL, Sequelize,
          MongoDB, and Graphql. During my time at University of Denvers’s Coding Bootcamp I have had the opportunity to work on over 20 projects ranging from simple 
          front-end web design to full stack applications. I am a strong independent worker and gladlyt welcome team collaboration. My goal is to provide an optimal
          user experience that increases appliction profitability.
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
