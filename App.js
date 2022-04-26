import React, { useState, useEffect } from "react"
// import { logInWithEmailAndPassword } from "./src/services/authentication/AuthenticationService"
import "react-native-gesture-handler"
import { StatusBar as ExpoStatusBar } from "expo-status-bar"
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato"
import { ThemeProvider } from "styled-components/native"
import { theme } from "./src/infrastructure/theme"
import { AuthenticationContextProvider } from "./src/services/authentication/AuthenticationContext"
import Navigation from "./src/infrastructure/navigation/"

export default function App() {
  // const [is_authenticated, setIsAuthenticated] = useState(false)

  // useEffect(() => {
  // const user = await logInWithEmailAndPassword("jawnehmuhammed@yahoo.com", "Devman20201")
  // // console.log(user)
  // if (user) {
  //   setIsAuthenticated(true)
  // }
  // }, [])

  const [oswaldLoaded] = useOswald({ Oswald_400Regular })
  const [latoLoaded] = useLato({ Lato_400Regular, Lato_700Bold })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }
  // if (!is_authenticated) return null

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  )
}
