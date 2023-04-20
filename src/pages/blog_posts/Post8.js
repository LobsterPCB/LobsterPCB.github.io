import Markdown from "markdown-to-jsx";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Post8 = () => {
  const [post, setPost] = useState("");

  useEffect(() => {
    import("../../blog/08_mar3.md").then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPost(response))
        .catch((err) => console.log(err));
    });
  }, []);

  return (
    <article className="article">
      <div className="container">
        <div className="post-wrapper">
          <NavLink className="back-button" to="/blog" activeStyle>
            Back
          </NavLink>
          <Markdown>{post}</Markdown>
        </div>
      </div>
    </article>
  );
};

export default Post8;
