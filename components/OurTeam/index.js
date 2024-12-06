"use client";

import React, { useState } from "react";
import TeamCarousel from "./Carousel";

const OurTeam = () => {

  const teamMembers = [
    { name: "Monica Nguyen", role: "Project Manager", image: "/OurTeam/Mon/mon.png" },
    { name: "Jumi Pham", role: "UX/UI Designer", image: "/OurTeam/Jumi/jumi.png" },
    { name: "Shirin Forouzan", role: "Frontend Designer", image: "/OurTeam/Shirin/shirin.png" },
    { name: "Callista Chan", role: "Frontend Designer", image: "/OurTeam/Cally/callista.png" },
    { name: "Denis Liu", role: "Full Stack Web Developer", image: "/OurTeam/Dennis/denis.png" },
    { name: "Sol Kim", role: "Full Stack Web Developer", image: "/OurTeam/Sol/sol.png" },
    { name: "Christy Wan", role: "Full Stack Web Developer", image: "/OurTeam/Christy/christy.png" },
    { name: "Aless Wei", role: "Full Stack Web Developer", image: "/OurTeam/Aless/aless.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  console.log('teammember length', teamMembers.length)
  console.log('current index', currentIndex)

  const handleArrowClickDesktop = (direction) => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === "right" && currentIndex < teamMembers.length - 1) {
      setCurrentIndex(1);
    }
  };

  return (
    <section className="teamSection">
      
      <h2 className="title">Meet our team</h2>
      <p className="description">
        Meet the innovative BCIT's full-stack developers and digital designers
        who make up Beep's dedicated crew.
      </p>
      <TeamCarousel />
      {/* <div className="carousel">
     
        <button
          className="arrow leftArrow"
          onClick={() => handleArrowClickDesktop("left")}
          disabled={currentIndex === 0}
        >
          ←
        </button>

        
        <div className="trackWrapper">
          <div
            className="track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >

            {teamMembers.slice(0,4).map((member, index) => (
              <div className="card" key={index}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="image"
                />
                <div className="info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

 
        <button
          className="arrow rightArrow"
          onClick={() => handleArrowClickDesktop("right")}
          disabled={currentIndex === teamMembers.length - 1}
        >
          →
        </button>
      </div> */}
    </section>
  );
};

export default OurTeam;
