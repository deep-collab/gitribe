import React,{useRef} from 'react';
import styles from '@/styles/Gallery.module.css';
export default function Gallery () {
    const galleryRef = useRef(null);

    const scrollLeft = ()=>{

    };

    const scrollRight = ()=>{

    };

    return(
        <div className={styles.galleryContainer}>
              
                <div className={styles.gallery} ref={galleryRef}>
                    <img src='/home.jpeg' className={styles.galleryImage} width={200} height={200}/>
                    <img src='/kids.JPG' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/projects.jpg' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/forest.jpg' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/mission.jpg' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/securerhimalaya.png' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/WomenComponent.png' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/CapacityBuildup.png' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/AccountingTraining.png' className={styles.galleryImage} width={150} height={200}/>

                </div>
              
        </div>
    )
}