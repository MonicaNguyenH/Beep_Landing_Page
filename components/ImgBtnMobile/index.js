"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ImgBtnMobile.module.css";

export default function ImgBtnMobile() {
  const [activeScreen, setActiveScreen] = useState(1);

  const screens = [
    {
      id: 1,
      title: "Real-Time Crime Maps",
      description: "Stay informed with live updates on crime hotspots, helping you avoid unsafe areas and navigate confidently.",
      image: "/Mockup/Crime-map.png",
    },
    {
      id: 2,
      title: "SOS Alarm Alert",
      description: "Activate a loud SOS alarm to deter threats and instantly alert emergency contacts.",
      image: "/Mockup/Emergency.png",
    },
    {
      id: 3,
      title: "Snapshot",
      description: "Snap enables users to pin media, document incidents, share with contacts, and access media history.",
      image: "/Mockup/Snapshot.png",
    },
    {
      id: 4,
      title: "Instant Emergency SMS",
      description: "Instantly send an SMS alert with your live location to your emergency contacts.",
      image: "/Mockup/SMS.png",
    },
  ];

  useEffect(() => {
    // Preload images
    screens.forEach((screen) => {
      const img = new Image();
      img.src = screen.image;
    });
  }, []);

  return (
    <section className={styles.imgBtnContainer}>
      <h1 className={styles.heading}>How Beep works</h1>
      <p className={styles.description}>
        Explore how Beep’s powerful tools keep you safe, informed, and connected at all times.
      </p>

      {/* Buttons */}
      <div className={styles.buttonGroupMobile}>
        {screens.map((screen) => (
          <div
            key={screen.id}
            className={`${styles.stepMobile} ${activeScreen === screen.id ? styles.activeStep : ""}`}
            onClick={() => setActiveScreen(screen.id)}
          >
            <div
              className={`${styles.stepNumberMobile} ${
                activeScreen === screen.id ? styles.activeNumber : ""
              }`}
            >
              {screen.id}
            </div>
          </div>
        ))}
      </div>

      {/* Image and Text */}
      <div className={styles.imageContainer}>
        <AnimatePresence>
          {screens.map(
            (screen) =>
              activeScreen === screen.id && (
                <motion.div
                  key={screen.id}
                  className={styles.imageContent}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={screen.image}
                    alt={screen.title}
                    width="211"
                    height="437"
                  />
                  <h3 className={styles.imageTitle}>{screen.title}</h3>
                  <p className={styles.imageDescription}>{screen.description}</p>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
