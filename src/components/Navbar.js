import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

// export class Navbar extends Component {
//   render () {
//     return (
//       <AuthContext.Consumer>
//         {authContent => (
//           <ThemeContext.Consumer>
//             {themeContext => {
//               const { isAuth, toggleAuthentication } = authContent
//               const { isLight, light, dark } = themeContext
//               const theme = isLight ? light : dark
//               console.log(themeContext)
//               return (
//                 <nav style={{ background: theme.ui, color: theme.syntax }}>
//                   <h1>Context App</h1>
//                   <div onClick={toggleAuthentication}>
//                     {isAuth ? 'Logged In' : 'Logged out'}
//                   </div>
//                   <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                   </ul>
//                 </nav>
//               )
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     )
//   }
// }
function Navbar () {
  const { isLight, light, dark } = useContext(ThemeContext)
  const { isAuth, toggleAuthentication } = useContext(AuthContext)
  const theme = isLight ? light : dark
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
}

export default Navbar
