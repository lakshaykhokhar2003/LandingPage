import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {getCurrentTime} from "../../utils/functions.ts";
import DropMenu from "../../utils/DropMenu/DropMenu.tsx";
import classes from './Heading.module.scss';

const Heading = () => {
    const options = ["Top Relevant", "Newest", "Oldest"];
    return <div className={classes.HeaderDiv}>
        <h1>Best Website builders in the US</h1>
        <div className={classes.Info}>
            <div className={classes.LastUpdated}>
                <CheckCircleOutlineOutlinedIcon className={classes.icon}/><span>Last Updated - {getCurrentTime()}</span>
                <ErrorOutlineOutlinedIcon className={classes.icon}/> <span>Advertising Disclosure</span>
            </div>
            <DropMenu options={options}/>
        </div>
        <div className={classes.Services}>
            <a href="#">Tools</a>
            <a href="#">AWS Builder</a>
            <a href="#">Start Build</a>
            <a href="#">Build Supplies</a>
            <a href="#">Tooling</a>
            <a href="#">Blue Hosting</a>
        </div>
        <div className={classes.Links}>
            <a href="#">Home</a> <ArrowForwardIosIcon/>
            <a href="#">Hosting for all</a> <ArrowForwardIosIcon/>
            <a href="#">Hosting</a> <ArrowForwardIosIcon/>
            <a href="#">Hosting 6</a> <ArrowForwardIosIcon/>
            <a href="#">Hosting 5</a>
        </div>
    </div>
}

export default Heading;