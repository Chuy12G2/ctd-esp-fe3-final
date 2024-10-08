import React from 'react'
import Card from '../Components/Card'
import '../css/home.css'

import { useGlobalContext } from '../Components/utils/global.context'

const Home = () => {
  const { state } = useGlobalContext()
    
  return (
    <main className={`home ${state.theme}-home`}>
      <h1>Home</h1>
      <div className='card-grid'>
       {state.data.map((dentist) => (
          <Card key={dentist.id} dentist={dentist}/>
        ))
       }
      </div>
    </main>
  )
}

export default Home
