import React, { useState, useContext } from "react"
import { ActivityIndicator, Colors } from "react-native-paper"
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/AccountStyledComponents"
import SpacerComponent from "../../../components/spacer/SpacerComponent"
import { TextComponent } from "../../../components/typography/TextComponent"
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContext"

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { onLogin, loading, error } = useContext(AuthenticationContext)

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label={"email"}
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={text => setEmail(text)}
        />
        <SpacerComponent size="large">
          <AuthInput
            label={"password"}
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={text => setPassword(text)}
          />
        </SpacerComponent>
        {error && (
          <ErrorContainer>
            <TextComponent variant="error">{error}</TextComponent>
          </ErrorContainer>
        )}
        <SpacerComponent size="large">
          {!loading ? (
            <AuthButton
              loading={loading}
              disabled={loading}
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </SpacerComponent>
      </AccountContainer>
      <SpacerComponent size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </SpacerComponent>
    </AccountBackground>
  )
}

export default LoginScreen
