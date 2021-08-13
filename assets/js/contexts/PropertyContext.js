import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useHistory } from "react-router";
import { ACTIONS, API_FEATURES, API_PROPERTIES } from "../helpers/consts";
import { useAuth } from "./AuthContext";

export const propertyContext = createContext();

export const useProperties = () => {
  return useContext(propertyContext);
};

const INIT_STATE = {
  propertiesData: [],
  propertyDetails: {},
  features: [],
  isEditMode: false,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_FEATURES:
      return { ...state, features: action.payload };
    case ACTIONS.GET_PROPERTIES:
      return { ...state, propertiesData: action.payload };
    case ACTIONS.GET_PROPERTY_DETAILS:
      return { ...state, propertyDetails: action.payload };
    case ACTIONS.OPEN_EDIT_PROPERTY:
      return { ...state, isEditMode: true };
    case ACTIONS.EDIT_PROPERTY:
      return { ...state, isEditMode: false };
    case ACTIONS.DELETE_PROPERTY:
      return { ...state, propertyDetails: {} };
    default:
      return state;
  }
};

const PropertyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const history = useHistory();
  const { attachAuth } = useAuth();

  async function getFeatures() {
    const opts = attachAuth({});
    const { data } = await axios.get(API_FEATURES, {}, opts);

    dispatch({
      type: ACTIONS.GET_FEATURES,
      payload: data.data,
    });
  }

  async function getPropertiesData() {
    const { data } = await axios(API_PROPERTIES);

    dispatch({
      type: ACTIONS.GET_PROPERTIES,
      payload: data.data,
    });
  }

  async function getPropertyDetails(id) {
    const { data } = await axios(`${API_PROPERTIES}/${id}`);
    dispatch({
      type: ACTIONS.GET_PROPERTY_DETAILS,
      payload: data.data,
    });
  }

  async function addProperty(property) {
    const opts = attachAuth({});
    const { data } = await axios.post(
      API_PROPERTIES,
      { property: property },
      opts
    );
    return data.data;
  }

  function openEditMode() {
    dispatch({
      type: ACTIONS.OPEN_EDIT_PROPERTY,
    });
  }

  async function editProperty(property) {
    const opts = attachAuth({});
    const { data } = await axios.put(
      `${API_PROPERTIES}/${property.id}`,
      { property: property },
      opts
    );
    dispatch({
      type: ACTIONS.EDIT_PROPERTY,
    });
  }

  async function deleteProperty(id) {
    const opts = attachAuth({});
    const { data } = await axios.delete(`${API_PROPERTIES}/${id}`, {}, opts);
    dispatch({
      type: ACTIONS.DELETE_PROPERTY,
    });
    await getPropertiesData();
  }

  const values = {
    history,
    featuresData: state.features,
    getFeatures,
    propertiesData: state.propertiesData,
    propertyDetails: state.propertyDetails,
    getPropertiesData,
    getPropertyDetails,
    addProperty,
    deleteProperty,
    openEditMode,
    isEditMode: state.isEditMode,
    editProperty,
  };

  return (
    <propertyContext.Provider value={values}>
      {children}
    </propertyContext.Provider>
  );
};

export default PropertyContextProvider;
