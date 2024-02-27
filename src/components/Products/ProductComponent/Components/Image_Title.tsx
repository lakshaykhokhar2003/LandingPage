import {ProductComponentProps} from "../../../../utils/interfaces.ts";
import classes from "../ProductComponent.module.scss";

export const Image_Title = ({image,imageTitle}:Partial<ProductComponentProps>) =>{
    return (
        <div className={classes.imageContent}>
            <img src={image} alt="wix"/>
            <h3>{imageTitle}</h3>
        </div>
    )
}