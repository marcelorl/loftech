import React from 'react'
import { HEREMap, Marker, RouteLine } from 'here-maps-react'

export default () => {
    return (
        <HEREMap
            appId="bFDOZ1cahNKVNTGQV00f"
            appCode="8elG4aRfiDEZ2rjFyxeccA"
            center={{ lat: 10.998666, lng: -63.79841 }}
            zoom={12}
        >
            <Marker lat={10.998666} lng={-63.79841} />
            {/*<RouteLine shape={shape} strokeColor="#48dad0" lineWidth={4} />*/}
        </HEREMap>
    )
}