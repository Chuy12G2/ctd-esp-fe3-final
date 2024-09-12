import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/card.css'
import { useGlobalContext } from "../Components/utils/global.context";
import { useState } from "react";

const Card = ({ dentist }) => {

  const { state, dispatch } = useGlobalContext();
  
  const addRemoveFav = ()=>{

    if(!isFav) {
      dispatch({type: "ADD_FAVORITE", payload: dentist});
    } else {
      dispatch({type: "REMOVE_FAVORITE", payload: dentist});
    }  

    setIsFav(!isFav)
  }

  const saveFavoritesInLocalStorage = () => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  };

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const isFav = state.favorites.find(fav => fav.id === dentist.id);
    if(isFav) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [state.favorites]);

  useEffect(() => {
    saveFavoritesInLocalStorage();
  }, [state.favorites]);

  return (
    <div className={`card ${state.theme}-card`}>
      <img src="../../images/doctor.jpg" alt="dentist"/>
      <p><span className="card__span">Name: </span> {dentist.name}</p>
      <p><span className="card__span">Username: </span>{dentist.username}</p>
      <p><span className="card__span">ID: </span>{dentist.id}</p>
      <button onClick={addRemoveFav} className="favButton">{state.favorites.find(fav => fav.id === dentist.id) ? "❤️" : "🤍"}</button>
      <Link to={`/detail/${dentist.id}`}>See more...</Link>
    </div>
  );
};

export default Card;
