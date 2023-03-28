
import classes from "./About.module.css"
import mb from "../images/mb2.jpg"
import Skill from "../components/Skill"
import Description from "../components/Description"
import Experience  from "../components/Experience"

import cypress from "../images/cypress.png"
import css from "../images/css.png"
import html from "../images/html.png"
import git from "../images/git.png"
import jira from "../images/jira.png"
import js from "../images/js.png"
import wordpress from "../images/wordpress.png"
import postman from "../images/postman.png"
import selenium from "../images/selenium.png"
import react from "../images/react.png"
import Contact from "../components/Contact"
import sass from "../images/sass.png";
import typescript from "../images/typescript.png"
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"


const About = () =>
{

    const skills = [
        {
            lang: "HTML",
            since: "2021-01-01",
            image: html
        },
        {
            lang: "CSS",
            since: "2021-01-01",
            image: css
        },
        {
            lang:"JavaScript",
            since: "2022-04-01",
            image: js
        },
        {
            lang: "React",
            since: "2022-10-23",
            image:react
        },
        {
            lang: "Typescript",
            since: "2023-03-10",
            image:typescript
        },
        {
            lang: "Sass",
            since: "2023-02-22",
            image:sass
        },
        {
            lang: "WordPress",
            since:"2020-01-01",
            image: wordpress
        },
      
    ]

    const tech = [
        {
            lang: "Cypress",
            image:cypress
        },
        {
            lang: "Jira",
            image:jira
        },
        {
            lang: "Git",
            image:git
        },
        {
            lang: "Selenium",
            image:selenium
        },
        {
            lang: "Postman",
            image:postman
        },
    ]

    useEffect(()=>
    {
        AOS.init({duraton: 2000})
    }, [])


    return <section className={classes.sectionAbout}>

        <div className={classes.aboutMe}>
            <div className={classes.me} data-aos="flip-up">
                <div className={classes.image}>
                    <img src={mb} alt="Author of page"></img>
                </div>
                <div className={classes.desc}>
                    <h2>Michał Bajda</h2>
                    <h3>Front-end Developer</h3>
                    <h3>Sortware Tester</h3>
                </div>
            </div>

            <div className={classes.description} data-aos="fade-up">
             <Description/>
            </div>
            


            <div className={classes.skills}>
            <h2 data-aos="flip-down">Coding experience</h2>
                <Skill skills = {skills} tech={tech} />
            </div>     
        </div>

        <Experience/>
        
        <Contact/>
    </section>
}

export default About 