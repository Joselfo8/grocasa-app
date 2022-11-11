import React, { useEffect, useRef } from "react"

export default function Carousel () {
    // const container = document.querySelector('carousel-container')
    // const slide = document.querySelectorAll('slide')
    // const slide = useRef('slide')

    // const ref = useRef()

    // console.log(ref.current)

    // de esta forma hice el get element by 
    // const image = React.createRef();
    


    const referencia = useRef()

    useEffect(() => {
        // const element = referencia.current
        console.log(referencia.current);
        const el = document.querySelector('.carousel-container');
        console.log('qs prueba: ', el);
        const sub = document.querySelectorAll('.img');
        console.log('qsAll prueba:', sub);

    }, [])


    function changeColor() {
        // console.log(image);
        // image.current.style.color = 'blue';
        referencia.current.style.color = 'blue';
    }

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
                    // se puede dejar classname
                    slide[i].classList.remove('active')
                })

                slide[index].classList.add('active')
            })
        });
    }



    return (
        <div className="carousel">
            {/* <p ref={image}>Prueba</p> */}
            {/* <p ref={referencia}>Prueba</p>
            <button onClick={changeColor} >Cambiar color</button> */}
            {/* <button  >Cambiar color</button> */}

            <div id="prueba" className="carousel-container">
                <img src="#" alt="Imagen 1" className="img"/>
                <img src="#" alt="Imagen 2" className="img"/>
            </div>

            <ul className="slides">
                <li onClick={changeImage} className="slide active"></li>
                <li onClick={changeImage} className="slide"></li>
            </ul>
        </div>
    )
}