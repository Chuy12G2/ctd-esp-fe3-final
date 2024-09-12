import React from "react";
import Card from "../Components/Card";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../Components/utils/global.context";
import '../css/favs.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [favsLocalStorage, setFavsLocalStorage] = useState([]);

  const { state } = useGlobalContext();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites"));

    if (favs) {
      setFavsLocalStorage(favs);
    }

  }, [state.favorites]);

  return (
    <div className={`favs ${state.theme}-favs`}>
      <h1>Dentists Favs</h1>
      { favsLocalStorage && <div className="card-grid">
        {favsLocalStorage.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div> }

      { favsLocalStorage.length === 0 && <h2 className="no-favs">You haven't added any dentist to your favorites</h2> }
    </div>
  );
};

export default Favs;
