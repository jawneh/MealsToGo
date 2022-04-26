import React from "react"
import { SvgXml } from "react-native-svg"
import star from "../../../../assets/star"
import open from "../../../../assets/open"
import SpacerComponent from "../../../components/spacer/SpacerComponent"
import { TextComponent } from "../../../components/typography/TextComponent"
import Favourite from "../../../components/favorites/FavouriteComponent"
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Rating,
  Section,
  SectionEnd,
  Icon,
} from "./RestaurantStyles"

const RestaurantInfoCardComponent = ({ restaurant = {} }) => {
  const {
    name = "Mani Sushi",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "The Village, Senegambia",
    is_open_now = true,
    rating = 4,
    is_closed_temporarily = true,
    place_id = "some place id",
  } = restaurant
  const rating_array = Array.from(new Array(Math.floor(rating)))

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover source={{ url: photos[0] }} />
      <Info>
        <TextComponent variant={"label"}>{name}</TextComponent>
        <Section>
          <Rating>
            {rating_array.map((_, i) => (
              <SvgXml xml={star} width={20} height={20} key={`star-${place_id}-${i}`} />
            ))}
          </Rating>
          <SectionEnd>
            {is_closed_temporarily && <TextComponent variant="error">CLOSED TEMPORARILY</TextComponent>}
            <SpacerComponent position={"left"} size={"large"}>
              {is_open_now && <SvgXml xml={open} width={20} height={20} />}
            </SpacerComponent>
            <SpacerComponent position={"left"} size={"large"}>
              <Icon source={{ uri: icon }} />
            </SpacerComponent>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  )
}
export default RestaurantInfoCardComponent
