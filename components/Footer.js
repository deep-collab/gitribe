 import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
export default function Footer (){
    return(
        <div className={styles.footerDiv}>
             <div className={styles.footerDiv_body}> 
                <div className={styles.footerDiv_top_left}>
                        <div className={styles.left_body}>
                                <h2 className={styles.left_header}>Abhilasha <br/> Samiti</h2>
                                <div className={styles.left_bottom}>
                                    <img src='/mail.png' width={30} height={30}/>
                                    <p className={styles.left_paragraph}>abhilasha.samiti@gmail.com</p>
                                </div>
                        </div>
                </div>
                <div className={styles.footerDiv_top_right}>
                    <div className={styles.link_list}>
                            <Link href={'/Volunteer'} className={styles.link}>
                                Volunteer
                            </Link>
                            <Link href={'/Volunteer'} className={styles.link}>
                                Donate
                            </Link>
                            <Link href={'/Volunteer'} className={styles.link}>
                                Intern
                            </Link>
                            <Link href={'/Volunteer'} className={styles.link}>
                                Directions
                            </Link>
                    </div>
                    <div className={styles.link_list_two}>
                            <Link href={'/AboutUs'} className={styles.link}>
                                About Us
                            </Link>
                            <Link href={'/Contact Us'} className={styles.link}>
                                Contact Us
                            </Link>
                            <Link href={'/Projects'} className={styles.link}>
                                Projects
                            </Link>
                    </div>
                </div>
            </div> 
            <div className={styles.footerDiv_bottom}>
                <div className={styles.footerDiv_bottom_body}>
                    <div className={styles.footerDiv_bottom_left}>
                            <div>
                                <img src='/copyright.png' width={25} height={25}/>
                            
                            </div>
                            <p className={styles.footerDiv_bottom_left_header}>Abhilasha Samiti</p>
                    </div>
                    <div className={styles.footerDiv_bottom_right}>
                        
                        
                        
                            <img src='/linkedin.png' className={styles.social_image} width={30} height={30}/>  
                            <img src='/facebook.png' className={styles.social_image} width={30} height={30}/>
                            <img src='/instagram.png' className={styles.social_image} width={30} height={30}/>
                            <img src='/social.png' className={styles.social_image} width={30} height={30}/>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}