import React, { useState, createContext, useEffect, useContext } from "react"
import { restaurantRequest, restaurantsTransform } from "./RestaurantService"
import { LocationContext } from "../location/LocationContext"

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { location } = useContext(LocationContext)

  const retrieveRestaurants = loc => {
    setLoading(true)
    setRestaurants([])
    setTimeout(() => {
      restaurantRequest(loc)
        .then(restaurantsTransform)
        .then(results => {
          setRestaurants(results)
          setLoading(false)
        })
        .catch(err => {
          setLoading(false)
          setError(err)
        })
    }, 2000)
  }
  useEffect(() => {
    if (location) {
      const location_string = `${location.lat},${location.lng}`
      retrieveRestaurants(location_string)
    }
  }, [location])
  return <RestaurantContext.Provider value={{ restaurants, loading, error }}>{children}</RestaurantContext.Provider>
}
