import React from 'react'
import classes from "./Experience.module.css"
import wp from "../images/wp.png"
import sii from "../images/sii.svg"
import spsp from "../images/spsp.png"
import kul from "../images/kul.png"
import istqb from "../images/istqb.png"


const Experience = () => {
  return (
    <div className={classes.experienceList}>
    <h2 data-aos="flip-down">Work Experience</h2>
        <ul>
            <li>
                <div className={classes.expItem} data-aos="flip-down">
                    <div className={classes.logoImage}>
                        <img src={wp} alt ="logo wojsko polskie"></img>
                    </div>
                    <div>
                        <h5>12.2020 - now</h5>
                        <h3>Helicopter Technic</h3>
                        <h4>1 st Airlift Base in Warsaw</h4>
                        <p>Exploatation of VIP helicopters</p>
                        <p>Caring for safety of aviation</p>
                    </div>
                    
                </div>
            </li>
            <li>
                <div className={classes.expItem} data-aos="flip-down">
                    <div className={classes.logoImage}>
                        <img src={sii} alt = "logo sii"></img>  
                    </div>
                    <div>
                        <h5>03.2019 - 10.2019</h5>
                        <h3>Junior Test Engineer</h3>
                        <h4>Sii Poland</h4>
                        <p>Performing regression and E2E tests (MS Dynamics CRM, AX, SharePoint, www)</p>
                        <p>Test cases creating and executing mostly acceptance testing</p>
                        <p>Reporting detected defects in Jira and implementation of retests</p>
                        <p>Test results reporting</p>
                    </div>
                    
                </div>
            </li>
        </ul>

        <h2>Education</h2>
            <ul>
                <li>
                    <div className={classes.expItem} data-aos="flip-down">
                        <div className={classes.logoImage}>
                            <img src={spsp} alt ="logo spsp"></img>
                        </div>
                        <div>
                            <h5>10.2019 - 11.2020</h5>
                            <h3>Airforce NCO School</h3>
                            <h4>Aircraft Exploatation</h4>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={classes.expItem} data-aos="flip-down">
                        <div className={classes.logoImage}>
                            <img src={kul} alt = "logo kul"></img>
                        </div>
                        <div>
                            <h5>10.2013 - 06.2018</h5>
                            <h3>Catholic University of Lublin</h3>
                            <h4>Law</h4>
                        </div>
                        
                    </div>
                </li>
            </ul>
        <h2 data-aos="flip-down">Certificates and courses</h2>
            <ul>
                <li>
                    <div className={classes.expItem} data-aos="flip-down">
                        <div className={classes.logoImage}>
                            <img src={istqb} alt ="logo istqb"></img>
                        </div>
                        <div>
                            <h3>ISTQB </h3>
                            <h4>Foundation Level Certificate</h4>
                        </div>
                        
                    </div>
                </li>
                <li>
                    <div className={classes.expItem} data-aos="flip-down">
                        <div className={classes.logoImage}>
                            <img src={sii} alt = "logo sii"></img>
                        </div>
                        <div>
                            <h3>"Become a tester"</h3>
                            <h4>Sii Poland</h4>
                            <p>ISTQB topics</p>
                            <p>Creating test cases in TestLink</p>
                            <p>Defect reporting</p>
                            <p>basics of test automation</p>
                            <p>basics of SQL</p>
                        </div>
                        
                    </div>
                </li>
            </ul>
    </div>
  )
}

export default Experience
