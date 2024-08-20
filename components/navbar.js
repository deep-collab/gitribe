import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Navbar (){
    const router = useRouter();
    return(
        <div className="navbar" style={{}}>
        <nav className={`${styles.mainnav}`}>
                <ul>
                    
                  <div className={styles.navbar_body}>
                        <Link href={'/'}>
                            <div className={styles.logoContainer}>
                            
                                <p className={styles.logoname}>Abhilasha Samiti</p>
                            </div>
                        </Link>

                        <div className={styles.pageContainer}>
                            <Link href={'/AboutUs'} className={router.pathname === '/AboutUs' ? styles.signupdiv_active : styles.signupdiv}>
                                <p className={styles.signuptext}>About Us</p>
                            </Link>
                            <Link href='/Projects' className={router.pathname === '/Projects' ? styles.signupdiv_active : styles.signupdiv}>
                                <p className={styles.signuptext}>Projects</p>
                            
                            </Link>
                            <Link href="/GetInvolved"className={router.pathname === '/GetInvolved' ? styles.signupdiv_active : styles.signupdiv}>
                                <p className={styles.signuptext}>Get Involved</p>
                            </Link>
                        
                            <Link href="/ContactUs" className={router.pathname === '/ContactUs' ? styles.signupdiv_active : styles.signupdiv} >
                                <p className={styles.signuptext}>Contact Us</p>
                                
                            </Link>
                        </div>

                    </div>

                </ul>
        </nav>
        </div>
    )
}