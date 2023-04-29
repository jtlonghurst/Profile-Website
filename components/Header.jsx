import { useEffect, useState } from 'react';
import { Changa } from "next/font/google";
import styles from "../styles/Home.module.css"; 

//Header at the top of every page

const changa = Changa({subsets: ['latin']});

export default function Header(){
    return <h1 className={`${styles.header} ${changa.className}`}> Jace Longhurst</h1>

}