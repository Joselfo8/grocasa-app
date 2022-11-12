import Link from "next/link"

import Image from "next/image"

// SVG's
import mainImage from "../../../../assets/images/Rectangle 169@2x.png"
import bathroomIcon from "../../../../assets/icon/WEB_MATERIAL-09.svg"
import bedroomIcon from "../../../../assets/icon/WEB_MATERIAL-10.svg"
import areaIcon from "../../../../assets/icon/WEB_MATERIAL-11.svg"

export default function CardProduct ({obj}) {
    const {
        images,
        propertyName,
        location,
        area,
        bedrooms,
        bathrooms,
        price,
        id,
    } = obj
    // console.log('desde card-products',obj);
    const renderCardProduct = (
        obj && obj.id
        ?   (
                <div className="card-product">
                    <div className="card-product__img">
                        <Image
                            src={images.main}
                            alt="Imagen previa inmueble"
                            layout="responsive"  
                        />            
                    </div>

                    <div className="card-product__text">
                        <h3>{propertyName}</h3>
                        <p>{location}</p>
                    </div>

                    <div className="card-product__description">
                        <div className="card-product__description-features">
                            <div className="card-product__description-features-feature">
                                <div className="img">
                                    <Image
                                        src={areaIcon}
                                        alt="area"
                                        layout="responsive"
                                    />  
                                </div>
                                <p>{area}<span>m2</span></p>    
                            </div>
                            <div className="card-product__description-features-feature">
                                <div className="img">
                                    <Image
                                        src={bedroomIcon}
                                        alt="bedrooms"
                                        layout="responsive"
                                    />  
                                </div>
                                <p>{bedrooms}</p>    
                            </div>
                            <div className="card-product__description-features-feature">
                                <div className="img">
                                    <Image
                                        src={bathroomIcon}
                                        alt="bathrooms"
                                        layout="responsive"
                                    />  
                                </div>
                                <p>{bathrooms}</p>    
                            </div>
                        </div>
                        <div className="card-product__description-price">
                            <p className="price">{price}</p>
                        </div>
                        <div className="card-product__description-button">
                            <Link href={`/product-detail/${id}`} >
                                <button className="button">Más info</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )

        :    (
                // <div className="card-product">
                //     <div className="card-product__img">
                //         <Image
                //             src={mainImage}
                //             alt="Imagen previa inmueble"
                //             layout="responsive"  
                //         />            
                //     </div>

                //     <div className="card-product__text">
                //         <h3>Ático Dúplex de Obra Nueva</h3>
                //         <p>Marianao, Sant Boi de Llobregat</p>
                //     </div>

                //     <div className="card-product__description">
                //         <div className="card-product__description-features">
                //             <div className="card-product__description-features-feature">
                //                 <div className="img">
                //                     <Image
                //                         src={area}
                //                         alt="area"
                //                         layout="responsive"
                //                     />  
                //                 </div>
                //                 <p>102<span>m2</span></p>    
                //             </div>
                //             <div className="card-product__description-features-feature">
                //                 <div className="img">
                //                     <Image
                //                         src={bedroom}
                //                         alt="bedrooms"
                //                         layout="responsive"
                //                     />  
                //                 </div>
                //                 <p>3</p>    
                //             </div>
                //             <div className="card-product__description-features-feature">
                //                 <div className="img">
                //                     <Image
                //                         src={bathroom}
                //                         alt="bathrooms"
                //                         layout="responsive"
                //                     />  
                //                 </div>
                //                 <p>2</p>    
                //             </div>
                //         </div>
                //         <div className="card-product__description-price">
                //             <p className="price">330.000€</p>
                //         </div>
                //         <div className="card-product__description-button">
                //             <button>Más info</button>
                //         </div>
                //     </div>
                // </div>

                <div>Cargando...</div>
            )

        
    )
    
    return (
        <div>
            {renderCardProduct}
        </div>
    )
}