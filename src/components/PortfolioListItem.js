import classes from "./PortfolioListItem.module.css"

const PortfolioListItem = (props) =>
{
    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt= {props.alt}></img>
            </div>
            <div className={classes.description}>
                <h2>{props.title}</h2>
                <div className={classes.tags}>
                    {props.tags.map(tag=>
                    {
                        return <span>{tag}</span>
                    })}
                </div>
                <h6>{props.adnotation}</h6>
                <a href = {props.src} target="_blank">Preview</a>
            </div>

            
        </li>
    )
}

export default PortfolioListItem