import React from 'react'
import Form from '../Components/Form'
import '../css/contact.css'
import { useGlobalContext } from '../Components/utils/global.context'

const Contact = () => {

  const { state } = useGlobalContext()

  return (
    <div className={`contact-page ${state.theme}-contact`}>
      <h2>Want to know more?</h2>
      <h3>Send us your questions and we will contact you</h3>
      <Form/>
    </div>
  )
}

export default Contact
