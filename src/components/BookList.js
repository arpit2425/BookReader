import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export class BookList extends Component {
  render () {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLight, light, dark } = context
          const theme = isLight ? light : dark
          return (
            <div
              className='book-list'
              style={{ color: theme.syntax, background: theme.bg }}
            >
              <ul>
                <li style={{ background: theme.ui }}>the way of kings</li>
                <li style={{ background: theme.ui }}>the name of the wind</li>
                <li style={{ background: theme.ui }}>the final empire</li>
              </ul>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default BookList
