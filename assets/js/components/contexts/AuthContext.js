import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import {
  API_AUTH_RENEW,
  API_AUTH_SIGN_IN,
  API_AUTH_SIGN_OUT,
  API_AUTH_SIGN_UP,
  AUTH_ACTIONS,
} from "../helpers/consts";

const authContext = createContext();

const INIT_STATE = {
  user: null,
  messageType: null,
  message: null,
};

function compileMessages(messages) {
  let string = "";
  for (let key in messages) {
    string = string + `${key} - ${messages[key]}`;
  }
  return string;
}

const userCache = {
  get() {
    return JSON.parse(localStorage.getItem("user_auth"));
  },
  set(user) {
    let dt = new Date();
    user.exp = dt.setMinutes(dt.getMinutes() + 30);
    localStorage.setItem("user_auth", JSON.stringify(user));
  },
  drop() {
    localStorage.removeItem("user_auth");
  },
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.AUTH_SUCCESS:
      userCache.set(action.payload);
      return {
        ...state,
        messageType: "success",
        message: "Sign in successful",
        user: action.payload,
      };
    case AUTH_ACTIONS.AUTH_ERROR:
      return {
        ...state,
        user: null,
        messageType: "error",
        message: action.payload,
      };
    case AUTH_ACTIONS.AUTH_SIGN_OUT:
      userCache.drop();
      return {
        ...state,
        user: null,
        messageType: "success",
        message: "Sign out successful",
      };

    default:
      return state;
  }
};

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const history = useHistory();

  async function signUp(userForm) {
    const user = {
      email: userForm.email,
      password: userForm.password,
      password_confirmation: userForm.password,
      first_name: userForm.firstName,
      last_name: userForm.lastName,
      role: "guest",
    };

    try {
      const resp = await axios.post(API_AUTH_SIGN_UP, { user });
      if (resp.status >= 200 && resp.status <= 299) {
        dispatch({
          type: AUTH_ACTIONS.AUTH_SUCCESS,
          payload: resp.data.data,
        });
      } else {
        dispatch({
          type: AUTH_ACTIONS.AUTH_ERROR,
          payload: res.data.message,
        });
      }
    } catch (error) {
      dispatch({
        type: AUTH_ACTIONS.AUTH_ERROR,
        payload: `${error.response.data.error.message}: ${compileMessages(
          error.response.data.error.errors
        )}`,
      });
    }
  }

  async function signIn(userForm) {
    const { data } = await axios.post(API_AUTH_SIGN_IN, { user: userForm });
    dispatch({
      type: AUTH_ACTIONS.AUTH_SUCCESS,
      payload: data.data,
    });
  }

  async function signOut() {
    const { data } = await axios.delete(API_AUTH_SIGN_OUT);
    dispatch({
      type: AUTH_ACTIONS.AUTH_SIGN_OUT,
    });
    console.log(userCache.get(), state);
  }

  async function renewAuth(user) {
    const opts = {
      headers: {
        Authorization: user.renewal_token,
      },
    };
    const { data } = await axios.post(API_AUTH_RENEW, {}, opts);
    dispatch({
      type: AUTH_ACTIONS.AUTH_SUCCESS,
      payload: data.data,
    });
  }

  function checkAuth() {
    const cache = userCache.get();
    if (!cache) {
      console.log("cache is empty");
      // history.push("/signin");
    } else if (cache.exp <= Date.now()) {
      return;
      // } else if (cache.exp > Date.now()) {
    } else if (true) {
      console.log(cache.exp, Date.now());
      renewAuth(cache);
    }
  }

  const values = {
    user: state.user,
    messageType: state.messageType,
    message: state.message,
    signUp,
    signIn,
    signOut,
    checkAuth,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
