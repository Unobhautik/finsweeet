import React, { useState } from "react";
import '../../styles/Portfolio/design.css';

const DesignSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const templates = [
    { id: 1, imgSrc: "/assets/images/pf1.png", title: "Template 1", category: "UI Design", description: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle." },
    { id: 2, imgSrc: "/assets/images/pf2.png", title: "Template 2", category: "Webflow Design", description: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle." },
    { id: 3, imgSrc: "/assets/images/pf3.png", title: "Template 3", category: "Figma Design", description: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle." },
    { id: 4, imgSrc: "/assets/images/pf4.png", title: "Template 4", category: "UI Design", description: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle." },
    { id: 5, imgSrc: "/assets/images/pf5.png", title: "Template 5", category: "Webflow Design", description: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle." },
    { id: 6, imgSrc: "/assets/images/pf6.png", title: "Template 6", category: "Figma Design", description: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle." },
  ];

  const filteredTemplates = activeFilter === "All"
    ? templates
    : templates.filter((template) => template.category === activeFilter);

  return (
    <div className="main-background">
      <div className="content-wrapper">
        <div className="design-wrapper">
          <section className="designs-section-horizontal">
            <div className="filter-buttons">
              {["All", "UI Design", "Webflow Design", "Figma Design"].map((filter) => (
                <button
                  key={filter}
                  className={activeFilter === filter ? "active" : ""}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="templates-grid">
              {filteredTemplates.map((template) => (
                <div key={template.id} className="template-card">
                  <img src={template.imgSrc} alt={template.title} className="template-image" />
                  <div className="template-content">
                    <h2>{template.title}</h2>
                    <p>{template.description}</p>
                    <a href="#portfolio" className="template-link">
                      {activeFilter === "All" ? "View Portfolio" : "Read case study"}
                      <img src="/assets/images/icons/arrow2.svg" alt="Arrow Icon" className="arrow2-image" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DesignSection;
