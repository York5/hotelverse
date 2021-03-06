// export const API = "http://localhost:4000/api/v1";
export const API = "https://hotelverse.gigalixirapp.com/api/v1";

export const API_PROPERTIES = `${API}/properties`;
export const API_IMAGES = `${API}/images`;
export const API_EXTRAS = `${API}/extras`;
export const API_FEATURES = `${API}/features`;
export const API_BOOKINGS = `${API}/bookings`;

export const API_AUTH_SIGN_UP = `${API}/registration`;
export const API_AUTH_SIGN_IN = `${API}/session`;
export const API_AUTH_SIGN_OUT = `${API}/session`;
export const API_AUTH_RENEW = `${API}/session/renew`;

export const URL_PATHS = {
  HOME: "/",
  SIGN_IN: "/signin",
  SIGN_UP: "/signup",
  PROPERTIES_LIST: "/properties",
  PROPERTIES_CREATE: "/properties/new",
  PROPERTIES_EDIT: "/properties/edit",
  PROPERTIES_DETAILS: "/properties/details",
  FAVOURITES: "/properties",
  BOOKINGS: "/bookings",
  CHECKOUT: "/checkout",
  NOTIFICATIONS: "/notifications",
  SETTINGS: "/settings",
};

export const ACTIONS = {
  GET_PROPERTIES: "GET_PROPERTIES",
  DELETE_PROPERTY: "DELETE_PROPERTY",
  OPEN_EDIT_PROPERTY: "OPEN_EDIT_PROPERTY",
  EDIT_PROPERTY: "EDIT_PROPERTY",
  GET_PROPERTY_DETAILS: "GET_PROPERTY_DETAILS",
  GET_BOOKINGS: "GET_BOOKINGS",
  GET_FEATURES: "GET_FEATURES",
};

export const AUTH_ACTIONS = {
  AUTH_SUCCESS: "AUTH_SUCCESS",
  AUTH_ERROR: "AUTH_ERROR",
  AUTH_SIGN_OUT: "AUTH_SIGN_OUT",
};

export const BAR_SIZE = 70;
