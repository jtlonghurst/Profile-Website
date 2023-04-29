import { useEffect, useState } from 'react';
import { Changa, Carter_One } from "next/font/google";
import styles from "../styles/Home.module.css"; 
import Image from 'next/image';
import Link from 'next/link';

//Information box with image on the right. 

const carterOne = Carter_One({subsets:['latin'], weight:'400'}); 

export default function ImageRight({info, screenSize, picSize, defaultSizes}){
    return (
        <div className={styles.imageRight}>
            <div className={styles.textComponent}>
                <h2 className={`${carterOne.className} ${styles.imageHeader}`}>
                    {info?.title}
                </h2>
                <p className={`${styles.paragraph} ${styles.imageParagraph}`}>
                    {info?.description}
                    {(info?.link && info?.linkAddress) && <Link href={info?.linkAddress} className={styles.link}>{info?.link}</Link>}
                </p>
            </div>
            {screenSize>defaultSizes?.smallPicSize &&
            <div className={styles.imageComponent}>
            {
                (info?.link && info?.linkAddress)?
                <Link href={info?.linkAddress}>
                    <Image className={styles.image} src={info.img} alt={info.alt} width={picSize} height={picSize}></Image>
                </Link>        
                :<Image className={styles.image} src={info.img} alt={info.alt} width={picSize} height={picSize}></Image>
            }
            </div>}
        </div>);     
}