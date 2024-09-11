import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'
import { useGlobalContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useGlobalContext();

  const changeTheme = () => {
    dispatch({ type: "SET_THEME", payload: state.theme === "light" ? "dark" : "light" });
  }

  return (
    <nav className={`navbar ${state.theme}-navbar`}>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>

      <button onClick={changeTheme}>Change Theme</button>
    </nav>
  )
}

export default Navbar
