import { products } from "../data/const/products.constants" 

// Components
import CardProduct from "../shared/components/cards/card-product/card-product";

export default function ProductList () {
    const renderProducts = (
        products && products.length > 0
        ? products.map((p, index) => {
            return (
                <CardProduct obj={p} key={index}/>
            )
        })
        : <div></div>
    ) 
    
    return (
        <div className="product-list">
            <div className="product-list-container">
                {renderProducts}
            </div>
            
        </div>
    )
}