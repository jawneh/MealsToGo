import React from "react"
import StyledComponents from "styled-components/native"
import { ScrollView, TouchableOpacity } from "react-native"
import SpacerComponent from "../spacer/SpacerComponent"
import CompactRestaurantInfoComponent from "../restaurant/CompactRestaurantInfoComponent"
import { TextComponent } from "../typography/TextComponent"

const FavouriteWrapper = StyledComponents.View`
padding:10px;
`

const FavouritesBarComponent = ({ favourites = [], navigateToDetails }) => {
  if (!favourites.length) {
    return null
  } else {
    return (
      <FavouriteWrapper>
        <SpacerComponent variant="left.large">
          <TextComponent variant="caption">Favourites</TextComponent>
        </SpacerComponent>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourites.map(favourite => {
            const key = favourite.name
            return (
              <SpacerComponent key={key} position="left" size="medium">
                <TouchableOpacity onPress={() => navigateToDetails("RestaurantDetail", { restaurant: favourite })}>
                  <CompactRestaurantInfoComponent restaurant={favourite} />
                </TouchableOpacity>
              </SpacerComponent>
            )
          })}
        </ScrollView>
      </FavouriteWrapper>
    )
  }
}

export default FavouritesBarComponent
