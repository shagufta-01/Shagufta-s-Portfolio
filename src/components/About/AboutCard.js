import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize:"90%" }}>
          <ul>
          {`\u2023`} Hi Everyone, I am <span className="purple">Shagufta Fatima </span>
            from <span className="purple" >  Rajasthan, India.</span>
            <br></br><br></br>
            {`\u2023`}  Final-year B.Tech student in Computer Science.
            <br></br><br></br>
            {`\u2023`} Passionate about software development.
            <br></br><br></br>
            {`\u2023`} I have a strong command of JavaScript and hands-on experience with powerful frameworks like React and Node.js. I’m also skilled in solving data structures and algorithm challenges, which enables me to create smart and efficient solutions tailored to real-world needs..
            </ul>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
