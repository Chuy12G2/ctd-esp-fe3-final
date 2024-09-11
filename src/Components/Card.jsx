import React from "react";
import { Link } from "react-router-dom";
import '../css/card.css'
import { useGlobalContext } from "../Components/utils/global.context";

const Card = ({ dentist }) => {

  const { state, dispatch } = useGlobalContext();
  
  const addFav = ()=>{
    dispatch({type: "ADD_FAVORITE", payload: dentist});

    const favorites = JSON.parse(localStorage.getItem("favorites"));

    if(!favorites){
      localStorage.setItem("favorites", JSON.stringify([dentist]))
    } else {
      localStorage.setItem("favorites", JSON.stringify([...favorites, dentist]))
    }
  }


  return (
    <div className={`card ${state.theme}-card`}>
      <p><span className="card__span">Name: </span> {dentist.name}</p>
      <p><span className="card__span">Username: </span>{dentist.username}</p>
      <p><span className="card__span">ID: </span>{dentist.id}</p>
      <button onClick={addFav} className="favButton">Add fav</button>
      <Link to={`/detail/${dentist.id}`}>See more...</Link>
    </div>
  );
};

export default Card;
