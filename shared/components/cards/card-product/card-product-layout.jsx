import Link from "next/link"

import Image from "next/image"

// Images
import mainImage from "../../../../public/images/Rectangle 169@2x.png"

// SVG's
import bathroom from "../../../../public/icon/WEB_MATERIAL-09.svg"
import bedroom from "../../../../public/icon/WEB_MATERIAL-10.svg"
import area from "../../../../public/icon/WEB_MATERIAL-11.svg"

export default function CardProductLayout () {
    
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
                        <div className="img">
                            <Image
                                src={area}
                                alt="area"
                                layout="responsive"
                            />  
                        </div>
                        <p>102<span>m2</span></p>    
                    </div>
                    <div className="card-product__description-features-feature">
                        <div className="img">
                            <Image
                                src={bedroom}
                                alt="bedrooms"
                                layout="responsive"
                            />  
                        </div>
                        <p>3</p>    
                    </div>
                    <div className="card-product__description-features-feature">
                        <div className="img">
                            <Image
                                src={bathroom}
                                alt="bathrooms"
                                layout="responsive"
                            />  
                        </div>
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