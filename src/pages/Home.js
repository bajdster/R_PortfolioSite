import classes from "./Home.module.css"
import mb from "../images/mb.png"
import { useEffect, useState } from "react"
import phone from "../images/phone.png"
import email from "../images/email.png"
import { useLocation } from "react-router-dom"

const Home = () =>
{

    let interval;
    let letterIndex = -1;
    let wordIndex = 0;
    
    const greetings = ["Dear Guest!", "Dear Programmer!", "Dear Employer!", "Dear Designer!", "Dear Co-Worker!"]

    const [actualGreet, setActualGreet] = useState('')
    const location = useLocation()

    useEffect(()=>
    { 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        interval = setInterval(()=>
        {            
            const actualWord = greetings[wordIndex]
            const len = actualWord.length
            letterIndex = letterIndex+1;
            
            setActualGreet((prev)=> 
            {
                return prev+actualWord[letterIndex]
            })
            if(len<=letterIndex)
            {
                setActualGreet("")
                letterIndex = -1;
                wordIndex++;
                if(wordIndex>=greetings.length)
                {
                    wordIndex= 0;
                }
            }
           
        }, 100 + (Math.random()*300))

        return ()=>
        {
            clearInterval(interval)     
        }
    },[location.pathname])

    return <>
        <section className={classes.mainView}>
            <div className={classes.description}>
                <h1 className={classes.greeting}>{actualGreet}</h1>
                <p>
                    I'm <span>Michał</span> and I will help you to appear in the Internet.
                </p>
                <p>
                    Welcome to my <span>website</span>, if you want to know me and my work then make yourself at home.
                </p>
            </div>
            <div className={classes.mainPhoto}>
                <img src={mb} alt="shows the creator of the site"></img>
            </div>
            <footer><span className={classes.footerIcon}><img src = {phone}></img></span>tel: 794-341-888 <span className={classes.footerIcon}><img src={email}></img></span>e-mail: michal.bajda94@gmail.com</footer>
        </section>
        
    </>
}

export default Home