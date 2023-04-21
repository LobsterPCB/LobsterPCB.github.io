import React from "react";
import titleVideo from "../images/front_video.mp4";

const Home = () => {
  return (
    <div>
      <div className="header-padding"></div>
      <div id="video-section">
        <video src={titleVideo} autoPlay loop muted />
        <div id="title">
          <img src={require("../images/Logo.png")}></img>
          <h1>From Idea to Circuit in the same day, Autonomously</h1>
        </div>
      </div>
      <div className="content">
        <p>
          The Lobster is 2-layer PCB prototyping solution designed to minimize
          the time between idea and prototype. The goal is to eliminate downtime
          in the design cycle, and facilitate the same fast, iterative design
          approach that 3D printers provide. The lobster aims to be a low
          friction, plug-and-play solution which turns your circuits into
          physical prototypes with the press of a button, and no oversight.
        </p>
      </div>
    </div>
  );
};

export default Home;
