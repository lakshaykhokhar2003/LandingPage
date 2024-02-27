import classes from "../ProductComponent.module.scss";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import {ProductComponentProps} from "../../../../utils/interfaces.ts";

export const BestValue = ({bestChoice, bestValue, number}: Partial<ProductComponentProps>) => {
    return (
        <div className={classes.isBest}>
            {bestChoice &&
                <span className={classes.Best}><EmojiEventsOutlinedIcon className={classes.Icon}/>Best Choice</span>}
            {bestValue &&
                <span className={classes.Best}><DiamondOutlinedIcon className={classes.Icon}/>Best Value</span>}
            <span className={classes.index}>{number}</span>
        </div>
    )
}