import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel (props) {
    const [array, setarray] = useState([])
    
    let position = 0

    function changeImage(e) {
        const container = document.querySelector('.carousel-container');
        const slide = document.querySelectorAll('.slide');
        
        if(position === 0 &&  e.target.className === 'left') return
        if(position === slide.length-1 &&  e.target.className === 'right') return

        if(e.target.className === 'left') position = position - 1
        if(e.target.className === 'right') position = position + 1

        slide.forEach((e, index) => {
            slide[index].addEventListener('click', () => { position = index })
        })

        let displacementPercentage = 100 / slide.length
        let operation = position * -(displacementPercentage)

        container.style.transform = `translateX(${ operation }%)`

        slide.forEach((d, i) => {
            slide[i].classList.remove('active')
        })

        slide[position].classList.add('active')
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
                style={ {width: (array.length * 100) -20 + '%'} }
            >
                {renderImages}
            </div>
            
            <div className="carousel-controls">
                <img onClick={(e) => changeImage(e)} className="left" src="https://img.icons8.com/sf-black/64/null/back.png"/>
                <img onClick={(e) => changeImage(e)} className="right" src="https://img.icons8.com/sf-black/64/null/back.png"/>
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