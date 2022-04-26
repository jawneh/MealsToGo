import React from "react"
import CompactRestaurantInfoComponent from "../../../components/restaurant/CompactRestaurantInfoComponent"

const MapCalloutComponent = ({ restaurant = {} }) => {
  return <CompactRestaurantInfoComponent restaurant={restaurant} is_map />
}

export default MapCalloutComponent
