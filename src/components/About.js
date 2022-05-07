import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Developer in making</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/kvTsira.jpg'} alt="Tsira Kvaratskhelia"/>
      <p className="content is-italic mt-4">I am Tsira, as Full-stack Web Developer</p>
      <p className="content">Business Information Technology graduate with Honors degree and years of experience in software development and project management. Career experience in financial and market research industries.</p>
    </div>
  );
}

export default About;
