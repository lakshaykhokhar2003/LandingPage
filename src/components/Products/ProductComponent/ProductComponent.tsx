import {ProductComponentProps} from "../../../utils/interfaces.ts";
import {BestValue} from "./Components/BestValue.tsx";
import {Image_Title} from "./Components/Image_Title.tsx";
import {Review} from "./Components/Review.tsx";
import {ProductDescription} from "./Components/ProductDescription.tsx";
import classes from './ProductComponent.module.scss';

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


    return <div className={classes.Products}>
        <BestValue bestChoice={bestChoice} bestValue={bestValue} number={number}/>
        <Image_Title image={image} imageTitle={imageTitle}/>
        <ProductDescription heading={heading} description={description} offer={offer} highlight={highlight}
                            highlightRating={highlightRating} whyLove={whyLove}/>
        <Review rating={rating} ratingCaption={ratingCaption}/>
    </div>
}