"use client";

import { useState } from "react";

export default function ImgBtn() {
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

  return (
    <div className="img-btn-container">
      <h1 className="heading">How Beep Works</h1>
      <p className="description">
        Explore how Beep’s powerful tools keep you safe, informed, and connected at all times.
      </p>

      <div className="layout">
        {/* Buttons 1 and 2 */}
        <div className="button-group-1">
          {screens.slice(0, 2).map((screen) => (
            <div
              key={screen.id}
              onClick={() => setActiveScreen(screen.id)}
              className="step-1"
            >
              <div
                className={`step-number-1 ${
                  activeScreen === screen.id ? "active-number-1" : ""
                }`}
              >
                {screen.id}
              </div>
              <div>
                <h3 className="step-title-1">{screen.title}</h3>
                <p className="step-description-1">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image in the middle */}
        <div className="image-container">
          {screens.map((screen) => (
            <div
              key={screen.id}
              className={`image-wrapper ${
                activeScreen === screen.id ? "visible" : "hidden"
              }`}
            >
              <img src={screen.image} alt={screen.title} className="image" />
            </div>
          ))}
        </div>

        {/* Buttons 3 and 4 */}
        <div className="button-group-2">
          {screens.slice(2, 4).map((screen) => (
            <div
              key={screen.id}
              onClick={() => setActiveScreen(screen.id)}
              className="step-2"
            >
              <div
                className={`step-number-2 ${
                  activeScreen === screen.id ? "active-number-2" : ""
                }`}
              >
                {screen.id}
              </div>
              <div>
                <h3 className="step-title-2">{screen.title}</h3>
                <p className="step-description-2">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
