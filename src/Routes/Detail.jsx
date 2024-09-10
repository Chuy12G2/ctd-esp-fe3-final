import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useGlobalContext } from '../Components/utils/global.context'
import '../css/detail.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {id} = useParams();

  const {theme} = useGlobalContext();

  const [dentist, setDentist] = useState({});

  const getDentist = () => {
    axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      setDentist(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    getDentist();
  }, [])

  return (
    <div className='detail-page'>
      <h1>Dentist' Details</h1>
      <h2>Name: {dentist.name}</h2>
      <h3>Email: {dentist.email}</h3>
      <h3>Phone: {dentist.phone}</h3>
      <h3>Website: {dentist.website}</h3>
    </div>
  )
}

export default Detail
