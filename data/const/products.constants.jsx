import main from "../../public/images/Rectangle 169@2x.png"
import place1 from "../../public/images/Rectangle -1@2x.png"
import place2 from "../../public/images/Rectangle -2@2x.png"
import place3 from "../../public/images/Rectangle -3@2x.png"
import main2 from "../../public/images/la_luna_main.jpg"
import luna1 from "../../public/images/la_luna_1.jpg"
import luna2 from "../../public/images/la_luna_2.jpg"
import luna3 from "../../public/images/la_luna_3.jpg"
import main3 from "../../public/images/prados_main.jpg"
import prados1 from "../../public/images/prados_1.jpg"
import prados2 from "../../public/images/prados_2.jpg"
import prados3 from "../../public/images/prados_3.jpg"
import main4 from "../../public/images/fontanar_main.jpg"
import fontanar1 from "../../public/images/fontanar_1.jpg"
import fontanar2 from "../../public/images/fontanar_2.jpg"

export const products = [
    {
        id: 1,
        propertyName: 'Ático Dúplex de Obra Nueva',
        location: 'Marianao, Sant Boi de Llobregat',
        description: 'Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas.. Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas.. Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..',
        area: 102,
        bedrooms: 3,
        bathrooms: 2,
        features: [
            'Ático102 m2 (construidos)',
            '3 Habitaciones',
            'Segunda mano100 m2 (útiles)',
            'Reformado',
            '2 Baños'
        ],
        additionalFeatures: [
            'Terraza',
            'Balcón',
            'Ascensor', 
            'Calefacción', 
            'Aire acondicionado',
        ],
        price: 330000,
        locationOnMap: {
            lat: 41.34586716715483,
            lng: 2.0357963829442207
        },
        images: {
            main,
            eachPlace: [
                place1,
                place2,
                place3
            ]
        }
    },
    {
        id: 2,
        propertyName: 'Hacienda La Luna',
        location: 'Chia, Cundinamarca',
        description: 'Hermosa casa en lote 856M2 1er piso sala-comedor con salida al jardín, terraza con pérgola, huerta y árboles frutales; estudio, baño social, cocina abierta, zona de lavandería, cuarto y baño de servicio, 4 parqueaderos. 2do piso hall de tv, habitación ppal con walk-in closet y baño con ducha, 2 habitaciones auxiliares cu con baño privado y balcón. 3er piso estudio abierto, amplia habitación, baño y depósito. Condominio campestre Sendero ecológico de aprox. 1km, cancha de tenis en polvo de ladrillo, cancha múltiple, salón de reuniones, salón de juegos y de tv, piscina climatizada cubierta, zonas húmedas, parque infantil y hermosas zonas verdes. Vigilancia 247 y CCTV',
        area: 330,
        bedrooms: 4,
        bathroom: 4,
        features: [
            'Ático 330 m2 (construidos)',
            '4 Habitaciones',
            'Lago cerca',
            'Nuevo',
            '4 Baños'
        ],
        additionalFeatures: [
            'Terraza',
            'Balcón',
            'Calefacción', 
            'Aire acondicionado',
        ],
        price: 400000,
        locationOnMap: {
            lat: 4.880994111027236,
            lng: -74.03260306103746
        },
        images: {
            main: main2,
            eachPlace: [
                luna1,
                luna2,
                luna3
            ]
        }
    },
    {
        id: 3,
        propertyName: 'Conjunto Los Prados De La Balsa',
        location: 'Chia, Los prados',
        description: 'Casa con lote independiente en Chia Vereda la Balsa. Área de lote 1050 mt y un área construida de 270 mt. Casa de 3 niveles, sala con chimenea, comedor independiente, cocina abierta, zona de lavandería, cuarto y baño de servicio, 4 habitaciones, 4 baños, estudio, terraza, zona de BBQ, jardín grande. Ubicada en un conjunto de 8 casas. Espacio para 5 carros.',
        area: 270,
        bedrooms: 4,
        bathroom: 5,
        features: [
            'Ático 270 m2 (construidos)',
            '4 Habitaciones',
            'Segunda mano 250 m2 (útiles)',
            'Reformado',
            '5 Baños'
        ],
        additionalFeatures: [
            'Terraza',
            'Balcón',
            'Parqueadero', 
            'Calefacción', 
            'Gimnasio',
        ],
        price: 580000,
        locationOnMap: {
            lat: 4.84470908762788,
            lng: -74.06237940237115
        },
        images: {
            main: main3,
            eachPlace: [
                prados1,
                prados2,
                prados3
            ]
        }
    },
    {
        id: 4,
        propertyName: 'Hacienda Fontanar',
        location: 'Chia, Fontanar',
        description: 'Hermosa casa para venta en Hacienda Fontanar Chia. Super amplia desde su construcción con Amarilo. Con tres habitaciones en el primer piso y la principal en el segundo. Excelentes acabados, mucha iluminación natural, pérgola BBQ en el jardín, amplia cocina ultramoderna',
        area: 392,
        bedrooms: 4,
        bathroom: 5,
        features: [
            'Ático 350 m2 (construidos)',
            '4 Habitaciones',
            'Segunda mano 300 m2 (útiles)',
            'Reformado',
            '2 Baños'
        ],
        additionalFeatures: [
            'Terraza',
            'Balcón',
            'Gimnasio', 
            'Calefacción', 
            'Aire acondicionado',
        ],
        price: 600000,
        locationOnMap: {
            lat: 4.881782634333961,
            lng: -74.03628320237105
        },
        images: {
            main: main4,
            eachPlace: [
                fontanar1,
                fontanar2
            ]
        }
    },
]