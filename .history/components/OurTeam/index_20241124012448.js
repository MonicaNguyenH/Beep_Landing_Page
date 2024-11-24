"use client";

import React, { useState } from "react";

const OurTeam = () => {
  const teamMembers = [
    { name: "Monica Nguyen", role: "Project Manager", image: "/monica.jpg" },
    { name: "John Doe", role: "Software Engineer", image: "/john.jpg" },
    { name: "Jane Smith", role: "UI Designer", image: "/jane.jpg" },
    { name: "Alice Brown", role: "QA Specialist", image: "/alice.jpg" },
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
    <section className="text-center p-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-2">Meet our team</h2>
      <p className="text-sm text-gray-400 mb-8">
        Meet the innovative BCIT's full-stack developers and digital designers
        who make up Beep's dedicated crew.
      </p>
      <div className="relative flex items-center justify-center overflow-hidden">
        {/* Left Arrow */}
        <button
          className="absolute left-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => handleArrowClick("left")}
          disabled={currentIndex === 0}
        >
          ◀
        </button>

        {/* Cards */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                className="bg-gray-800 rounded-lg flex-shrink-0 w-64 text-center"
                key={index}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
