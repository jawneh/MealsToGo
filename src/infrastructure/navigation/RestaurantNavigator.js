import React from "react"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import RestaurantsScreen from "../../features/restaurants/screens/RestaurantsScreen"
import RestaurantDetailScreen from "../../features/restaurants/screens/RestaurantDetailScreen"
const RestaurantStack = createStackNavigator()

const RestaurantNavigator = () => {
  const screen_options = {
    headerMode: "none",
    headerShown: false,
    ...TransitionPresets.ModalPresentationIOS,
  }

  return (
    <RestaurantStack.Navigator screenOptions={screen_options}>
      <RestaurantStack.Screen name="Home" component={RestaurantsScreen} />
      <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
    </RestaurantStack.Navigator>
  )
}

export default RestaurantNavigator
