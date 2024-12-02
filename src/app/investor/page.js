import NavBar from "../../../components/NavBar";
import styles from "./Investor.module.css";


export default function Investor() {
  return (
    <>
      <div className={styles.page} >
        <header className={styles.navContainer}>
          <NavBar />
        </header>
        <main>
        <div className={styles.mainContent}>
            <div className={styles.textContent}>
                <h1>Drive Impact, Profit, and Change with Beep</h1>
                <p>
                    Beep combines smart technology and real-time data to help you
                    navigate your world with confidence
                </p>
                <button className={styles.getStartedBtn}>Get Started →</button>
            </div>
            <div className={styles.formSection}>
                <div>
                <h2>Ready to Make an Impact?</h2>
                <p>Fill Out the Form Below</p>
                </div>
                <form>
                    {/* Name Fields */}
                    <div className={styles.nameInput}>
                        <div>
                        <label>First Name</label>
                        <input classNem={styles.firstName} type="text" placeholder="First Name" required />
                        </div>
                        <div>
                        <label>Last Name</label>
                        <input classNem={styles.firstName} type="text" placeholder="Last Name" required />
                        </div>
                    </div>

                    {/* Email Address */}
                    <div>
                    <label>Email Address</label>
                    <input type="email" placeholder="Email Address" required />
                    </div>

                    {/* Organization/Company Name */}
                    <div>
                    <label>Organization/ Company Name <span>(optional)</span></label>
                    <input type="text" placeholder="Organization/ Company Name" />
                    </div>

                    {/* Investing Level */}
                    <div>
                    <label htmlFor="investingLevel">Investing Level <span>(optional)</span></label>
                    <select id="investingLevel" className={styles.dropdown}>
                        <option value="" disabled selected>
                        Select an amount
                        </option>
                        <option value="500">$500</option>
                        <option value="1000">$1,000</option>
                        <option value="5000">$5,000</option>
                        <option value="10000">$10,000</option>
                    </select>
                    </div>

                    {/* Message/ Inquiry */}
                    <div>
                    <label>Message/ Inquiry <span>(optional)</span></label>
                    <textarea className={styles.Message} rows="4" placeholder="Your message or inquiry"></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className={styles.buttonContainer}>
                    <button type="submit">Submit →</button>
                    </div>
                </form>
                </div>
            </div>
        </main>
        <footer className={styles.footer}>
            <div className={styles.footer1}>
                <img src="/Beep-logo.svg" alt="Beep logo"/>
                <h5>Copyrights ® 2024 Beep</h5>
                <p>We’re based in Vancouver, Canada where our journey to enhance safety first began. As part of a passionate and innovative community , we’re committed to creating tools that empower and protect every step of the way. </p>
                </div>
                <div className={styles.footer2}>
                <p>Stay connected with Beep and get the latest updates on safety features, new tools, and exclusive insights. Enter your email to join our community and stay informed!</p>
                <div className={styles.subscribe}>
                    <input input type="email" placeholder="Email" required />
                    <button>Subscribe</button>
                </div>
                <div className={styles.footerList}>
                    <div className={styles.col}>
                    <h5>Products</h5>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Our Values</li>
                        <li className={styles.listItem}>Features</li>
                        <li className={styles.listItem}>Download Beep</li>
                    </ul>
                    </div>

                    <div className={styles.col}>
                    <h5>About</h5>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Our Team</li>
                        <li className={styles.listItem}>Blog</li>
                        <li className={styles.listItem}>Contacts</li>
                    </ul>
                    </div>

                    <div className={styles.col}>
                    <h5>Social Media</h5>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Instagram</li>

                        <li className={styles.listItem}>LinkedIn</li>
                    </ul>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    </>
  );
}
