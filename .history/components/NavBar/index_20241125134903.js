import styles from './NavBar.module.css';

export default function NavBar() {

    return (
        <>
            <div className="nav-container">
                <div className="logo-img">
                    <a href="/" className={styles.link}><img src="/Beep-logo.svg" alt="beep logo" width={50} height={50}/></a>
                </div>
                <div>
                    <ul className="navLinks">
                        <li><a href="https://beep-vlog.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAaaCHucClo6VqehpxFYvfGwkRj1ENb8geTZp1p73uOZQf9GaIfHsj6LnWIw_aem_tNBp13fy_xXuCapluECM9A" className={styles.link}>Blog</a></li>
                        <li><a href="/" className={styles.link}>How It Works</a></li>
                        <li><a href="/" className={styles.link}>FAQ</a></li>
                        <li><a href="/" className={styles.link}>Contacts</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
