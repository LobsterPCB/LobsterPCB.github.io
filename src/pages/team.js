import React from "react";
// import {}

const Team = () => {
  return (
    <div>
      <div className="header-padding"></div>
      <div className="team">
        <div className="image-container">
          <img src={require("../images/team/brandon.jpg")} alt=""></img>
          <img src={require("../images/team/james.jpg")} alt=""></img>
          <img src={require("../images/team/caleb.jpg")} alt=""></img>
          <img src={require("../images/team/josh.jpg")} alt=""></img>
        </div>
        <div className="text-container">
          <h1>The Team.</h1>
          <p>
            We are mechatronics engineering students from the university of
            waterloo, the lobster was our 4th year design project. We were
            inspired by our collective desire to see better rapid prototyping
            solutions for PCB design. We designed this machine to service a need
            that we all saw, while addressing reocurring pain points we have
            noticed in current market solutions.
          </p>
          <p>
            Our team is composed of 4 members, leading the business is Brandon
            Hao as the CEO, James White is leading electronics development,
            Caleb Brett is leading software development, and Josh Dellosa is
            leading mechanical development. This team is perfect for our company
            since each of the technical leads has strong background in their
            area, having worked for various companies on co-op in their relevant
            field. Brandon Hao has also worked at a start-up from stealth to
            series A at a systems integration level giving background on the
            lifecycle of a start-up making him suited to leading the business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
