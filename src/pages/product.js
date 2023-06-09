import React from "react";
import Carousel from "nuka-carousel";
import Footer from "../components/Footer";

const Product = () => {
  return (
    <div>
      <div className="header-padding"></div>
      <div className="content">
        <h1>Product</h1>
        <div className="product">
          <div className="product-item">
            <img src={require("../images/renders/via_pressing.png")} />
            <div>
              <h1>Our Process</h1>
              <ol>
                <li>
                  Place a sheet of copper-clad fr4 into the PCB clamp and screw
                  it shut.
                </li>
                <li>Upload a gerber file using the web interface.</li>
                <li>Start the process through the web interface.</li>
                <li>
                  Automatic calibration tests are run, like mesh bed leveling.
                </li>
                <li>Holes for the via's are drilled into the PCB.</li>
                <li>Holes from the last step are filled with copper wire.</li>
                <li>Through holes are drilled.</li>
                <li>Traces are milled.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="product-item">
            <div>
              <h1>Tech Specs</h1>
              <table>
                <tr>
                  <th>Item</th>
                  <th>Specification</th>
                </tr>
                <tr>
                  <td>Footprint size</td>
                  <td>0402</td>
                </tr>
                <tr>
                  <td>Trace width</td>
                  <td>6/6</td>
                </tr>
                <tr>
                  <td>Speed</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>Via resistivity</td>
                  <td>...</td>
                </tr>
              </table>
            </div>
            <img src={require("../images/footprint.jpg")} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
