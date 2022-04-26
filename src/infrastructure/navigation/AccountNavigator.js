import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from "../../features/account/screens/LoginScreen"
import AccountScreen from "../../features/account/screens/AccountScreen"
import RegsiterScreen from "../../features/account/screens/RegsiterScreen"

const Stack = createStackNavigator()

const AccountNavigator = () => {
  const screen_options = {
    headerMode: "none",
    headerShown: false,
  }

  return (
    <Stack.Navigator screenOptions={screen_options}>
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegsiterScreen} />
    </Stack.Navigator>
  )
}

export default AccountNavigator
