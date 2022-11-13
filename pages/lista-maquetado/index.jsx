import CardProductLayout from "../../shared/components/cards/card-product/card-product-layout"

export default function ProductList () {
    
    return (
        <div className="product-list">
            <div className="product-list-container">
                <CardProductLayout/>
                <CardProductLayout/>
                <CardProductLayout/>
                <CardProductLayout/>
            </div>
        </div>
    )
}