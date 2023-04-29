import Header from '../components/Header'
import MenuBar from '../components/MenuBar';
import QuestionBar from '../components/QuestionBar';
import styles from "../styles/Home.module.css"; 
import LanguageBarBlack from '../components/LanguageBarBlack';
import LanguageBarGray from '../components/LanguageBarGray';
import BlackBox from '../components/BlackBox';



export default function SkillsPage(){

    const intro = {
        title: "Skills and Languages", 
        description: "This page gives a brief description of the languages and skills with which I am familiar."
    }

    const javascript = {
        name: "JavaScript", 
        description: "Started learning in university in 2018. Used professionally for one year at Go1. One of my most confident languages. Used in Web Design and Game Development. Frequently used both inside and outside of the Node.js framework."
    }

    const react = {
        name: "React",
        description: "Learned in 2021, used professionally for a year. Used in combination with other modules including Next.js, and Redux.js. Next is a really useful module as it makes the code look cleaner and makes functional react easier to use. Redux allows data to move more freely through your react application."
    }

    const python = {
        name: "Python", 
        description: "Started in 2014. First language I learned; started learning in high school and was one of the main languages I used in college. I used it for many applications including plotting math graphs, web development in Django, cyber security, and advanced algorithms."
    }

    const java = {
        name: "Java", 
        description: "Began using in 2017 when my program of study at USU changed from C++ to Python and Java. As a tutor I taught many lessons in Java including lessons on Minecraft modding."
    }

    const html = {
        name: "HTML", 
        description: "Learned in 2018 alongside Javascript. Most of my knowledge of both HTML and CSS came from knowing JavaScript. Recently my knowledge of HTML and CSS has dramatically increased because of practicing and learning React."
    }

    const css = {
        name: "CSS", 
        description: "See HTML above."
    }

    const git = {
        name: "Git",
        description: "Started using in 2018; I consider myself proficient." 
    }

    const cpp = {
        name: "C++", 
        description: "Learned in 2014. I had four semesters or two years of classses in C++ before the program at my University changed to Python and Java."
    }

    const cSharp = {
        name: "C#", 
        description: "I am new to C#. My experience in C# is in Unity. I use it to write scripts for the games I make."
    }

    const unity = {
        name: "Unity", 
        description: "Unity is a game engine which I have used with a volunteer game development group."
    }

    const lua= {
        name: "Lua", 
        description: "Started using in 2021. I used Lua to teach Roblox during my time at iD Tech. I am proficient at it because it was one of the main languages I taught."
    }

    const other = {
        name: 'Other', 
        description: "Other languages I know are: SQL in PostgreSQL, Django, and Android Studio."
    }

    return(
        <div className={styles.mainBody}>
        <MenuBar/>
        <div className={styles.body}>
            <Header/>
            <BlackBox info={intro}></BlackBox>
            <LanguageBarGray info={javascript}></LanguageBarGray>
            <LanguageBarBlack info={react}/>
            <LanguageBarGray info={python}/>
            <LanguageBarBlack info={java}/>
            <LanguageBarGray info={html}/>
            <LanguageBarBlack info={css}/>
            <LanguageBarGray info={git}/>
            <LanguageBarBlack info={cpp}/>
            <LanguageBarGray info={cSharp}/>
            <LanguageBarBlack info={unity}/>
            <LanguageBarGray info={lua}/>
            <LanguageBarBlack info={other}/>

        </div>
        <QuestionBar/>
        </div>
    )
}