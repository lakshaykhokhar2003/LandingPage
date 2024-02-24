import {ProductComponent} from "./ProductComponent/ProductComponent.tsx";
import {productsData} from "../../utils/dummyData.ts";

const Products = () => {
    const productComponents = productsData.map((product, index) => (
        <ProductComponent
            key={index}
            {...product}
        />
    ));
    return <>{productComponents}</>;
}

export default Products;
