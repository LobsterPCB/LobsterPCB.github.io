import React from "react";
import Footer from "../components/Footer";
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
          <h1>The Team</h1>
          <p>
            We are alumni of the Mechatronics Engineering program at the
            University of Waterloo. For our 4th year capstone project, we were
            asked to solve a problem using the engineering skills we acquired
            during our degree. We were inspired by our collective desire to see
            better rapid prototyping solutions for PCB design. We designed this
            machine to service a need that we all saw, while addressing
            reocurring pain points we have found in current market solutions.
            The Lobster is the culmination of our work, a fully automated
            solution to PCB prototyping.
          </p>
          <p>
            Our team is composed of 3 members, leading the business is Brandon
            Hao as the CEO, James White is leading hardware development, and
            Caleb Brett is leading software development. This team is perfect
            for our company since each of the technical leads has strong
            background in their area, having worked for various companies on
            co-op in their relevant field. Brandon Hao has also worked at a
            start-up from stealth to series A at a systems integration level
            giving background on the lifecycle of a start-up making him suited
            to leading the business.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
