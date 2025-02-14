import React from "react";
import { useLocation } from "react-router-dom";
import "../../components/css/style.css";

const BlogDetail = () => {
  const location = useLocation();
  const blog = location.state || {};

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-page-container">
        <h1 className="blog-detail-page-title">{blog.title}</h1>
        <p className="blog-detail-page-meta">Posted on {blog.date}</p>
        <img
          src={blog.image}
          alt="Blog Detail"
          className="blog-detail-page-image"
        />
        <p className="blog-detail-page-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat...
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
