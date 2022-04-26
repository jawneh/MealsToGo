import React, { useContext } from "react"
import StyledComponents from "styled-components/native"
import { FavouritesContext } from "../../services/favorites/FavoriteContext"
import { AntDesign } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"

const FavouriteButton = StyledComponents(TouchableOpacity)`
position:absolute;
top:25px;
right:25px;  
z-index:9;

`

const Favourite = ({ restaurant }) => {
  const { favourites, addFavourite, removeFavourite } = useContext(FavouritesContext)
  const is_favourite = favourites.find(r => r.place_id === restaurant.place_id)
  // const is_favourite = false
  return (
    <FavouriteButton onPress={() => (!is_favourite ? addFavourite(restaurant) : removeFavourite(restaurant))}>
      <AntDesign name={is_favourite ? "heart" : "hearto"} size={24} color={is_favourite ? "red" : "white"} />
    </FavouriteButton>
  )
}

export default Favourite
