import React from "react"
import { StatusBar as ExpoStatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import RestaurantsScreen from "./src/features/restaurants/screens/RestaurantsScreen"
import { ThemeProvider } from "styled-components/native"
import { theme } from "./src/infrastructure/theme"
import { SafeAreaComponent } from "./src/components/utility/SafeAreaComponent"
import { Ionicons } from "@expo/vector-icons"
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato"
import { RestaurantContextProvider } from "./src/services/restaurants/RestaturantContext"
import { LocationContextProvider } from "./src/services/location/LocationContext"
const Tab = createBottomTabNavigator()

const TAB_ICON = { Restaurants: "md-restaurant", Map: "md-map", Settings: "md-settings" }

const SettingsScreen = () => (
  <SafeAreaComponent>
    <Text>Settings</Text>
  </SafeAreaComponent>
)
const MapScreen = () => (
  <SafeAreaComponent>
    <Text>Map</Text>
  </SafeAreaComponent>
)

const createScreenOptions = ({ route }) => {
  const icon_name = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ color, size }) => <Ionicons name={icon_name} size={size} color={color} />,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  }
}

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular })
  const [latoLoaded] = useLato({ Lato_400Regular, Lato_700Bold })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} size="24" />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  )
}
