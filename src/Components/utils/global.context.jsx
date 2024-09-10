import { createContext, useEffect, useReducer, useContext } from "react";

export const initialState = {theme: "", data: [], favorites: []};

const favs = JSON.parse(localStorage.getItem("favorites"));

if(favs) initialState.favorites = favs

export const ContextGlobal = createContext(undefined);

import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload]};
    case "REMOVE_FAVORITE":
      return { ...state, favorites: state.favorites.filter(fav => fav.id !== action.payload.id)}
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);

  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: "SET_DATA", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useGlobalContext = () => {
  return useContext(ContextGlobal);
};
