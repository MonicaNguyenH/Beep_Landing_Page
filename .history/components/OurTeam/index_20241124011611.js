import React, { useState } from "react";
import styles from "./OurTeam.module.css"; 

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
    <section className={styles.teamSection}>
      <h2 className={styles.title}>Meet our team</h2>
      <p className={styles.description}>
        Meet the innovative BCIT's full-stack developers and digital designers
        who make up Beep's dedicated crew.
      </p>
      <div className={styles.carousel}>
        {/* Left Arrow */}
        <button
          className={`${styles.arrow} ${styles.leftArrow}`}
          onClick={() => handleArrowClick("left")}
          disabled={currentIndex === 0}
        >
          ◀
        </button>

        {/* Cards */}
        <div className={styles.trackWrapper}>
          <div
            className={styles.track}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {teamMembers.map((member, index) => (
              <div className={styles.card} key={index}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.image}
                />
                <div className={styles.info}>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className={`${styles.arrow} ${styles.rightArrow}`}
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
