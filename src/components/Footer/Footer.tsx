import DropMenu from "../../utils/DropMenu/DropMenu.tsx";
import classes from './Footer.module.scss';

const Footer = () => {
    const options = ["India", "United States", "Canada", "Australia", "United Kingdom", "Germany", "France", "Brazil", "Italy", "Spain", "Netherlands", "Turkey", "Poland", "Sweden", "Belgium", "Norway", "Denmark", "Switzerland", "Austria", "Greece", "Ukraine", "Romania",]
    return (
        <div className={classes.footer}>
            <div className={classes.Wrapper}>
                <h1>CATEGORIES</h1>
                <div className={classes.LinkWrapper}>
                    <a href="#">Web Builder</a>
                    <a href="#">Hosting</a>
                    <a href="#">Data Center</a>
                    <a href="#">Robotic-Automation</a>
                </div>
            </div>
            <div className={classes.Wrapper}>
                <h1>CONTACT</h1>
                <div className={classes.LinkWrapper}>
                    <a href="#">Contact</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms Of Service</a>
                    <a href="#">Categories</a>
                    <a href="#">About</a>
                </div>
            </div>
            <DropMenu options={options}/>
        </div>
    );

}

export default Footer