import React, { useContext, useEffect, useState } from "react"
import MapView from "react-native-maps"
import StyledComponents from "styled-components/native"
import MapSearchComponent from "../components/MapSearchComponent"
import { LocationContext } from "../../../services/location/LocationContext"
import { RestaurantContext } from "../../../services/restaurants/RestaturantContext"
import MapCalloutComponent from "../components/MapCalloutComponent"
const Map = StyledComponents(MapView)`
height:100%;
width:100%;
`

const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext)
  const { restaurants = [] } = useContext(RestaurantContext)
  const [lat_delta, setLatDelta] = useState(0)
  const { lat, lng, viewport } = location
  useEffect(() => {
    const northeast_lat = viewport.northeast.lat
    const southwest_lat = viewport.southwest.lat
    setLatDelta(northeast_lat - southwest_lat)
  }, [location, viewport])

  return (
    <>
      <MapSearchComponent />
      <Map region={{ latitude: lat, longitude: lng, latitudeDelta: lat_delta, longitudeDelta: 0.02 }}>
        {restaurants.map(restaurant => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{ latitude: restaurant.geometry.location.lat, longitude: restaurant.geometry.location.lng }}
            >
              <MapView.Callout onPress={() => navigation.navigate("RestaurantDetail", { restaurant })}>
                <MapCalloutComponent restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          )
        })}
      </Map>
    </>
  )
}

export default MapScreen
