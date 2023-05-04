import BlackBox from '../components/BlackBox';
import GrayBox from '../components/GrayBox';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import QuestionBar from '../components/QuestionBar';
import styles from '../styles/Home.module.css';



export default function ExpPage(){

    const intro = {
        title: "My Experience", 
        description: "This page explains my work experience in previous positions. This page will grow as I gain new experiences."
    }

    const go1 = { 
        title: "Go1 - Graduate Developer" ,
        description: "Go1 was my first job out of college. I started in Summer 2022 and ended in April 2023 due to the tech market crash. Go1 is a company based in Australia. They make a portal that has videos to help speed up the training and onboarding process of new hires. This position is equivalent to a Full Stack Junior Developer in a different company. The main languages we focused on were JavaScript, TypeScript, Next.js, React, Jest, and Redux. When I began, I worked on making new APIs to improve the company's web portal. After excelling at the job for six months I was asked to transfer to working on the website's content player, the most important part of the portal. The content player dealt with AWS Appstream. My time with Go1 ended when the entire developer team in the United States was laid off due to budget cuts, because of the tech market crash."
    }

    const idTech = {
        title: "iD Tech - Private Tutor", 
        description: "This was a summer job in 2021 just prior to my final semester at Utah State University. This company focused on online tutoring during the global Covid-19 pandemic. I taught students ages 8-17. Every lesson was unique, depending on the student's needs and experiences. Therefore, I needed to be flexible, adapt to their needs, and learn unfamiliar topics quickly. Topics I taught include: Java, JavaScript, and Lua. I was hired due to my ability to code well and was asked to pick up more languages and frameworks to teach. Skills I developed were Lua/Roblox, coding Minecraft mods in Java, and programming small digital toys. This was a high pressure teaching job because I was asked to develop my own lesson plans for each student and new students were added to my case load frequently. Often it required learning a new principle or language within a few days to fill a student's needs. I left iD Tech to focus on my senior year at Utah State University. I learned through this position that I could work hard, transition quickly, and finish tasks under pressure."
    }

    const chickFilA = {
        title: "Chick-Fil-A - Crew Member", 
        description: "This was a summer fast food job in 2020. I worked most positions in the store except making food. Some of my responsibilities included: taking orders, taking payment, organizing cars, delivering meals, restocking and prepping ingredients, and constructing orders. During winter and spring breaks, I would occasionally pick up shifts as I had time and was in town. Although I officially left in the fall of 2020 the last day I worked was closer to spring 2021. (Yes, it did take time for me to stop saying \"my pleasure\" instead of \"your welcome\" or \"no problem\" after I left.)" 
    }

    const walkersCinema = {
        title: "Walkers Cinema - Concessionaire", 
        description: "Although the name of the company is Walkers Cinema, I worked at one of their small theaters called \"Cinefour\". It was a small second-run movie theater with four theaters. I worked as a concessionaire for almost two years and a manager for about 2 months. My responsibilities included selling concessions, preparing food, cleaning movie theaters, closing up the theater at night, counting and depositing the money, taking stock, and cleaning the theater. I eventually left because I wanted to focus on my schooling and becoming a better developer. "
    }

    const otherJobs = {
        title: "Other Jobs", 
        description: "Other jobs I will briefly mention were mostly summer jobs. I would be happy to answer any questions or concerns you may have. These jobs include time at: Blue Brush as a Window Washer in 2019, REMA as Assistant Maintenance in 2018, Precision Landscaping as a Landscaper/Lawnmower in 2017 and Hires Big H as a busser from 2012 to 2014. During the time between 2015, and 2017 I was doing full time service for my church in Bulgaria, therefore no work is listed during that time."
    }

    const outsideExp = {
        title: "Experience Outside of work", 
        description: "Outside of work I contribute in a game development group. We code in Unity and are currently working on a top down dungeon crawler game. One of the biggest events in my life so far has been serving a service mission for my church in Bulgaria. I was there for two years helping to maintain and grow the church to the best of my ability. I served in several leadership positions and met many amazing people, both from Bulgaria and other parts of the world. I am an Eagle Scout. My experiences in and out of the workforce make me the person I am today."
    }

    return(
        <div className={styles.mainBody}>
        <MenuBar/>
        <div className={styles.body}>
            <Header/>
            <BlackBox info={intro}/>
            <GrayBox info={go1}/>
            <BlackBox info={idTech}/>
            <GrayBox info={chickFilA}/>
            <BlackBox info={walkersCinema}/>
            <GrayBox info={otherJobs}/>
            <BlackBox info={outsideExp}/>
        </div>
        <QuestionBar/>
        </div>
    )
}