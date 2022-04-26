import React, { useContext, useState, useEffect } from "react"
import StyledComponent from "styled-components/native"
import { Searchbar } from "react-native-paper"
import { LocationContext } from "../../../services/location/LocationContext"

const SearchContainer = StyledComponent.View`
padding:${props => props.theme.space[3]};
`
const SearchBarComponent = ({ is_favourites_toggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext)
  const [search_keyword, setSearchKeyword] = useState(keyword)

  useEffect(() => {
    setSearchKeyword(keyword)
  }, [keyword])

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon={is_favourites_toggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        value={search_keyword}
        onSubmitEditing={() => {
          search(search_keyword)
        }}
        onChangeText={text => {
          setSearchKeyword(text)
        }}
      />
    </SearchContainer>
  )
}

export default SearchBarComponent
