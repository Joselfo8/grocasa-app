// import { products } from "../data/const/products.constants" 
import CardProduct from "../shared/components/cards/card-product/card-product";

export default function ProductList () {
    // console.log(products);
    // const renderProducts = (
    //     products && products.length > 0
    //     ? products.map(p => {
    //         return (
    //             <CardProduct product={p} />
    //         )
    //     })
    //     : <div></div>
    // ) 
    
    return (
        <div>
            <CardProduct/>
        </div>
    )
}