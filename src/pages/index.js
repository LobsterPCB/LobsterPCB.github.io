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
            The Lobster is a 2-layer printed circuit board (PCB) prototyping
            system designed to minimize the time between idea and final product.
            The goal is to eliminate downtime in the design cycle, while
            providing the same iterative design approach that 3D printers
            provide. The Lobster aims to provide a fully automated workflow
            which turns your circuits into physical prototypes with no
            oversight.
          </p>
          <h1>Capabilities</h1>
          <p>
            The Lobster takes copper plated fiberglass sheets, called FR-4,
            processes them into PCBs. This is done by milling and drilling to
            form all the wires and features needed for your circuit. It also
            forms vias (connections between the copper layers) by feeding copper
            wire into drilled holes and pressing the ends into the copper
            layers, forming an electrical connection. Combining these processes
            allows it to create a full 2-layer PCB quickly. All the user needs
            to do is load a gerber file, add the copper sheet, and remove the
            finished PCB.
          </p>
        </div>
        <div className="features" id="top-features">
          <div className="features-item">
            <h3>Automatic Via Processing</h3>
            <p>
              The main draw of our machine over existing solutions is our novel
              automatic via process. Manufacturing PCBs at mass scale requires
              chemical processes to plate the copper vias, this is not suitable
              for office or lab use. This has led existing rapid prototyping
              systems to rely on manual riveting, this is extremely time
              intensive and becomes prohibitive with complex designs. We have
              designed a via pressing process which forms solid vias using
              copper wire and a press. This allows automated via installation
              suitable for in-house use.
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
            <h3>Full Automation</h3>
            <p>
              Our system uses a CNC milling process to form the desired wires
              and features on a copper board. To mill on both sides of the
              copper, the board is automatically flipped by the machine, and
              uses a multi-toolhead design. This means that no user interaction
              is required for flipping or tool-changing. This combined with
              automatic via gives the user a fully hands-off workflow.
            </p>
          </div>
        </div>
        <div className="features">
          <div className="features-item">
            <h3>Shared Motion Carriage</h3>
            <p>
              The milling heads and via pressing mechanism of The Lobster share
              a single motion carrriage. This reduces the complexity of the
              system, while improving automation as the board does not need to
              manually moved between workspaces between milling and via steps.
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
            <h3>Web Interface</h3>
            <p>
              The Lobster is controlled through a web portal hosted by the
              machine which is access either through WiFi or a direct wired
              connection. This means that no additional software needs to be
              installed by the user. Simply upload your design files, and the
              web app will do the rest.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
