import React from "react";
import "../assets/styles/Timeline.css";

const timelineData = [
  {
    year: "2000-2018",
    title: "Born and Raised in Hubei",
    description:
      "Grew up in Hubei, China. Completed my primary and secondary education, cultivating a strong interest in technology and problem-solving.",
    location: "Hubei, China",
    icon: `${process.env.PUBLIC_URL}/images/wuhan.png`,
  },
  {
    year: "2018-2022",
    title: "Undergraduate at JSU",
    description:
      "Earned a Bachelor's degree in Marketing from Jiangsu University. Developed foundational business skills and participated in entrepreneurial projects.",
    location: "Jiangsu, China",
    icon: `${process.env.PUBLIC_URL}/images/jiangsu.png`,
  },
  {
    year: "2022-2023",
    title: "Consulting Project Assistant  at Pamirs",
    description:
      "·\tAssisted in connecting clients with industry experts, facilitating valuable industry knowledge exchanges to inform strategic business decisions",
    location: "Shanghai, China",
    icon: `${process.env.PUBLIC_URL}/images/shanghai.png`,
  },
  {
    year: "2023-Present",
    title: "Master’s at UCD",
    description:
      "Pursuing a Master’s in Computer Science at University College Dublin. Specialized in software development, data analytics, and cloud computing.",
    location: "Dublin, Ireland",
    icon: `${process.env.PUBLIC_URL}/images/dublin.png`,
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="timeline-section">
      <h2 className="timeline-title">Timeline</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className={`timeline-item`}>
            {/* Timeline icon with animation */}
            <div className="timeline-icon">
              <img src={item.icon} alt={`${item.title} icon`} />
            </div>

            {/* Timeline content */}
            <div className="timeline-content">
              <h3 className="timeline-year">{item.year}</h3>
              <h4 className="timeline-title">{item.title}</h4>
              <p>{item.description}</p>
              <p className="location">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
