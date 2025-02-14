import React from "react";
import '../../styles/aboutus/team.css';

const Meet = () => {
  const team = [
    {
      name: "John Smith",
      role: "CEO",
      image: "/assets/images/john.png",
      socials: [
        { icon: "/assets/images/fb.svg", link: "https://facebook.com/johnsmith" },
        { icon: "/assets/images/x.svg", link: "https://twitter.com/johnsmith" },
        { icon: "/assets/images/ld.svg", link: "https://linkedin.com/in/johnsmith" },
      ],
    },
    {
      name: "Simon Adams",
      role: "CTO",
      image: "/assets/images/simon.png",
      socials: [
        { icon: "/assets/images/fb.svg", link: "https://facebook.com/simonadams" },
        { icon: "/assets/images/x.svg", link: "https://twitter.com/simonadams" },
        { icon: "/assets/images/ld.svg", link: "https://linkedin.com/in/simonadams" },
      ],
    },
    {
      name: "Paul Jones",
      role: "Design Lead",
      image: "/assets/images/paul.png",
      socials: [
        { icon: "/assets/images/fb.svg", link: "https://facebook.com/pauljones" },
        { icon: "/assets/images/x.svg", link: "https://twitter.com/pauljones" },
        { icon: "/assets/images/ld.svg", link: "https://linkedin.com/in/pauljones" },
      ],
    },
    {
      name: "Sara Hardin",
      role: "Project Manager",
      image: "/assets/images/sara.png",
      socials: [
        { icon: "/assets/images/fb.svg", link: "https://facebook.com/sarahardin" },
        { icon: "/assets/images/x.svg", link: "https://twitter.com/sarahardin" },
        { icon: "/assets/images/ld.svg", link: "https://linkedin.com/in/sarahardin" },
      ],
    },
  ];

  return (
    <div className="meet-container">
      <h2 className="meet-title">Meet our team</h2>
      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-image-container">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="profile-image" />
              <div className="hover-overlay">
                <img src="/assets/images/Ellipse.png" alt="" className="ellipse-overlay" />
                <div className="social-icons">
                  {member.socials.map((social, i) => (
                    <a href={social.link} key={i} target="_blank" rel="noopener noreferrer">
                      <img src={social.icon || "/placeholder.svg"} alt="" className="social-icon" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meet;
