import CardProduct from "../../shared/components/cards/card-product/card-product"

export default function ProductList () {
    
    return (
        <div className="product-list">
            <div className="product-list-container">
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </div>
        </div>
    )
}