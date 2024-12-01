"use client";

import styles from "./NavBar.module.css";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logoImg}>
          <a href="/" className={styles.link}>
            <img src="/Beep-logo.svg" alt="beep logo" width={50} height={50} />
          </a>
        </div>

        {/* Hamburger Menu */}
        <div
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <img src="./navbar/hamburger.svg" alt="menu" />
        </div>

        {/* Navigation Links */}
        <ul
          className={`${styles.navLinks} ${
            isMenuOpen ? styles.showMenu : styles.hideMenu
          }`}
        >
          <li>
            <a
              href="https://beep-vlog.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAaaCHucClo6VqehpxFYvfGwkRj1ENb8geTZp1p73uOZQf9GaIfHsj6LnWIw_aem_tNBp13fy_xXuCapluECM9A"
              className={styles.link}
            >
              Blog
            </a>
          </li>
          <li>
            <a href="#how-it-works" className={styles.link}>
              How It Works
            </a>
          </li>
          <li>
            <a href="/" className={styles.link}>
              FAQ
            </a>
          </li>
          <li>
            <a href="/" className={styles.link}>
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
