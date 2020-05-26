import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export class ToggleTheme extends Component {
  static contextType = ThemeContext
  render () {
    const { toggleTheme } = this.context
    return (
      <div>
        <button onClick={toggleTheme}>Toggle</button>
      </div>
    )
  }
}

export default ToggleTheme
