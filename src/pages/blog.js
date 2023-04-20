import React from "react";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div className="header-padding"></div>
      <div className="content">
        <h1>Build Log</h1>
        <p>
          These are the weekly progress updates that were written while
          developing this machine for our 4th year design project.
        </p>
        <br></br>
        <div id="blog-list">
          <div className="blog-summary">
            <div>
              <img
                src={require("../images/blog_headers/mar24_header.png")}
              ></img>
            </div>
            <h3>Build Update - Mar 27</h3>
            <p>
              Last week we completed all major features, and presented The
              Lobster at the Mechatronics Capstone Symposium.
            </p>
            <NavLink to="/blog_posts/Post11" activeStyle>
              Read More
            </NavLink>
          </div>
          <div className="blog-summary">
            <div>
              <img
                src={require("../images/blog_headers/mar17_header.png")}
              ></img>
            </div>
            <h3>Build Update - Mar 17</h3>
            <p>
              As the Mechatronics Capstone Symposium gets closer and closer,
              testing continues and more improvements are made.
            </p>
            <NavLink to="/blog_posts/Post10" activeStyle>
              Read More
            </NavLink>
          </div>
          <div className="blog-summary">
            <div>
              <img
                src={require("../images/blog_headers/mar10_header.png")}
              ></img>
            </div>
            <h3>Build Update - Mar 10</h3>
            <p>
              A few minor updates are made to the machine, testing continues,
              and we run into some issues with our demo.
            </p>
            <NavLink to="/blog_posts/Post9" activeStyle>
              Read More
            </NavLink>
          </div>
          <div className="blog-summary">
            <div>
              <img
                src={require("../images/blog_headers/mar3_header.png")}
              ></img>
            </div>
            <h3>Build Update - Mar 3</h3>
            <p>
              We continue to move towards demonstrating our machine (and have a
              few more hiccups along the way).
            </p>
            <NavLink to="/blog_posts/Post8" activeStyle>
              Read More
            </NavLink>
          </div>
          <div className="blog-summary">
            <div>
              <img
                src={require("../images/blog_headers/feb24_header.png")}
              ></img>
            </div>
            <h3>Build Update - Feb 24</h3>
            <p>
              As reading week passes and the demo date gets closer, we make more
              progess towards a functional machine.
            </p>
            <NavLink to="/blog_posts/Post7" activeStyle>
              Read More
            </NavLink>
          </div>
          <div className="blog-summary">
            <div>
              <img
                src={require("../images/blog_headers/feb17_header_temp.png")}
              ></img>
            </div>
            <h3>Build Update - Feb 17</h3>
            <p>
              The long-awaited bearings arrive, our wiring gets slightly
              messier, and we run into our first problem while testing.
            </p>
            <NavLink to="/blog_posts/Post6" activeStyle>
              Read More
            </NavLink>
          </div>
          <div className="blog-summary">
            <div>
              <img
                src={require("../images/blog_headers/feb10_header.png")}
              ></img>
            </div>
            <h3>Build Update - Feb 10</h3>
            <p>
              What’s new for Week 5? The first milling head is mounted to the
              machine, we start to clean up our wire routing, and we take a look
              at dust collection.
            </p>
            <NavLink to="/blog_posts/Post5" activeStyle>
              Read More
            </NavLink>
          </div>
          <div className="blog-summary">
            <div>
              <img
                src={require("../images/blog_headers/feb3_header.png")}
              ></img>
            </div>
            <h3>Build Update - Feb 3</h3>
            <p>
              This week on The Lobster: The x- and y-axis movement systems are
              installed, the first milling/drilling head gets assembled, and we
              get a big steel box.
            </p>
            <NavLink to="/blog_posts/Post4" activeStyle>
              Read More
            </NavLink>
          </div>
          <div className="blog-summary">
            <div>
              <img src={require("../images/blog_headers/jan27_temp.png")}></img>
            </div>
            <h3>Build Update - Jan 27</h3>
            <p>
              We run into a minor purchasing hurdle, the first components get
              mounted to the frame, and the device moves off of our kitchen
              counter.
            </p>
            <NavLink to="/blog_posts/Post3" activeStyle>
              Read More
            </NavLink>
          </div>
          <div className="blog-summary">
            <div>
              <img src={require("../images/blog_headers/jan20_temp.png")}></img>
            </div>
            <h3>Build Update - Jan 20</h3>
            <p>
              The build continues: more mechanical systems get built and tested,
              and the electrical team gets moving.
            </p>
            <NavLink to="/blog_posts/Post2" activeStyle>
              Read More
            </NavLink>
          </div>
          <div className="blog-summary">
            <div>
              <img
                src={require("../images/blog_headers/jan13_header_v3.png")}
              ></img>
            </div>
            <h3>Build Update - Jan 13</h3>
            <p>
              The term is underway, and so is our build! The frame gets built
              (on our kitchen counter) and the computer vision program is coming
              together.
            </p>
            <NavLink to="/blog_posts/Post1" activeStyle>
              Read More
            </NavLink>
          </div>
          <div className="blog-summary">
            <div>
              <img
                src={require("../images/blog_headers/jan9_header_v2.png")}
              ></img>
            </div>
            <h3>New Term Update - Jan 9</h3>
            <p>
              With the new year comes our 4B term, which means it’s time to
              start building!
            </p>
            <NavLink to="/blog_posts/Post0" activeStyle>
              Read More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
