import {DealsComponentProps} from "../../../utils/interfaces.ts";
import classes from './DealsComponent.module.scss';

export const DealsComponent = ({
                                   image, offer, limited, title, description, discountPrice, originalPrice
                               }: DealsComponentProps) => {
    return <div className={classes.Deals}>
        <div className={classes.imageOffer}>
            <img src={image} alt="No Image"/>
            <div className={classes.offers}>
                <span>{offer}</span>
                <br/>
                {limited && <span>Limited time</span>}
            </div>
        </div>
        <div className={classes.Details}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className={classes.discounts}>
                <span>${discountPrice}</span>
                <span>${originalPrice}</span>
                <span>({offer})</span>
            </div>
            <button>View Deal</button>
        </div>
    </div>
}