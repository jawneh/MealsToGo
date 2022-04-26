import React, { useContext, useState } from "react"
import StyledComponent from "styled-components/native"
import RestaurantInfoCardComponent from "../components/RestaurantInfoCardComponent"
import SpacerComponent from "../../../components/spacer/SpacerComponent"
import { SafeAreaComponent } from "../../../components/utility/SafeAreaComponent"
import { RestaurantContext } from "../../../services/restaurants/RestaturantContext"
import { ActivityIndicator, Colors } from "react-native-paper"
import { FlatList, TouchableOpacity } from "react-native"
import SearchBarComponent from "../components/SearchBarComponent"
import FavouritesBarComponent from "../../../components/favorites/FavouritesBarComponent"
import { FavouritesContext } from "../../../services/favorites/FavoriteContext"
const LoadingIndicator = StyledComponent(ActivityIndicator)`
margin-left:-25px;
`
const LoadingContainer = StyledComponent.View`
position: absolute; 
top: 50%;
left: 50%;
`
const RestaurantList = StyledComponent(FlatList).attrs({ contentContainerStyle: { padding: 16 } })``

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, loading, error } = useContext(RestaurantContext)
  const [is_toggled, setIsToggled] = useState(false)
  const { favourites } = useContext(FavouritesContext)

  return (
    <>
      <SafeAreaComponent>
        {loading && (
          <LoadingContainer>
            <LoadingIndicator size={50} animating={true} color={Colors.red800} />
          </LoadingContainer>
        )}
        <SearchBarComponent is_favourites_toggled={is_toggled} onFavouritesToggle={() => setIsToggled(!is_toggled)} />
        {is_toggled && <FavouritesBarComponent favourites={favourites} navigateToDetails={navigation.navigate} />}
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item })}>
                <SpacerComponent position={"bottom"} size={"large"} key={item.name}>
                  <RestaurantInfoCardComponent restaurant={item} />
                </SpacerComponent>
              </TouchableOpacity>
            )
          }}
          keyExtractor={item => item.name}
        />
      </SafeAreaComponent>
    </>
  )
}

export default RestaurantsScreen
