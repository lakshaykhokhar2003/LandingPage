import {Rating} from "@mui/material";
import {ProductComponentProps} from "../../../../utils/interfaces.ts";
import classes from "../ProductComponent.module.scss";

export const Review = ({rating, ratingCaption}: Partial<ProductComponentProps>) => {
    return (
        <div className={classes.Review}>
            <div className={classes.Rating}>
                <h1>{rating}</h1>
                <h2>{ratingCaption}</h2>
                <Rating name="half-rating-read" defaultValue={rating ? rating * 5 / 10 : 0} precision={0.5} readOnly
                        className={classes.Stars}/>
            </div>
            <button>View</button>
        </div>
    )
}