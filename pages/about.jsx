import Header from '../components/Header'
import MenuBar from '../components/MenuBar'
import QuestionBar from '../components/QuestionBar'
import styles from '../styles/Home.module.css'
import BlackBox from '../components/BlackBox'; 
import GrayBox from '../components/GrayBox'; 
import GrayProfileBox from '../components/grayProfileBox'


export default function AboutPage(){

    const aboutInfo = {
        title: "About me",
        description: "My name is Jace Longhurst, I have a Bachelors of Science in Computer Science from Utah State University with minors in Mathematics and Russian. Additionally I am proficient in Bulgarian. I graduated from Utah State University (USU) in the winter of 2021. I consider my best languages to be JavaScript, Python, and Java. Frameworks and libraries that I am familiar with include: Node, Express.js, React.js, Next.js, Koa, Django and Jest. I am also a quick learner and capable of rapidly becoming proficient in unfamiliar languages and frameworks.  I have professional experience as a junior full-stack junior developer, and as a coding tutor. In addition to these skills I am hardworking, honest, and reliable.",
    }

    const currentPosition = {
        title: "Current Position", 
        description: "Due to circumstances in the financial tech market, I am unable to continue work in my previous position as a Graduate Developer for my previous employers Go1. I am currently looking for a position which allows me to work remotely or in the Fort Collins to Denver area. I am willing to make a longer commute if necessary. I would prefer not to leave the Colorado area.",
    }

    const hobbies = {
        title: "Hobbies", 
        description: "The personality trait that motivates my hobbies is my desire to learn. I am currently learning new Game Development skills with a volunteer game development group based in Utah. I code in Unity/C# and constantly strive to learn new aspects of the trade. In the group are artists, coders, and story tellers. Each of us give presentations to trade information and learn new skills. Among my other hobbies are running, drumming, playing the ukulele, collecting puzzles, and playing board games."
    }

    const contactMe={
        title: "Contact Information",
        description: "If you have any questions or would like to request an official resume, please reach out to me on LinkedIn. Feel free to take a look at my GitHub as well. GitHub has not been a focus of attention as I am doing most of my coding locally."
    }

    return(
        <div className={styles.mainBody}>
           <MenuBar/>
           <div className={styles.body}>
                <Header/>
                <BlackBox info={aboutInfo}/>
                <GrayBox info={currentPosition}/>
                <BlackBox info={hobbies}/>
                <GrayProfileBox info={contactMe}/>
            </div>
            <QuestionBar/>
        </div>
    )
}