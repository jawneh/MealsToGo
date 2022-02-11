import StyledComponent from "styled-components/native"
import { StatusBar, SafeAreaView } from "react-native"

export const SafeAreaComponent = StyledComponent(SafeAreaView)`
flex:1;
${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`
