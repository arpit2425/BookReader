import React, { Component, createContext } from 'react'
export const ThemeContext = createContext()
export class ThemeContextProvider extends Component {
  state = {
    isLight: false,
    light: {
      syntax: '#555',
      ui: '#ddd',
      bg: '#eee'
    },
    dark: {
      syntax: '#ddd',
      ui: '#333',
      bg: '#555'
    }
  }
  toggleTheme = () => {
    this.setState({
      isLight: !this.state.isLight
    })
  }
  render () {
    console.log({ ...this.state, toggleTheme: this.toggleTheme })
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider
