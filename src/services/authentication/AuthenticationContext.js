import React, { useState, createContext, useEffect } from "react"

import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  authStateChanged,
  signOutUser,
} from "./AuthenticationService"

export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    authStateChanged(usr => {
      console.log(usr)
    })
  }, [])

  const onLogin = (email, password) => {
    setLoading(true)
    // logInWithEmailAndPassword("jawnehmuhammed@yahoo.com", "Devman20201")
    logInWithEmailAndPassword(email, password)
      .then(u => {
        setUser(u)
        setLoading(false)
      })
      .catch(e => {
        setError(e.message.toString())
        setLoading(false)
      })
  }

  const onRegister = (email, password, confirm_password) => {
    setLoading(true)

    if (password !== confirm_password) {
      setError("Error: Password do not match")
      setLoading(false)
      return
    }
    registerWithEmailAndPassword(email, password)
      .then(u => {
        setLoading(false)
        setUser(u)
      })
      .catch(e => {
        setError(e.message.toString())
        setLoading(false)
      })
  }

  const onLogout = () => {
    signOutUser()
    setUser(null)
  }
  return (
    <AuthenticationContext.Provider
      value={{ is_authenticated: !!user, user, loading, error, onLogin, onRegister, onLogout }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
