import place1 from "../../assets/images/Rectangle -1@2x.png"
import place2 from "../../assets/images/Rectangle -2@2x.png"
import place3 from "../../assets/images/Rectangle -3@2x.png"
import main from "../../assets/images/Rectangle 169@2x.png"
import locationOnMap from "../../assets/images/Screenshot 2020-07-06 at 11.53.49@2x.png"

export const products = [
    {
        id: 1,
        property: 'Ático Dúplex de Obra Nueva',
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
        locationOnMap,
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
        property: 'Ático Dúplex de Obra Nueva',
        location: 'Marianao, Sant Boi de Llobregat',
        description: 'Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas.. Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas.. Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..',
        area: 102,
        bedrooms: 3,
        bathroom: 2,
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
        locationOnMap,
        images: {
            main,
            eachPlace: [
                place1,
                place2,
                place3
            ]
        }
    }
]