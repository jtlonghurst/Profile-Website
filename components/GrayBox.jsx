import styles from "../styles/Basic.module.css"; 
import homeStyles from "../styles/Home.module.css"; 
import { Carter_One } from "next/font/google";

//Basic box for information, but gray. 

const carterOne = Carter_One({subsets:['latin'], weight:'400'}); 

export default function GrayBox({info}){
    return(
        <div className={styles.grayBox}>
            <h1 className={`${carterOne.className} ${styles.boxHeader}`}>{info?.title}</h1>
            <p className={`${homeStyles.paragraph} ${styles.boxParagraph}`}>{info?.description}</p>
        </div>
    )
}