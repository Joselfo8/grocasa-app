import Carousel from "../shared/components/carousel/carousel"
import { products } from "../data/const/products.constants.jsx"


export default function Prueba () {
    // console.log(products[0].images.eachPlace);
    return (
        <div className="pruebas">
               <Carousel props={products[0].images.eachPlace} /> 
        </div>
    )
}