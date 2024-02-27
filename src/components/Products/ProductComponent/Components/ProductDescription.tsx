import {useState} from "react";
import {Highlights} from "./Highlights.tsx";
import {Features} from "./Features.tsx";
import {ProductComponentProps} from "../../../../utils/interfaces.ts";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classes from "../ProductComponent.module.scss";

export const ProductDescription = ({
                                       heading,
                                       description,
                                       offer,
                                       highlight,
                                       highlightRating,
                                       whyLove,
                                   }: Partial<ProductComponentProps>) => {

    const [show, setShow] = useState<boolean>(false);
    const handleClick = () => {
        setShow(!show);
    }
    const showButton = show ? (
        <span onClick={handleClick}>show less <KeyboardArrowUpIcon/></span>
    ) : (
        <span onClick={handleClick}>show more <KeyboardArrowDownIcon/></span>
    );

    return (
        <div className={classes.Details}>
            <span><h1>{heading}</h1>{description}</span>
            {offer && <div className={classes.Offer}>{offer}</div>}
            <h2>Main Highlights :- </h2>
            <Highlights highlight={highlight} highlightRating={highlightRating}/>
            {whyLove && <Features show={show} whyLove={whyLove}/>}
            {showButton && whyLove && <div className={classes.showMore}>{showButton}</div>}
        </div>
    )
}