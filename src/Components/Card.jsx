import React from "react";
import { Link } from "react-router-dom";
import '../css/card.css'

const Card = ({ name, username, id }) => {
  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <p><span className="card__span">Name: </span> {name}</p>
      <p><span className="card__span">Username: </span>{username}</p>
      <p><span className="card__span">ID: </span>{id}</p>
        {/* En cada card deberan mostrar en name - username y el id */}


        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Add fav</button>
      <Link to={`/detail/${id}`}>See more</Link>
    </div>
  );
};

export default Card;
