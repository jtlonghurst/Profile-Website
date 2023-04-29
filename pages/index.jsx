import Link from "next/link";
import Header from "../components/Header"; 
import ImageLeft from "../components/ImageLeft"; 
import ImageRight from "../components/ImageRight"; 
import MenuBar from "../components/MenuBar"; 
import QuestionBar from "../components/QuestionBar"; 
import styles from "../styles/Home.module.css"; 
import { useEffect, useState } from 'react';
import BlackBox from "../components/BlackBox";


const sizes = {
    imageSize: '512',
    smallPicSize: 1200, 
}




/*TODO: 
    > Create an image box that can scroll through multiple photos.   
    > clean up the code 
    > Possibly get the menu to stop disappearing on mobile. 
    >  */

export default function HomePage(){
    const [screenSize, setScreenSize] = useState(); 
    const [pictureSize, setPictureSize] = useState(sizes.imageSize); 
  
    //This will allow the pictures to disapear on screens where they don't fit. 
    //This use effect is mostly to keep track of the size of the screen. 
    useEffect(()=>{
        //This function is going to be attached as an event listener. 
        function resize(){
            setScreenSize(window.outerWidth);
        }


        window.addEventListener('resize', resize); 
        //console.log("added eveTnt listener"); 
        setScreenSize(window.outerWidth); 
        
      
        return function cleanup(){
            //removing the attached event listener to cleanup. 
            window.removeEventListener('resize', resize);
            console.log("Event Listener Removed.") 

        }
    }, []); 

    const intro = {
        title: "Introduction", 
        description: "This site is an extension of my resume. A resume is a great way to show information and experience, however it often lacks important details. Please take the opportunity to view this website as a preliminary interview. It dives a little more into who I am and gives you a peek into my values rather than just my experience." // I hope you enjoy this deep dive into my accomplishments as a developer.", 
    }

    const profile = {
        title: "Who am I? ",
        description: `My name is Jace Longhurst, I have a Bachelors of Science in Computer Science from Utah State University with minors in Mathematics and Russian.`, 
        img: "/me.jpg", 
        link: " Click Here for more general information about me.", 
        linkAddress: "/about",
        alt: "Me", 
    }

    const languages = {
        title: "Skills", 
        description: `The programming languages with which I have professional experience are: JavaScript, TypeScript, and React. I am also proficient with other languages such as Python, Java, and C++.`, 
        img: "/code1.png",
        link:" Click Here for more details.", 
        linkAddress: "/skills",
        alt: "Languages"
    }
    //
    const experience = {
        title: "Experience", 
        description: "My time in previous positions has helped me to grow as an employee, developer, and person. ", 
        img: "/graduation.jpg", 
        link: "Click Here to learn more!", 
        linkAddress: "/exp",
        alt: "Experience", 
    }

    return (
        <div className={styles.mainBody}>
           <MenuBar/>
            <div className={styles.body}>
                <Header/>
                <BlackBox info={intro}/>
                <ImageLeft info={profile} screenSize={screenSize} picSize={pictureSize} defaultSizes={sizes}/>
                <ImageRight info={languages} screenSize={screenSize} picSize={pictureSize} defaultSizes={sizes}/>
                <ImageLeft info={experience} screenSize={screenSize} picSize={pictureSize} defaultSizes={sizes}/>
            </div>
            <QuestionBar/>
        </div>
    )
}