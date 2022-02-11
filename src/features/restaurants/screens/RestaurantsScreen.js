import React, { useContext } from "react"
import { View } from "react-native"
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper"
import StyledComponent from "styled-components/native"
import { FlatList } from "react-native"
import RestaurantInfoCardComponent from "../components/RestaurantInfoCardComponent"
import SpacerComponent from "../../../components/spacer/SpacerComponent"
import { SafeAreaComponent } from "../../../components/utility/SafeAreaComponent"
import { RestaurantContext } from "../../../services/restaurants/RestaturantContext"

const SearchContainer = StyledComponent.View`
padding:${props => props.theme.space[3]};
`
const LoadingIndicator = StyledComponent(ActivityIndicator)`
margin-left:-25px;
`
const LoadingContainer = StyledComponent.View`
position: absolute; 
top: 50%;
left: 50%;
`
const RestaurantList = StyledComponent(FlatList).attrs({ contentContainerStyle: { padding: 16 } })``

const RestaurantsScreen = () => {
  const { restaurants, loading, error } = useContext(RestaurantContext)

  return (
    <>
      <SafeAreaComponent>
        {loading && (
          <LoadingContainer>
            <LoadingIndicator size={50} animating={true} color={Colors.red800} />
          </LoadingContainer>
        )}
        <SearchContainer>
          <Searchbar />
        </SearchContainer>

        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <SpacerComponent position={"bottom"} size={"large"} key={item.name}>
                <RestaurantInfoCardComponent restaurant={item} />
              </SpacerComponent>
            )
          }}
          keyExtractor={item => item.name}
        />
      </SafeAreaComponent>
    </>
  )
}

export default RestaurantsScreen
