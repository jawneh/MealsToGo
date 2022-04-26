import React, { useContext } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { SafeAreaComponent } from "../../components/utility/SafeAreaComponent"
import { Ionicons } from "@expo/vector-icons"
import { Text, Button } from "react-native"

import RestaurantNavigator from "./RestaurantNavigator"
import MapScreen from "../../features/map/screens/MapScreen"
import { RestaurantContextProvider } from "../../services/restaurants/RestaturantContext"
import { LocationContextProvider } from "../../services/location/LocationContext"
import { FavoritesContextProvider } from "../../services/favorites/FavoriteContext"
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext"

const Tab = createBottomTabNavigator()

const TAB_ICON = { Restaurants: "md-restaurant", Map: "md-map", Settings: "md-settings" }

const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext)
  return (
    <SafeAreaComponent>
      <Text>Settings</Text>
      <Button
        onPress={() => {
          onLogout()
        }}
        title="Logout"
      />
    </SafeAreaComponent>
  )
}

const createScreenOptions = ({ route }) => {
  const icon_name = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ color, size }) => <Ionicons name={icon_name} size={size} color={color} />,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  }
}

const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantNavigator} size="24" />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  )
}

export default AppNavigator
