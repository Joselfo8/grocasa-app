import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"

// SVGs
import bathroomIcon from "../../public/icon/WEB_MATERIAL-09.svg"
import bedroomIcon from "../../public/icon/WEB_MATERIAL-10.svg"
import areaIcon from "../../public/icon/WEB_MATERIAL-11.svg"
import corazonVacio from "../../public/icon/WEB_MATERIAL-08.svg"
import corazonLleno from "../../public/icon/WEB_MATERIAL-06.svg"

// Components
import Map from "../../shared/components/map/map"
import CardProduct from "../../shared/components/cards/card-product/card-product"
import Carousel from "../../shared/components/carousel/carousel"

// Data / Helpers / Services
import {products} from "../../data/const/products.constants"
import { twoRandomNumbers } from "../../shared/services/arrayMethods"
import { formatNumber } from "../../shared/services/numbersMethods"

export default function ProductList () {
    const router = useRouter()
    
    const [property, setPoperty] = useState([])
    const [suggestions, setsuggestions] = useState([])
    const [favorite, setfavorite] = useState(false)
    
    const twoRandomNums = twoRandomNumbers(products)
    
    const array = products.filter(p => p.id === Number(router.query.id) )
    const suggestionsArr = products.filter((p, index) => {
        let sug = []
        for (let i = 0; i < twoRandomNums.length; i++) {
            if(index === twoRandomNums[i]) sug.push(p)            
        }
        if(sug.length > 0) return sug
    })

    if(property.length === 0 && array.length > 0 && suggestionsArr.length > 0) { 
        setPoperty(array)
        setsuggestions(suggestionsArr)
    }

    const addFavorite = () => { setfavorite(!favorite) }
    
    useEffect(() => {}, [property, favorite])
    
    const renderProductList = (
        property && property.length > 0 && suggestionsArr.length > 0
        ?   property.map((property, index) => {
            return (
                <div className="product-detail" key={index} >
                    
                    <div className="product-detail__header">
                        <Carousel props={property.images.eachPlace} />
                    </div>

                    <div className="product-detail-body">

                        <div className="product-detail__description">
                            <div className="product-detail__description-name">
                                <h1>{property.propertyName}</h1>
                                <p>{property.location}</p>
                            </div>
                            <div className="product-detail__description-comments">
                                <p>
                                    {property.description}
                                </p>
                            </div>
                            <div className="product-detail__description-main">
                                <div className="product-detail__description-main-features">
                                    <div className="product-detail__description-main-features-feature">
                                        <Image
                                            src={areaIcon}
                                            alt="area"
                                            height={40}
                                        />  
                                        <p>{property.area}<span>m2</span></p>    
                                    </div>
                                    <div className="product-detail__description-main-features-feature">
                                        <Image
                                            src={bedroomIcon}
                                            alt="bedrooms"
                                            height={40}
                                        />  
                                        <p>{property.bedrooms}</p>    
                                    </div>
                                    <div className="product-detail__description-main-features-feature">
                                        <Image
                                            src={bathroomIcon}
                                            alt="bathrooms"
                                            height={40}
                                        />  
                                        <p>{property.bathrooms}</p>    
                                    </div>
                                </div>

                                <div className="product-detail__description-main-qualification">
                                    <div className="product-detail__description-main-qualification-price">
                                        <p>{formatNumber(property.price)}</p>
                                    </div>

                                    <div onClick={addFavorite} className="product-detail__description-main-qualification-favorite">
                                        <Image
                                            src={favorite === false ? corazonVacio : corazonLleno}
                                            alt="Mas información"
                                            height={42}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="product-detail__description-specific-features">
                                <div className="product-detail__description-specific-features-list">
                                    <p>Características</p>
                                    <ul>
                                        {
                                            property.features && property.features.length
                                            ? property.features.map((f, i) => {
                                                return (
                                                    <li>{f}</li>
                                                )
                                            })
                                            : <div></div>
                                        }
                                    </ul>
                                </div>
                                <div className="product-detail__description-specific-features-list">
                                    <p>Extras</p>
                                    <ul>
                                        {
                                            property.additionalFeatures && property.additionalFeatures.length
                                            ? property.additionalFeatures.map((af, i) => {
                                                return (
                                                    <li>{af}</li>
                                                )
                                            })
                                            : <div></div>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="product-detail__map">
                            <Map
                                lat={property.locationOnMap.lat}
                                lng={property.locationOnMap.lng}
                            />
                        </div>
                        
                        <div className="product-detail__notify">
                            <p>Avísame si baja</p>
                            <input type="checkbox"/>
                            <button>Contactar</button>
                        </div>

                        <div className="product-detail__suggestions">
                            {
                                suggestions && suggestions.length > 0
                                ? suggestions.map((p, index) => {
                                    return (
                                        <CardProduct obj={p} key={index}/>
                                    )
                                })
                                : <div></div>
                            }
                        </div>
                    </div>
                </div>     
            )
        })
        
        :   <div>Cargando contenido...</div>
    )

    return (
        <div>
            {renderProductList}
        </div>
    )
}