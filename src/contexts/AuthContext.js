import React, { Component, createContext } from 'react'
export const AuthContext = createContext()
export class AuthContextProvider extends Component {
  state = {
    isAuth: false
  }
  toggleAuthentication = () => {
    this.setState({ isAuth: !this.state.isAuth })
  }
  render () {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          toggleAuthentication: this.toggleAuthentication
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContextProvider
