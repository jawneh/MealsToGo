import React, { useState, createContext, useEffect } from "react"
import { locationRequest, locationTransform } from "./LocationService"

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco")
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const onSearch = (search_keyword = "Antwerp") => {
    setLoading(true)
    setKeyword(search_keyword)
    locationRequest(search_keyword.toLowerCase())
      .then(locationTransform)
      .then(result => {
        setLoading(false)
        setLocation(result)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }

  useEffect(() => {
    onSearch()
  }, [])

  return (
    <LocationContext.Provider value={{ loading, error, location, search: onSearch, keyword }}>
      {children}
    </LocationContext.Provider>
  )
}
