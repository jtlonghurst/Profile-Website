import { useState } from 'react';
import { Carter_One } from 'next/font/google';
import styles from "../styles/Home.module.css"; 
import { BsQuestionCircle} from "react-icons/bs";
import Link from 'next/link';

//The menu that appears on the right side of every page. 

const carterOne = Carter_One({subsets:['latin'], weight:'400'})

export default function QuestionBar(){
    const [isOpen, setIsOpen] = useState(); 

    function openMenu(){
        setIsOpen(!isOpen); 
    }

    const menus = [
        {
            title: "Profile",
            link: "https://www.linkedin.com/in/jace-longhurst/" 
        }, 
    ]

    return(
        isOpen?
        <div className={styles.openMenu}>
            <BsQuestionCircle size={'100%'} onClick={openMenu}/>
            <div>
                <ul className={styles.menuList}>
                    {menus.map((menuObjects)=>(<li key={menuObjects.title}><Link href={menuObjects.link} className={`${styles.menuIcon} ${carterOne.className}`}>{menuObjects.title}</Link></li>))}
                </ul>
            </div>
        </div>
        :<div className={styles.menuBar}>
            <BsQuestionCircle size={'100%'} onClick={openMenu}/>
        </div>
    )
}