import { useState } from 'react';
import styles from "../styles/Home.module.css"; 
import Link from 'next/link';
import { BsList} from "react-icons/bs";
import { Carter_One } from 'next/font/google';

//The menu that appears on the left side of every page. 

const carterOne = Carter_One({subsets:['latin'], weight:'400'})

export default function MenuBar(){
    const [isOpen, setIsOpen] = useState(); 

    function openMenu(){
        setIsOpen(!isOpen); 
    }

    const menus = [
        {
            title: "Home", 
            link: "/"
        },
        {
            title: 'About Me',
            link: '/about'
        }, 
        {
            title: "Skills", 
            link: '/skills'
        }, 
        {
            title: "Experience", 
            link: '/exp'
        }]

    return(
        isOpen?
            <div className={styles.openMenu}>
                <div>
                    <ul className={styles.menuList}>
                        {menus.map((menuObjects)=>(<li key={menuObjects.title} ><Link href={menuObjects.link} className={`${styles.menuIcon} ${carterOne.className}`}>{menuObjects.title}</Link></li>))} 
                    </ul>
                </div>
                {<BsList style={styles.BsLIst} size={'100%'} onClick={openMenu}/>}
            </div>:
            <div className={styles.menuBar}>
                <BsList className={styles.BsList} size={'100%'} onClick={openMenu}/>
            </div>
    )
}