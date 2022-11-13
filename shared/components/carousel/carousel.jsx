import { products } from "../../../data/const/products.constants.jsx"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel (props) {
    console.log('DESDE CARRUSEL', props);

    const [array, setarray] = useState([])

    function changeImage() {
        const container = document.querySelector('.carousel-container');
        const slide = document.querySelectorAll('.slide');

        slide.forEach((e, index) => {
            slide[index].addEventListener('click', () => {
                let position = index
                // Calcular el porcentaje de deslpazamiento
                let displacementPercentage = 100 / slide.length
                let operation = position * -(displacementPercentage)

                container.style.transform = `translateX(${ operation }%)`

                slide.forEach((d, i) => {
                    slide[i].classList.remove('active')
                })

                slide[index].classList.add('active')
            })
        });
    }

    const renderImages = (
        array.length > 0
        ? array.map((img, index) => {
            return (
                <Image
                    src={img}
                    alt={`Imagen ${index}`}
                    layout="responsive"
                    className="img"
                    key={index}
                />
            )
        })
        : <div>Cargando imagenes...</div>
    )

    const renderSlides = (
        array.length > 0
        ? array.map((img, index) => {
            if(index !== 0) return (
                <li onClick={changeImage} className="slide" key={index}></li>
            )
        })
        : <div>Cargando imagenes...</div>
    )

    const renderCarousel = (
        array && array.length === 0 
        ?
        <div>Cargando Carousel...</div>
        :
        <div className="carousel">

            <div id="prueba" className="carousel-container" 
                style={{width: (array.length * 100) -20 + '%'}}
            >
                {renderImages}
            </div>
            <div className="carousel-slides">
                <ul className="slides">
                    <li onClick={changeImage} className="slide active"></li>
                    {renderSlides}
                </ul>
            </div>

        </div>
        
    )

    useEffect(() => {
        setarray(props.props)
    }, [])

    useEffect(() => {
        console.log('renderiza array');
    }, [array])

    return (
        <div>
            {renderCarousel}
        </div>
    )
}