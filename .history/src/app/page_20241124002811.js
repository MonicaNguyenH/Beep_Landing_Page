import styles from "./styles/index.css"
import NavBar from "../../components/NavBar";
import ImgBtn from "../../components/ImgBtn";

export default function Home() {
  return (
    <>
      <main className="main">
        <NavBar />
        <header className="header-container">
          <h1>Our Safety, Empowered: Real-Time Crime Maps & Emergency Tools</h1>
          <p>Beep combines smart technology and real-time data to help you navigate your world with confidence</p>
          <button>Get Started →</button>
        </header>

        <div className="pull-p">
          <p className="big-text">Our team of <span className="text-grey">full-stack</span> <span className="text-purple">developers</span>, 
            and  <span className="text-grey">digital</span> <span className="text-purple">designers</span> work tirelessly to create tools that keep you <span className="text-grey">informed</span>, <span className="text-grey">protected</span>, and <span className="text-grey">empowered</span> 
            <span className="text-purple"> every step of the way</span>.
          </p>
          <p className="small-text">We provide reliable tools and features designed to ensure your safety and peace of mind every step of the way.</p>
        </div>

        <div className="offer-imgs">
          <img src="/WhatWeOffer/UserAssurance.png" alt="User Assurance"/>
          <img src="/WhatWeOffer/SimplifiedSafetyActions.png" alt="Simplified Safety Actions"/>
          <img src="/WhatWeOffer/TrustandTransparency.png" alt="Trust and Transparency"/>
        </div>
        
        <div>
          <ImgBtn />
        </div>

        <div className="download">
          <div>
            <h1>Download Beep App</h1>
            <p>
              Beep is a cutting-edge safety app designed to provide real-time insights and tools to keep you secure. 
              Perfect for anyone prioritizing personal safety, 
              Beep combines AI-powered navigation with intuitive features to help you stay aware and protected. 
              Whether it's navigating safely at night, responding swiftly to emergencies, 
              or finding secure nearby locations, Beep is your ultimate companion for peace of mind.
            </p>
            <button>Get Started →</button>
          </div>
          
        </div>
      </main>
    </>
  );
}