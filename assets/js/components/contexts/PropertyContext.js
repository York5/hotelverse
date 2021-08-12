import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useHistory } from "react-router";
import { ACTIONS, JSON_API_PROPERTIES } from "../helpers/consts";

export const propertyContext = createContext();

export const useProperties = () => {
  return useContext(propertyContext);
};

const INIT_STATE = {
  propertiesData: [],
  propertyDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PROPERTIES:
      return { ...state, propertiesData: action.payload };
    case ACTIONS.GET_PROPERTY_DETAILS:
      return { ...state, propertyDetails: action.payload };
    default:
      return state;
  }
};

const PropertyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const history = useHistory();

  console.log(state.propertiesData);

  const getPropertiesData = () => {
    const data = axios(JSON_API_PROPERTIES).then(function (response) {
      console.log(response.data);
      dispatch({
        type: ACTIONS.GET_PROPERTIES,
        payload: response.data.data,
      });
    });
  };

  const getPropertyDetails = (id) => {
    const data = axios(`${JSON_API_PROPERTIES}/${id}`).then(function (
      response
    ) {
      console.log(response.data);
      dispatch({
        type: ACTIONS.GET_PROPERTY_DETAILS,
        payload: response.data.data,
      });
    });
  };

  const addProperty = (property) => {
    console.log(property);
    const data = axios.post(JSON_API_PROPERTIES, { property: property });
    console.log("data 0000here", data);
    data.then((hh) => console.log(hh, "HAHAHAHAHAHAHAH"));
    getPropertiesData();
  };

  const values = {
    history,
    propertiesData: state.propertiesData,
    propertyDetails: state.propertyDetails,
    getPropertiesData,
    getPropertyDetails,
    addProperty,
  };

  return (
    <propertyContext.Provider value={values}>
      {children}
    </propertyContext.Provider>
  );
};

export default PropertyContextProvider;
