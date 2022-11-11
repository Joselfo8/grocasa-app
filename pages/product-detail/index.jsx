import Image from "next/image"

import bathroom from "../../assets/icon/WEB_MATERIAL-09.svg"
import bedroom from "../../assets/icon/WEB_MATERIAL-10.svg"
import area from "../../assets/icon/WEB_MATERIAL-11.svg"
import corazonVacio from "../../assets/icon/WEB_MATERIAL-08.svg"

import map from "../../assets/images/map.png"
import preview1 from "../../assets/images/Rectangle -1@2x.png"
import preview2 from "../../assets/images/Rectangle -2@2x.png"

export default function ProductList () {

    return (
        <div className="product-detail">
            
            <div className="product-detail__carousel">
                <Image
                    src={preview1}
                    alt="Mas información"
                    layout="responsive"
                />
            </div>
            <div className="product-detail__description">
                <h1>Ático Dúplex de Obra Nueva</h1>
                <p>Marianao, Sant Boi de Llobregat</p>
                <div className="product-detail__description-parrafos">
                    <p>
                        Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas.
                    </p>
                    <p>
                        Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..
                    </p>
                    <p>
                        Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..
                    </p>
                </div>
                <div className="product-detail__description-main-features">
                    <div className="product-detail__description-features">
                        <div className="product-detail__description-features-feature">
                            <Image
                                src={area}
                                alt="area"
                                height={40}
                            />  
                            <p>102<span>m2</span></p>    
                        </div>
                        <div className="product-detail__description-features-feature">
                            <Image
                                src={bedroom}
                                alt="bedrooms"
                                height={40}
                            />  
                            <p>3</p>    
                        </div>
                        <div className="product-detail__description-features-feature">
                            <Image
                                src={bathroom}
                                alt="bathrooms"
                                height={40}
                            />  
                            <p>2</p>    
                        </div>
                    </div>

                    <div className="card-product__description-price">
                        <p>330.000€</p>
                    </div>

                    <div className="card-product__description-button">
                        <Image
                            src={corazonVacio}
                            alt="Mas información"
                            height={42}
                        />
                    </div>
                </div>
                <div className="product-detail__description-specific-features">
                    <div className="product-detail__description-specific-features-main">
                        <ul>
                            <li>Ático 102 m2 (construidos)</li>
                            <li>3 Habitaciones</li>
                            <li>Segunda mano 100 m2 (útiles)</li>
                            <li>Reformado</li>
                            <li>2 Baños</li>
                        </ul>
                    </div>
                    <div className="product-detail__description-specific-features-others">
                        <ul>
                            <li>Terraza</li>
                            <li>Balcón</li>
                            <li>Ascensor</li>
                            <li>Calefacción</li>
                            <li>Aire acondicionado</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="product-detail__map">
                <Image
                    src={map}
                    alt="Google map"
                    height={500}
                    width={700}
                />
            </div>
            <div className="product-detail__notify">
                <p>Avísame si baja</p>
                <input type="checkbox"/>
                <button>Contactar</button>
            </div>
        </div>
    )
}