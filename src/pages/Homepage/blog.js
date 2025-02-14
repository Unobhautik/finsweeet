import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/Home/blog.css";

const ArrowThrow = "/assets/images/icons/arrowthrow.svg";
const BlogImg1 = "/assets/images/blog1.png";
const BlogImg2 = "/assets/images/blog2.png";
const BlogImg3 = "/assets/images/blog3.png";

const Blog = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      image: BlogImg1,
      date: "19 Jan 2022",
      title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      description: "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract",
    },
    {
      id: 2,
      image: BlogImg2,
      date: "19 Jan 2022",
      title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      description: "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract",
    },
    {
      id: 3,
      image: BlogImg3,
      date: "19 Jan 2022",
      title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      description: "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract",
    },
  ];

  return (
    <div className="blog-background">
      <div className="wrapper-blog">
        <div className="blog1">
          <div className="cool">
            <div className="text">
              <h2>Our blog</h2>
            </div>
          </div>

          <div className="blog">
            {blogs.map((blog) => (
              <div 
                key={blog.id} 
                className="card" 
                onClick={() => navigate(`/blog/${blog.id}`, { state: blog })}
              >
                <div className="img">
                  <img src={blog.image || "/placeholder.svg"} alt="Blog" />
                </div>
                <div className="txt">
                  <span>{blog.date}</span>
                  <h5>{blog.title}</h5>
                  <p>{blog.description}</p>
                  <h6>
                    Read More{" "}
                    <img src={ArrowThrow} alt="Arrow Icon" className="arrowthrow" />
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
