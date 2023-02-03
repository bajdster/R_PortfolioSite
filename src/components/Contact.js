import classes from "./Contact.module.css"
import phone from "../images/phone.png"
import linkedin from "../images/in.png"
import github from "../images/github.png"
import email from "../images/email.png"
import { useEffect, useState } from "react"

const Contact = () =>
{
    const [copyInfo, setCopyInfo] = useState(false)

    function copyToClipboard(e)
    {
        setCopyInfo(true);
        navigator.clipboard.writeText(e.target.getAttribute("data-content"))
    }

    useEffect(()=>
    {
        const timer = setTimeout(()=>
        {
            setCopyInfo(false)
        }, 2000)

        return ()=>
        {
            clearTimeout(timer)
        }
    }, [copyInfo])


    return <>
        <div className={classes.contactCta} data-aos="fade-up">
            <h2>FEEL FREE TO CONTACT ME !</h2>
        </div>
        <div className={classes.contactBox}
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom">
            <div className={classes.contactItem}>
                <div className={classes.image}>
                    <img src={phone} alt="phone icon"></img>
                </div>
                <div className={classes.contactDesc}>
                    <h3 onClick={copyToClipboard} data-content="794341888">Phone</h3>
                </div>
            </div>
            <div className={classes.contactItem}>
                <div className={classes.image}>
                    <img src={email} alt="email icon"/>
                </div>
                <div className={classes.contactDesc}>
                    <h3 onClick={copyToClipboard} data-content="michal.bajda94@gmail.com">E-mail</h3>
                </div>
            </div>
            <div className={classes.contactItem}>
                <div className={classes.image}>
                        <img src={linkedin} alt="linkedin icon"/>
                    </div>
                    <div className={classes.contactDesc}>
                        <h3><a href="https://www.linkedin.com/in/michal-bajda" target="_blank">LinkedIn</a></h3>
                    </div>
                </div>
            <div className={classes.contactItem}>
                    <div className={classes.image}>
                        <img src={github} alt="github icon"/>
                    </div>
                    <div className={classes.contactDesc}>
                        <h3><a href="https://www.github.com/bajdster" target="_blank">GitHub</a></h3>
                    </div>
            </div>

            {copyInfo && <div className={classes.copyInfo}>Copied to clipboard!</div>}
        </div>

        
    </>
}

export default Contact