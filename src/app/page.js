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
      </main>
    </>
  );
}
