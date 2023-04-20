import React from "react";
import Carousel from "nuka-carousel";

const Features = () => {
  return (
    <div>
      <div className="header-padding"></div>
      <div className="content">
        <h1>Features</h1>
        <div id="features-content">
          <div className="features">
            <div className="features-item">
              <h3>Automatic Via Processing</h3>
              <p>
                The main differentiating factor between our machine and existing
                solutions is our novel automatic via process. Current solutions
                all require messy chemical processes to plate the copper vias,
                or intensive manual riveting (which becomes more and more
                prohibitive as designs grow). We have developed a via pressing
                process which forms solid vias using copper wire and an
                automatic press to handle this step automatically without mess
                or user interaction.
              </p>
            </div>
            <div className="features-item">
              <Carousel
                autoplay="true"
                autoplayInterval={5000}
                wrapAround="true"
                pauseOnHover="false"
                // withoutControls="true"
              >
                <img src={require("../images/renders/via_pressing.png")} />
                <img
                  src={require("../images/renders/via_pressing_arrows.png")}
                />
                <img src={require("../images/renders/wire_feeding.png")} />
              </Carousel>
            </div>
          </div>
          <div className="features opposite">
            <div className="features-item">
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
              <h3>No Tool Changes, Automatic Material Flipping</h3>
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
                The milling heads and via pressing mechanism of the lobster
                share a motion carrriage. This allows us to automatically move
                between the milling and via processes without the need for user
                intervention.
              </p>
            </div>
            <div className="features-item">
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
        </div>
      </div>
    </div>
  );
};

export default Features;
