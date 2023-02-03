import classes from "./PortfolioSection.module.css"

const PortfolioSection = (props) =>
{
    return <div className={classes.portfolioSection}>
    <h2>{props.title}</h2>
    {props.children}
</div>
}

export default PortfolioSection