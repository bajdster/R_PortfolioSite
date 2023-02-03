import classes from "./PortfolioList.module.css"

const PortfolioList = (props) =>
{
    return <ul className={classes.list}>
       {props.children}
    </ul>
}

export default PortfolioList