import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import {feature} from "../../../../utils/interfaces.ts";
import classes from "../ProductComponent.module.scss";

export const Features = ({show, whyLove}: feature) => {
    return (
        <>
            <h1>Why We Love It</h1>
            {show && whyLove && whyLove.map((reason, index) => (
                <div key={index} className={classes.whyLove}>
                    <li><CheckBoxOutlinedIcon className={classes.checkIcon}/>{reason}</li>
                </div>
            ))}
        </>
    );
};
