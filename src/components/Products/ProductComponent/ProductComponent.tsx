import {useState} from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import {ProductComponentProps} from "../../../utils/interfaces.ts";
import classes from './ProductComponent.module.scss';
import {Rating} from "@mui/material";

export const ProductComponent = ({
                                     bestChoice,
                                     bestValue,
                                     number,
                                     image,
                                     imageTitle,
                                     heading,
                                     description,
                                     offer,
                                     highlight,
                                     rating,
                                     ratingCaption,
                                     highlightRating,
                                     whyLove
                                 }: ProductComponentProps) => {

    const [show, setShow] = useState<boolean>(false);

    const handleClick = () => {
        setShow(!show);
    }

    const content = highlight ? <p className={classes.Highlights}>{highlight}</p> :
        <div className={classes.HighlightRating}>
            {highlightRating?.map((highlight, index) => <li key={index}>
                <span>{highlight.rating}</span>{highlight.caption}</li>)}
        </div>


    const showButton = show ? (
        <span onClick={handleClick}>show less <KeyboardArrowUpIcon/></span>
    ) : (
        <span onClick={handleClick}>show more <KeyboardArrowDownIcon/></span>
    );

    return <div className={classes.Products}>
        <div className={classes.isBest}>
            {bestChoice &&
                <span className={classes.Best}><EmojiEventsOutlinedIcon className={classes.Icon}/>Best Choice</span>}
            {bestValue &&
                <span className={classes.Best}><DiamondOutlinedIcon className={classes.Icon}/>Best Value</span>}
            <span className={classes.index}>{number}</span>
        </div>
        <div className={classes.imageContent}>
            <img src={image} alt="wix"/>
            <h3>{imageTitle}</h3>
        </div>
        <div className={classes.Details}>
            <span><h1>{heading}</h1>{description}</span>
            {offer && <div className={classes.Offer}>{offer}</div>}
            <h2>Main Highlights :- </h2>
            {content}
            {whyLove && (
                <>
                    <h1>Why We Love It</h1>
                    {show && whyLove.map((reason, index) => <div key={index} className={classes.whyLove}>
                        <li><CheckBoxOutlinedIcon className={classes.checkIcon}/>{reason}</li>
                    </div>)}
                </>
            )}
            {showButton && whyLove && <div className={classes.showMore}>{showButton}</div>}
        </div>
        <div className={classes.Review}>
            <div className={classes.Rating}>
                <h1>{rating}</h1>
                <h2>{ratingCaption}</h2>
                <Rating name="half-rating-read" defaultValue={rating * 5 / 10} precision={0.5} readOnly
                        className={classes.Stars}/>
            </div>
            <button>View</button>
        </div>
    </div>
}