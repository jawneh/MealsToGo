import React, { useState, createContext, useEffect } from "react"
import { locationRequest, locationTransform } from "./LocationService"

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco")
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const onSearch = search_keyword => {
    setLoading(true)
    setKeyword(search_keyword)
  }

  useEffect(() => {
    if (!keyword.length) {
      //dont do anything
      return
    }
    locationRequest(keyword.toLowerCase().trim())
      .then(locationTransform)
      .then(result => {
        setLoading(false)
        setLocation(result)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [keyword])

  return (
    <LocationContext.Provider value={{ loading, error, location, search: onSearch, keyword }}>
      {children}
    </LocationContext.Provider>
  )
}
