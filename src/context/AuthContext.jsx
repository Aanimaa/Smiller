import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('smiler_user')
      return raw ? JSON.parse(raw) : null
    } catch (e) {
      return null
    }
  })

  useEffect(() => {
    try {
      if (user) localStorage.setItem('smiler_user', JSON.stringify(user))
      else localStorage.removeItem('smiler_user')
    } catch (e) {}
  }, [user])

  const login = ({ email }) => {
    // Simule une authentification réussie. En vrai, appeler API et gérer le token.
    setUser({ email })
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

