import {ProductComponent} from "./ProductComponent/ProductComponent.tsx";
import {productsData} from "../../utils/dummyData.ts";

const Products = () => {
    return <>
        {productsData.map((product, index) => (
            <ProductComponent
                key={index}
                {...product}
            />))}
    </>;
}

export default Products;
