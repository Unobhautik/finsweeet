import React from 'react';
import '../../styles/Blog/bdetails.css';

const blogPosts = [
    {
        id: 1,
        date: "27 Jan 2021",
        title: "How one Webflow user grew his single person consultancy from $0–100k in 14 months",
        description: "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract.",
        image: "/assets/images/blg1.png",
    },
    {
        id: 2,
        date: "27 Jan 2021",
        title: "How one Webflow user grew his single person consultancy from $0–100k in 14 months",
        description: "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract.",
        image: "/assets/images/blg2.png",
    },
    {
        id: 3,
        date: "27 Jan 2021",
        title: "How one Webflow user grew his single person consultancy from $0–100k in 14 months",
        description: "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract.",
        image: "/assets/images/blg3.png",
    },
    {
        id: 4,
        date: "27 Jan 2021",
        title: "How one Webflow user grew his single person consultancy from $0–100k in 14 months",
        description: "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract.",
        image: "/assets/images/blg4.png",
    },
    {
        id: 5,
        date: "27 Jan 2021",
        title: "How one Webflow user grew his single person consultancy from $0–100k in 14 months",
        description: "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract.",
        image: "/assets/images/blg5.png",
    },
    {
        id: 6,
        date: "27 Jan 2021",
        title: "How one Webflow user grew his single person consultancy from $0–100k in 14 months",
        description: "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract.",
        image: "/assets/images/blg6.png",
    },
];

function Blogger() {
    return (
        <div className="blog-background-2">
            <div className="wrapper-blog">
                <h1 className="blog-heading">Our Blog</h1>
                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <article className="blog-card" key={post.id}>
                            <div className="blog-image-wrapper">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="blog-image" 
                                />
                            </div>
                            <div className="blog-text-container">
                                <time className="blog-date">{post.date}</time>
                                <h2 className="blog-title">{post.title}</h2>
                                <p className="blog-description">{post.description}</p>
                                <a href="/your-target-url" className="blog-read-more">
                                    Read More
                                    <img 
                                        src="/assets/images/icons/arrow-right.svg" 
                                        alt="Arrow" 
                                        className="blog-arrow" 
                                    />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blogger;
