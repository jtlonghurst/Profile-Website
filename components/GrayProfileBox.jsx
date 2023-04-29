import styles from "../styles/Basic.module.css"; 
import homeStyles from "../styles/Home.module.css"; 
import Link from "next/link"; 
import { Carter_One } from "next/font/google";
import Image from "next/image";

// a box with symbols at the bottom for social media links. 
const carterOne = Carter_One({subsets:['latin'], weight: '400'}); 


export default function GrayProfileBox({info}){

    const linkedIn = "https://www.linkedin.com/in/jace-longhurst/"; 
    const github = "https://github.com/jtlonghurst"; 

    return(
        <div className={styles.grayBox}>
            <h1 className={`${carterOne.className} ${styles.boxHeader}`}>{info?.title}</h1>
            <p className={`${homeStyles.paragraph} ${styles.boxParagraph}`}>{info?.description}</p>
            <div className={styles.linkBox}>
            <div className={styles.innerLinkBox}>
            <Link href={linkedIn}>
                <Image src={"/linkedIn.png"} alt={"linkedIn"} height={100} width={100}></Image>
            </Link>
            <Link href={github}>
                <Image src={"/github.png"} alt={"github"} width={100} height={100} ></Image>
            </Link>
            </div>
            </div>
        </div>
    )
}