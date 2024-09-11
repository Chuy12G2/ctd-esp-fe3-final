import React from 'react'
import '../css/footer.css'
import { useGlobalContext } from '../Components/utils/global.context'

const Footer = () => {

  const { state } = useGlobalContext();

  return (
    <footer className={`footer ${state.theme}-footer`}>
        <p>Powered by</p>
        <img src="../../images/DH.png" alt="DH-logo" />
    </footer>
  )
}

export default Footer
