import React,{useRef} from 'react';
import Link from 'next/link';
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
                  
                            <Link className={styles.galleryImage_div} href="https://drive.google.com/file/d/1l4d1HR4Uv84SCTjc0Hzsl67WIkJU4pbx/view?usp=sharing" target='_blank' rel="noopener noreferrer">
                               
                                    <img src='/family.png' className={styles.galleryImage} width={200} height={200}/>
                                    <p className={styles.galleryName}>12 A Abhilasha Samiti</p>
                               
                            </Link>
                            <Link className={styles.galleryImage_div} href="https://drive.google.com/file/d/1FuKyk3N18U--AWZrtkwDxIr-DIxrNV8Z/view?usp=sharing" target='_blank' rel='noopener noreferer'>
                                <img src='/child.png' className={styles.galleryImage} width={150} height={200}/>
                                <p className={styles.galleryName}>Work Profile</p>
                            </Link>
                            <Link className={styles.galleryImage_div} href="https://drive.google.com/file/d/1N038cQFEsUaFjlDpDus7eSetjzSv6WTd/view?usp=sharing" target='_blank' rel='noopener noreferer'>
                                <img src='/teach.png' className={styles.galleryImage} width={150} height={200}/>
                                <p className={styles.galleryName}>Registration Certificate</p>
                            </Link>
                            <Link className={styles.galleryImage_div} href="https://drive.google.com/file/d/1Kn6NTm-3EoVKlTy3RVIZyO_dSwR9CFwF/view?usp=sharing" target='_blank' rel='noopener noreferer'>
                                <img src='/village.png' className={styles.galleryImage} width={150} height={200}/>
                                <p className={styles.galleryName}>CSR Certificate</p>
                            </Link>
                            <Link className={styles.galleryImage_div} href={"https://drive.google.com/file/d/1PQGqLOBxuBu6DfyiD4g76cjpjCAEM7uq/view?usp=sharing"} target='_blank' rel='noopener noreferer'>
                                <img src='/school.png' className={styles.galleryImage} width={150} height={200}/>
                                <p className={styles.galleryName}>Annual Report 2020-21</p>
                            </Link>
                            <Link className={styles.galleryImage_div} href={"https://drive.google.com/file/d/11ORJuht8q_2h-vzjMDl7oA0Zghv9mwgo/view?usp=sharing"} target='_blank' rel='noopener noreferer'>
                                <img src='/festival.png' className={styles.galleryImage} width={200} height={200}/>
                                <p className={styles.galleryName}>Annual Report 2021-22</p>
                            </Link>
                            <Link className={styles.galleryImage_div} href={"https://drive.google.com/file/d/1FdaexbbIE7LSJKrI4bSwFs7Y4xAFEXrO/view?usp=sharing"} target='_blank' rel='noopener noreferer'>
                                <img src='/path.png' className={styles.galleryImage} width={200} height={200}/>
                                <p className={styles.galleryName}>Annual Report 2022-23</p>

                            </Link>
                    
                </div>
              
        </div>
    )
}