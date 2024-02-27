import {ProductComponentProps} from "../../../../utils/interfaces.ts";
import classes from "../ProductComponent.module.scss";

export const Highlights = ({highlight, highlightRating}: Partial<ProductComponentProps>) => {
    return highlight ? <p className={classes.Highlights}>{highlight}</p> :
        <div className={classes.HighlightRating}>
            {highlightRating?.map((highlight, index) => <li key={index}>
                <span>{highlight.rating}</span>{highlight.caption}</li>)}
        </div>;

}