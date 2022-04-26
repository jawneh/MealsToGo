import React, { useContext } from "react"
import { NavigationContainer } from "@react-navigation/native"

import AppNavigator from "./AppNavigator"
import AccountNavigator from "./AccountNavigator"

import { AuthenticationContext } from "../../services/authentication/AuthenticationContext"

const Navigation = () => {
  const { is_authenticated } = useContext(AuthenticationContext)
  return <NavigationContainer>{is_authenticated ? <AppNavigator /> : <AccountNavigator />}</NavigationContainer>
}

export default Navigation
