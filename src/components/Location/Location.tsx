
"use client"
import {Map} from 'leaflet'
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import { Transition } from "../Transition"
import { MarkerHouse } from './MarkerHouse'

export function Location() {
    const coordinatePoint = {
        lat:-34.416666666667,
        lng:-58.65
        
    }

    const centerMarker = (position: {lat:number, lng:number}, fnMap: Map)=>{
        fnMap.flyTo({
            lat:position.lat,
            lng:position.lng
        })
    }

    return (
        <Transition className="px-4 py-8 md:py-44 mx:py-36">
            <h4 className="text-center text-secondary" id="location">Localización</h4>
            <h2 className="max-w-2xl mx-auto my-4 mb-8 text-3xl font-semibold text-center">Mira donde se encuentra la cabaña mas comoda para ti</h2>
            <MapContainer center={coordinatePoint} zoom={10} scrollWheelZoom={false} className='h-[700px]'>
                <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png"/>
                <MarkerHouse selectMarker={centerMarker}/>
            </MapContainer>
        </Transition>
    )
}
