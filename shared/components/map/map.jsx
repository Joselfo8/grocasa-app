import { useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"


export default function Map (props) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })

    function Gmap() {
        const center = useMemo(() => (props), [])
    
        return (
            <GoogleMap 
                zoom={10} center={center} mapContainerClassName="map-container"
            >
                <Marker position={center} />
            </GoogleMap>
        )
    }

    if(!isLoaded) return <div>Cargando...</div>
    return <Gmap/> 

}

