
//link to the resume
//lists the skills

import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Résumé</p>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "/Tsira Kvaratskhelia Resume OLD.doc"}
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
          <li>HTML, CSS, Javascript, Bootstrap</li>
          <li>MySQL, Node.js, MongoDB </li>
          <li>RestAPIs, React, GraphQL, Markdown</li>
          <li>Git</li>
          <li>Github Repo</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
