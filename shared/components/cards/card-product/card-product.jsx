import Image from "next/image"

// SVG's
import mainImage from "../../../../assets/images/Rectangle 169@2x.png"
// import corazonVacio from "../../../../assets/icon/WEB_MATERIAL-08.svg"
// import corazonLleno from "../../../../assets/icon/WEB_MATERIAL-06.svg"
import moreInfo from "../../../../assets/icon/WEB_MATERIAL-07.svg"
import bathroom from "../../../../assets/icon/WEB_MATERIAL-09.svg"
import bedroom from "../../../../assets/icon/WEB_MATERIAL-10.svg"
import area from "../../../../assets/icon/WEB_MATERIAL-11.svg"

export default function CardProduct () {
    return (
        <div className="card-product">
            <div className="card-product__img">
                <Image
                    src={mainImage}
                    alt="Imagen previa inmueble"
                    layout="responsive"  
                />            
            </div>

            <div className="card-product__text">
                <h3>Ático Dúplex de Obra Nueva</h3>
                <p>Marianao, Sant Boi de Llobregat</p>
            </div>

            <div className="card-product__description">
                <div className="card-product__description-features">
                    <div className="card-product__description-features-feature">
                        <Image
                            src={area}
                            alt="area"
                            height={40}
                        />  
                        <p>102<span>m2</span></p>    
                    </div>
                    <div className="card-product__description-features-feature">
                        <Image
                            src={bedroom}
                            alt="bedrooms"
                            height={40}
                        />  
                        <p>3</p>    
                    </div>
                    <div className="card-product__description-features-feature">
                        <Image
                            src={bathroom}
                            alt="bathrooms"
                            height={40}
                        />  
                        <p>2</p>    
                    </div>
                </div>
                <div className="card-product__description-price">
                    <p className="price">330.000€</p>
                </div>
                <div className="card-product__description-button">
                    <button>Más info</button>
                </div>
            </div>
        </div>
    )
}