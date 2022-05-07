import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "WeatherDashboard",
    languages: "HTML, Bootsrtap/CSS, JavaScript",
    packages: "Moment.js",
    image: "/img/WeatherDashboard.png",
    description: "Weather forecast by city and state",
    repo: "https://github.com/KvTsira/Weather-Dashboard",
    live: "https://github.com/KvTsira/Weather-Dashboard"
  },
  {
    id: 1,
    title: "Karaoke Made East",
    languages: "HTML, CSS, JavaScript",
    packages: "None",
    image: "/img/KaraokeMadeEasy.png",
    description: "A complete front end app",
    repo: "https://github.com/KvTsira/karaoke-web-app",
    live: "https://github.com/KvTsira/karaoke-web-app",
  },
  {
    id: 2,
    title: "Offline Budget Tracker",
    languages: "HTML, CSS, JavaScript",
    packages: "heroku",
    image: "/img/BudgetTracker.png",
    description: "PWA Implementation",
    live: "https://rocky-ravine-81651.herokuapp.com/",
    repo: "https://github.com/KvTsira/Offline-Budget-Trackers",
  },
  {
    id: 3,
    title: "Let's see the World",
    languages: "HTML, CSS, ES6, JavaScript",
    packages: "bcrypt, sequelize, dotenv, Handlebars, Express, Express-session, MySQL, Sequilize",
    image: "/img/TravelBlog.png",
    description: "An app for travelers to share fun ideas with one another.",
    live: "https://github.com/KvTsira/Group-3-FullStack",
    repo: "https://github.com/KvTsira/Group-3-FullStack",
  },
  {
    id: 4,
    title: "Adopt a Pet",
    languages: "HTML, CSS, ES6, JavaScript",
    packages: "React, Emailjs, graphQL and Apollo, brypt, Stripe, MongoDB and Mongoose",
    image: "/img/AdoptAPet2.png",
    description: "Pet Adoption site on React",
    live: "https://lit-thicket-52493.herokuapp.com/",
    repo: "https://github.com/KvTsira/adopt-a-pet",
  },
  {
    id: 5,
    title: "Work Day Scheduler",
    languages: "HTML, CSS, JavaScript",
    packages: "JQuery, Moment.js, Bootstrap",
    image: "/img/WorkdayScheduler.png",
    description: "Create a workday calendar that allows a user tyo save events for each hour of the work day.",
    live: "https://github.com/KvTsira/WorkDay_Scheduler",
    repo: "https://github.com/KvTsira/WorkDay_Scheduler",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;