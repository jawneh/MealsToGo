import React from "react"
import StyledComponents from "styled-components/native"
import { TextComponent } from "../typography/TextComponent"
import WebView from "react-native-webview"
import { Platform } from "react-native"

const CompactImage = StyledComponents.Image`
border-radius:10px;
width:120px;
height:100px;
`
const CompactWebview = StyledComponents(WebView)`
border-radius:10px;
width:120px;
height:100px;
`

const Item = StyledComponents.View`
padding:10px;
max-width:120px;
align-items:center;  
`

const is_android = Platform.OS === "android"

const CompactRestaurantInfoComponent = ({ restaurant, is_map }) => {
  const Image = is_android && is_map ? CompactWebview : CompactImage
  const { photos, name } = restaurant
  return (
    <Item>
      <Image source={{ uri: photos[0] }} />
      <TextComponent>{name}</TextComponent>
    </Item>
  )
}

export default CompactRestaurantInfoComponent
