import React, { createContext, useState, useEffect, useContext } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AuthenticationContext } from "../authentication/AuthenticationContext"

export const FavouritesContext = createContext()
const storage_key = "@favourites"
export const FavoritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext)
  const [favourites, setFavourites] = useState([])

  const saveFavourites = async (value, uid) => {
    try {
      if (value !== null) {
        const json_value = JSON.stringify(value)
        await AsyncStorage.setItem(`@favourites-${uid}`, json_value)
      }
    } catch (e) {
      // saving error
      console.log("error saving", e)
    }
  }

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`)

      if (value !== null) {
        setFavourites(JSON.parse(value))
      } else {
        setFavourites([])
      }
    } catch (e) {
      // error reading value
      console.log("error loading", e)
    }
  }

  const add = restaurant => {
    setFavourites([...favourites, restaurant])
  }
  const remove = restaurant => {
    const new_favorites = favourites.filter(x => x.place_id !== restaurant.place_id)

    setFavourites(new_favorites)
  }

  useEffect(() => {
    if (user) {
      loadFavourites(user.uid)
    }
  }, [user])

  useEffect(() => {
    if (user) {
      saveFavourites(favourites, user.uid)
    }
  }, [favourites, user])

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite: add, removeFavourite: remove }}>
      {children}
    </FavouritesContext.Provider>
  )
}
