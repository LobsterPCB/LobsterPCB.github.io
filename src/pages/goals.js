import React from "react";
import TextBlock from "../components/TextBlock";
import Footer from "../components/Footer";

// images
// import build from "../images/team/josh.jpg";

const Goals = () => {
  return (
    <div>
      <div className="header-padding"></div>
      <div className="content">
        <h1>Project Goals</h1>
        <div className="text-boxes">
          <TextBlock
            text={{
              title: "What we are building",
              paragraph:
                "Our goal is to create a fully automated, plug-and-play 2-layer rapid PCB prototyping system for office and lab use. Our product aims to be as simple to use as a 3D printer - simply load your design, start the machine, and return for your finished PCB.",
            }}
            // img={build}
          />
          <TextBlock
            text={{
              title: "Doesn’t this already exist?",
              paragraph:
                "While existing rapid prototype systems already exist for PCBs, none of them offer a fully automated workflow. Current solutions fail to automate the via installation process, which forms connections between PCB layers, and require significant user intervention in the process. We aim to provide a seamless set and forget experience, saving valuable engineering hours for other tasks.",
            }}
            // img={build}
          />
          <TextBlock
            text={{
              title: "Avoiding proprietary consumables",
              paragraph:
                "One of the primary design goals for our system is to avoid the use of rare or proprietary materials. Many existing PCB prototyping systems use consumables such as copper rivets for vias, or conductive ink for material deposition. These materials can often be extremely expensive or difficult to source. By creating a system that doesn’t rely on proprietary consumables, The Lobster can easily be integrated into your workflow without any logistic issues.",
            }}
            // img={build}
          />
          <TextBlock
            text={{
              title: "What's next",
              paragraph:
                "Our product is in the early stages of design and development. The current build is a prototype designed to showcase our novel via prototyping process and to demonstrate the level of automation that can be achieved. As we iterate over the product, we aim to improve reliability and user experience, while refining our existing features and workflows. Additionally, as we approach wider deployment, further refinements will be made to aethestics, material usage, and cost.",
            }}
            // img={build}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Goals;
