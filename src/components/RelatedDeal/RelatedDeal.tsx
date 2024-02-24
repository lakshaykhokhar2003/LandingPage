import {DealsComponent} from "./DealsComponent/DealsComponent.tsx";
import {dealsData} from "../../utils/dummyData.ts";
import classes from './RelatedDeal.module.scss';

const RelatedDeal = () => {
    const dealsComponents = dealsData.map((deal, index) => (
        <DealsComponent
            key={index}
            image={deal.image}
            offer={deal.offer}
            limited={deal.limited}
            title={deal.title}
            description={deal.description}
            discountPrice={deal.discountPrice}
            originalPrice={deal.originalPrice}
        />

    ));
    return <div className={classes.DealsDiv}>
        <h1>Related deals you might like for</h1>
        <div className={classes.Wrapper}>
            {dealsComponents}
        </div>
    </div>
}

export default RelatedDeal