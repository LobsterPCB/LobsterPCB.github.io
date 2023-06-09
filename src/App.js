import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages";
import About from "./pages/team";
import Blog from "./pages/blog";
import Goals from "./pages/goals";
import Features from "./pages/features";
import Product from "./pages/product";
import Post0 from "./pages/blog_posts/Post0";
import Post1 from "./pages/blog_posts/Post1";
import Post2 from "./pages/blog_posts/Post2";
import Post3 from "./pages/blog_posts/Post3";
import Post4 from "./pages/blog_posts/Post4";
import Post5 from "./pages/blog_posts/Post5";
import Post6 from "./pages/blog_posts/Post6";
import Post7 from "./pages/blog_posts/Post7";
import Post8 from "./pages/blog_posts/Post8";
import Post9 from "./pages/blog_posts/Post9";
import Post10 from "./pages/blog_posts/Post10";
import Post11 from "./pages/blog_posts/Post11";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/features" element={<Features />} />
        <Route path="/product" element={<Product />} />
        <Route path="/team" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog_posts/Post0" element={<Post0 />} />
        <Route path="/blog_posts/Post1" element={<Post1 />} />
        <Route path="/blog_posts/Post2" element={<Post2 />} />
        <Route path="/blog_posts/Post3" element={<Post3 />} />
        <Route path="/blog_posts/Post4" element={<Post4 />} />
        <Route path="/blog_posts/Post5" element={<Post5 />} />
        <Route path="/blog_posts/Post6" element={<Post6 />} />
        <Route path="/blog_posts/Post7" element={<Post7 />} />
        <Route path="/blog_posts/Post8" element={<Post8 />} />
        <Route path="/blog_posts/Post9" element={<Post9 />} />
        <Route path="/blog_posts/Post10" element={<Post10 />} />
        <Route path="/blog_posts/Post11" element={<Post11 />} />
      </Routes>
    </Router>
  );
}

export default App;
