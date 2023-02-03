import { useEffect, useState } from "react"
import classes from "./Skills.module.css"

const Skill = (props)=>
{
    const [startLearn, setStartLearn] = useState()
    

    useEffect(()=>
    {
        function  getTime()
        {
        const today = new Date().getTime()
        const sinces = props.skills.map(skill=> today - Date.parse(skill.since))
        const dates = sinces.map(milisec =>
            {
                let months = Math.floor(milisec/1000/60/60/24/30)
                const years = Math.floor(months/ 12)
                months = months %12
                return {months: months, years: years}
            })
            console.log(dates)
            console.log("setting")
            if(dates)
            {
                setStartLearn(dates)
            }
            if(startLearn)
            {
                return
            }
            
            //jak sie da startLearn to odświeża sie jak pojebane non stop...
        }

        getTime()
        

    }, [props.skills])



    return <>
    <div className={classes.skillsBox}>
        {props.skills.map((skill, index) => 
        {

            let years = startLearn ? startLearn[index].years : ""
            let months = startLearn ? startLearn[index].months : ""

            const yearsEnding = years > 1 ? "years" : "year"
            const monthsEnding = months > 1 ? "months" : "month"
    

           return (<div className={classes.skill} data-aos="flip-down" key={index}>
                <h3>{skill.lang}</h3>
                <div className={classes.image}><img src={skill.image} alt = {props.lang}></img></div>
                <h4>{skill.since && (years > 0 ? years + " " +  yearsEnding : " ") + " "+ months + " " + monthsEnding}</h4>
            </div>)
        })}
       

        
    </div>
    <div className={classes.skillsBox}>
    {props.tech.map(techItem =>
        {
            return (
            <div className={classes.skill} data-aos="flip-down" key={techItem.lang}>
            <h3>{techItem.lang}</h3>
                <div className={classes.image}><img src={techItem.image} alt = {props.lang}></img></div>
            </div>)
        })}
    </div>
    </>
}

export default Skill