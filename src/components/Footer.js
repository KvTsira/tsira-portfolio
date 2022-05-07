import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/KvTsira" target="_blank" rel="noreferrer">
            Tsira Kvaratskhelia
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/tsira-kvaratskhelia-92aa2b3"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>
          {" "}
          |{" "}{" "}
          <a href="https://github.com/KvTsira" target="_blank" rel="noreferrer">
            Github
          </a>
          {" "}
          |{" "}{" "}
          <a href = "mailto: kvtsira@gmail.com" target="_blank" rel="noreferrer">
            Email
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;