import React from "react";
import Card from "../Components/Card";
import { useEffect } from "react";
import { useGlobalContext } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

let favs = JSON.parse(localStorage.getItem("favorites")) || [];

const Favs = () => {

  const { state } = useGlobalContext();

  useEffect(() => {
    favs = JSON.parse(localStorage.getItem("favorites"))
  }, [state])

  return (
    <>
      <h1>Dentists Favs</h1>
      { favs && <div className="card-grid">
        {favs.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div> }

      { !favs && <h2>You haven't added any dentist to your favorites</h2> }
    </>
  );
};

export default Favs;
