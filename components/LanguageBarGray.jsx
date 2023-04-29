import styles from "../styles/Basic.module.css"
import homeStyles from "../styles/Home.module.css"; 
import { Carter_One } from "next/font/google";

//Gray bar that is designed to be small with a language title 

const carterOne = Carter_One({subsets: ['latin'], weight: '400'})

export default function LanguageBarGray({info}){

    return( 
        <div className={styles.languageGray}>
            <h1 className={`${carterOne.className} ${styles.boxHeader}` }>{info.name}</h1>
            <p className={`${homeStyles.paragraph} ${styles.boxParagraph}`}>{info.description}</p>
        </div>
    )

}