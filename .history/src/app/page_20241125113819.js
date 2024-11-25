import styles from "./styles/index.css"
import NavBar from "../../components/NavBar";
import ImgBtn from "../../components/ImgBtn";
import OurTeam from "../../components/OurTeam";

export default function Home() {
  return (
    <>
      <main className="main">
        <NavBar />
        <header className="header-container">
          <h1>Our Safety, Empowered: Real-Time Crime Maps & Emergency Tools</h1>
          <p>Beep combines smart technology and real-time data to help you navigate your world with confidence</p>
          <button className="get-started-btn">Get Started →</button>
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

        <div className="download-container">
          <div className="download-text">
            <h1>Download Beep App</h1>
            <p>
              Beep is a cutting-edge safety app designed to provide real-time insights and tools to keep you secure. 
              Perfect for anyone prioritizing personal safety, 
              Beep combines AI-powered navigation with intuitive features to help you stay aware and protected. 
              Whether it's navigating safely at night, responding swiftly to emergencies, 
              or finding secure nearby locations, Beep is your ultimate companion for peace of mind.
            </p>
            <button className="get-started-btn">Get Started →</button>
          </div>
          <div className="download-img">
            <img src="/Download/phone-mockup.png" alt="Phone mockup map screen" />
          </div>
        </div>

        <div className="our-team">
            <OurTeam />
        </div>

        <footer className="footer">
          <div className="footer-1">
            <img src="/Beep-logo.svg" alt="Beep logo"/>
            <h5>Copyrights ® 2024 Beep</h5>
            <p>We’re based in Vancouver, Canada where our journey to enhance safety first began. 
              As part of a passionate and innovative community
              , we’re committed to creating tools that empower and protect every step of the way. </p>
          </div>
          <div className="footer-2">
            <p>Stay connected with Beep and get the latest updates on safety features, new tools, and exclusive insights. 
              Enter your email to join our community and stay informed!
            </p>
            <div>
              <input 
                input type="email" 
                placeholder="Email" 
                required
              />
              <button>Subscribe</button>
            </div>
            <div>
              <div className="col">
                <h5>Products</h5>
                <ul className="list">
                  <li className="list-item">Our Values</li>
                  <li className="list-item">Features</li>
                  <li className="list-item">Download Beep</li>
                </ul>
              </div>

              <div className="col">
                <h5>About</h5>
                <ul className="list">
                  <li className="list-item">Our Team</li>
                  <li className="list-item">Blog</li>
                  <li className="list-item">Contacts</li>
                </ul>
              </div>

              <div className="col">
                <h5>Social Media</h5>
                <ul className="list">
                  <li className="list-item">Instagram</li>
                  <li className="list-item">Facebook</li>
                  <li className="list-item">LinkedIn</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
