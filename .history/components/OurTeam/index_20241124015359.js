"use client";

import React, { useState } from "react";

const OurTeam = () => {
  const teamMembers = [
    { name: "Monica Nguyen", role: "Digital and Graphic Designer", image: "/OurTeam/Mon/mon.png" },
    { name: "John Doe", role: "Software Engineer", image: "/OurTeam/John/john.png" },
    { name: "Jane Smith", role: "UI/UX Designer", image: "/OurTeam/Jane/jane.png" },
    { name: "Alice Brown", role: "QA Specialist", image: "/OurTeam/Alice/alice.png" },
    { name: "Chris Evans", role: "Product Manager", image: "/OurTeam/Chris/chris.png" },
    { name: "Emily Davis", role: "Front-end Developer", image: "/OurTeam/Emily/emily.png" },
    { name: "Michael Johnson", role: "Back-end Developer", image: "/OurTeam/Michael/michael.png" },
    { name: "Sophia Lee", role: "Marketing Specialist", image: "/OurTeam/Sophia/sophia.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === "right" && currentIndex < teamMembers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="teamSection">
      <h2 className="title">Meet our team</h2>
      <p className="description">
        Meet the innovative BCIT's full-stack developers and digital designers who make up Beep's dedicated crew.
      </p>
      <div className="carousel">
        {/* Left Arrow */}
        <button
          className="arrow leftArrow"
          onClick={() => handleArrowClick("left")}
          disabled={currentIndex === 0}
        >
          ◀
        </button>

        {/* Cards */}
        <div className="trackWrapper">
          <div
            className="track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {teamMembers.map((member, index) => (
              <div className="card" key={index}>
                <img src={member.image} alt={member.name} className="image" />
                <div className="info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="arrow rightArrow"
          onClick={() => handleArrowClick("right")}
          disabled={currentIndex === teamMembers.length - 1}
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default OurTeam;
