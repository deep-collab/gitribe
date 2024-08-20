import React,{useRef} from 'react';
import styles from '@/styles/DocumentGallery.module.css';
export default function DocumentGallery () {
    const galleryRef = useRef(null);

    const scrollLeft = ()=>{

    };

    const scrollRight = ()=>{

    };

    return(
        <div className={styles.galleryContainer}>
              
                <div className={styles.gallery} ref={galleryRef}>
                  
                            <div className={styles.galleryImage_div}>
                                <img src='/family.png' className={styles.galleryImage} width={200} height={200}/>
                                <p className={styles.galleryName}>12 A Abhilasha Samiti</p>
                            </div>
                            <div className={styles.galleryImage_div}>
                                <img src='/child.png' className={styles.galleryImage} width={150} height={200}/>
                                <p className={styles.galleryName}>Work Profile</p>
                            </div>
                            <div className={styles.galleryImage_div}>
                                <img src='/teach.png' className={styles.galleryImage} width={150} height={200}/>
                                <p className={styles.galleryName}>Registration Certificate</p>
                            </div>
                            <div className={styles.galleryImage_div}>
                                <img src='/village.png' className={styles.galleryImage} width={150} height={200}/>
                                <p className={styles.galleryName}>CSR Certificate</p>
                            </div>
                            <div className={styles.galleryImage_div}>
                                <img src='/school.png' className={styles.galleryImage} width={150} height={200}/>
                                <p className={styles.galleryName}>Annual Report 2020-21</p>
                            </div>
                            <div className={styles.galleryImage_div}>
                                <img src='/festival.png' className={styles.galleryImage} width={200} height={200}/>
                                <p className={styles.galleryName}>Annual Report 2021-22</p>
                            </div>
                            <div className={styles.galleryImage_div}>
                                <img src='/path.png' className={styles.galleryImage} width={200} height={200}/>
                                <p className={styles.galleryName}>Annual Report 2022-23</p>

                            </div>
                    
                </div>
              
        </div>
    )
}