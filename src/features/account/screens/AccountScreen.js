import React from "react"
import { AccountBackground, AccountCover, AccountContainer, AuthButton } from "../components/AccountStyledComponents"
import SpacerComponent from "../../../components/spacer/SpacerComponent"
const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton icon="lock-open-outline" mode="contained" onPress={() => navigation.navigate("Login")}>
          Login
        </AuthButton>
        <SpacerComponent size="large">
          <AuthButton icon="email" mode="contained" onPress={() => navigation.navigate("Register")}>
            Register
          </AuthButton>
        </SpacerComponent>
      </AccountContainer>
    </AccountBackground>
  )
}

export default AccountScreen
