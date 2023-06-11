import React from "react";
import Carousel from "nuka-carousel";
import titleVideo from "../images/front_video.mp4";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="header-padding"></div>
      <div id="video-section">
        <video src={titleVideo} autoPlay loop muted />
        <div id="title">
          <img src={require("../images/Logo.png")}></img>
          <h1>From idea to circuit in the same day, autonomously</h1>
        </div>
      </div>
      <div className="content">
        <div className="paragraph">
          <p>
            The Lobster is 2-layer PCB prototyping machine designed to minimize
            the time between idea and prototype. The goal is to eliminate
            downtime in the design cycle, and facilitate the same fast,
            iterative design approach that 3D printers provide. The lobster aims
            to be a hands-off, plug-and-play solution which turns your circuits
            into physical prototypes with the click of a button, and no
            oversight.
          </p>
          <h1>marketing hook...</h1>
          <p>smn smn</p>
          <h1>Capabilities</h1>
          <p>
            Our machine can drill and mill into thin copper and fiberglass
            sheets. It can also feed copper wire into the holes that it drills
            and use a press to squish the wire, filling the hole and effectivley
            creating a via. Combining these processes allows it to create a full
            2-layer PCB quickly. Furthermore, the user just needs to load a
            gerber file, add the copper sheet, and remove the finished PCB.
          </p>
        </div>
        <div className="features" id="top-features">
          <div className="features-item">
            <h3>Automatic Via Processing</h3>
            <p>
              The main differentiating factor between our machine and existing
              solutions is our novel automatic via process. Current solutions
              all require messy chemical processes to plate the copper vias, or
              intensive manual riveting (which becomes more and more prohibitive
              as designs grow). We have developed a via pressing process which
              forms solid vias using copper wire and an automatic press to
              handle this step automatically without mess or user interaction.
            </p>
          </div>
          <div className="features-item carousel">
            <Carousel
              autoplay="true"
              autoplayInterval={5000}
              wrapAround="true"
              pauseOnHover="false"
              // withoutControls="true"
            >
              <img src={require("../images/renders/via_pressing.png")} />
              <img src={require("../images/renders/via_pressing_arrows.png")} />
              <img src={require("../images/renders/wire_feeding.png")} />
            </Carousel>
          </div>
          <h1 className="header-block">Features</h1>
        </div>
        <div className="features opposite">
          <div className="features-item carousel">
            <Carousel
              autoplay="true"
              autoplayInterval={5000}
              wrapAround="true"
              pauseOnHover="false"
              // withoutControls="true"
            >
              <img src={require("../images/renders/milling_heads.png")} />
              <img src={require("../images/renders/via_flipping.png")} />
            </Carousel>
          </div>
          <div className="features-item">
            <h3>Automatic Material Flipping</h3>
            <p>
              To avoid the need for proprietary or obsucure raw materials, we
              chose a cnc milling process to create 2-layer pcbs from common
              copper-clad FR4. For the prototype, we implemented a
              multi-toolhead design and an automatic flipping mechanism to
              demonstrate a fully automated 2-layer pcb prototyping process.
            </p>
          </div>
        </div>
        <div className="features">
          <div className="features-item">
            <h3>Shared Motion Carriage</h3>
            <p>
              The milling heads and via pressing mechanism of the lobster share
              a motion carrriage. This allows us to automatically move between
              the milling and via processes without the need for user
              intervention.
            </p>
          </div>
          <div className="features-item carousel">
            <Carousel
              autoplay="true"
              autoplayInterval={5000}
              wrapAround="true"
              pauseOnHover="false"
              // withoutControls="true"
            >
              <img src={require("../images/renders/design_overview.png")} />
              <img src={require("../images/renders/rear_view.png")} />
            </Carousel>
          </div>
        </div>
        <div className="features opposite">
          <div className="features-item carousel">
            <Carousel
              autoplay="true"
              autoplayInterval={5000}
              wrapAround="true"
              pauseOnHover="false"
              // withoutControls="true"
            >
              <img src={require("../images/renders/via_pressing.png")} />
              <img src={require("../images/renders/via_pressing_arrows.png")} />
              <img src={require("../images/renders/wire_feeding.png")} />
            </Carousel>
          </div>
          <div className="features-item">
            <h3>Web interface</h3>
            <p>sldkfjlksfd</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
