import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

export class Navbar extends Component {
  render () {
    return (
      <AuthContext.Consumer>
        {authContent => (
          <ThemeContext.Consumer>
            {themeContext => {
              const { isAuth, toggleAuthentication } = authContent
              const { isLight, light, dark } = themeContext
              const theme = isLight ? light : dark
              console.log(themeContext)
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>
                  <div onClick={toggleAuthentication}>
                    {isAuth ? 'Logged In' : 'Logged out'}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              )
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    )
  }
}

export default Navbar
