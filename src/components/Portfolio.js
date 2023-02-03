import classes from "./Portfolio.module.css"
import portfolioGif from "../images/v1.mp4"
import PortfolioSection from "./PortfolioSection"
import PortfolioList from "./PortfolioList"
import PortfolioListItem from "./PortfolioListItem"
import studio from "../images/3a.png"
import wf from "../images/wf.png"
import drivemat from "../images/drivemat.png"
import psychobadanie from "../images/psychobadanie.png"
import arkanoid from "../images/arkanoid.png"
import country from "../images/country.png"
import pomodoro from "../images/pomodoro.png"
import word from "../images/word.png"
import tictactoe from "../images/tictactoe.png"
import todo from "../images/todo.png"


const Portfolio = () =>
{
    return <section className={classes.portfolioView}>
        <video src={portfolioGif} autoPlay loop muted></video>
        <div className={classes.portfolioScreen}>
            <div className={classes.portfolioBox}>
                <span className={classes.bar} data-value="portfolio">Portfolio</span>
                    <PortfolioSection title="Websites">
                        <PortfolioList>
                            <PortfolioListItem title = "Studio 3a" image={studio} tags = {["HTML", "CSS", "JavaScript", "WordPress"]} alt="studio projektanta wnętrz 3a" src="https://www.studio3a.com.pl"/>
                            <PortfolioListItem title = "Widomska Fotografia" image={wf} tags = {["HTML", "CSS", "JavaScript", "WordPress"]} alt="fotograf ślubny Lublin" src="http://www.widomskafotografia.pl" adnotation="Website maintenance"/>
                            <PortfolioListItem title  = "Badanie psychologiczne" image={drivemat} tags = {["HTML", "CSS", "JavaScript", "WordPress"]} alt="strona badań psychologicznych" src="https://www.badaniepsychologiczne.com"/>
                            <PortfolioListItem title = "Psychobadanie" image={psychobadanie} tags = {["HTML", "CSS", "JavaScript", "WordPress"]} alt="strona gabinetu badań psychologicznych" src="https://www.psychobadanie.pl"/>
                            
                        </PortfolioList>
                    </PortfolioSection>

                    <PortfolioSection title = "Apps">
                        <PortfolioList>
                        <PortfolioListItem title = "Tic Tac Toe" image={tictactoe} tags = {["HTML", "CSS", "JavaScript", "React"]} alt="tictactoe game site" src="https://tictactoemb.netlify.app" />
                        <PortfolioListItem title = "To Do App" image={todo} tags = {["HTML", "CSS", "JavaScript", "React", "Context API"]} alt="todo app site" src="https://to-do-mb.netlify.app"/>
                        <PortfolioListItem title = "Arkanoid" image={arkanoid} tags = {["HTML", "CSS", "JavaScript"]} alt="arkanoid game site" src="https://arkanoidmb.netlify.app"/>
                        <PortfolioListItem title = "Country Search" image={country} tags = {["HTML", "CSS", "JavaScript", "API"]} alt="Country searcher site"  src="https://countryinfosearchmb.netlify.app"/>
                        <PortfolioListItem title = "Pomodoro App" image={pomodoro} tags = {["HTML", "CSS", "JavaScript"]} alt="Pomodoro app site" src="https://pomodoro-app-mb.netlify.app"/>
                        <PortfolioListItem title = "Word Counter" image={word} tags = {["HTML", "CSS", "JavaScript"]} alt="Word counter app site" src="https://wordcountermb.netlify.app"/>
                        </PortfolioList>
                    </PortfolioSection>

            </div>
        </div>
    </section>
}

export default Portfolio