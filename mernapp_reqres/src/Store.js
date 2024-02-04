import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import {
  persistReducer, persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import Cookies from "js-cookie";
import storage from "redux-persist/lib/storage";

// Custom storage adapter for cookies
const cookieStorage = {
  getItem: (key) =>
    new Promise((resolve, reject) => {
      try {
        const value = Cookies.get(key);
        resolve(value);
      } catch (error) {
        reject(error);
      }
    }),
  setItem: (key, value) =>
    new Promise((resolve, reject) => {
      try {
        Cookies.set(key, value, { expires: 7 });
        resolve();
      } catch (error) {
        reject(error);
      }
    }),
  removeItem: (key) => Cookies.remove(key),
};


const persistConfig = {
  key: "root",
  storage,  //uncomment this to store in local storage
  // storage: cookieStorage, // this will store data in cookies
};


const appdata = (state = {}, { type, payload }) => {
  if (type === "SET_APP_DATA") {
    return { ...state, [payload[0]]: payload[1] }
  }
  if (type === "DELETE_APP_DATA") {
    return { ...state, [payload]: undefined }
  }
  return state
}

const reducer = combineReducers({ appdata })
const persistedReducer = persistReducer(persistConfig, reducer);
const storecookie = configureStore({
  reducer: persistedReducer, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})
const store = configureStore({ reducer })
const persistor = persistStore(storecookie);

export const setRedux = (key, val, cookieflag = true) => {
  if (cookieflag)
    storecookie.dispatch({ type: "SET_APP_DATA", "payload": [key, val] })
  else
    store.dispatch({ type: "SET_APP_DATA", "payload": [key, val] })
}

export const getRedux = (key = undefined, cookieflag = true) => {
  if (cookieflag)
    return storecookie.getState().appdata[key]
  return store.getState().appdata[key]
}

export const removeRedux = (key = undefined, cookieflag = true) => {
  if (cookieflag)
    storecookie.dispatch({ type: "DELETE_APP_DATA", "payload": key })
  else
    store.dispatch({ type: "DELETE_APP_DATA", "payload": key })
}

export { store, storecookie, persistor };
export default store;



// import { configureStore } from "@reduxjs/toolkit"
// import { combineReducers } from "redux"

// const appdata = (state = {}, {type, payload}) => {
//     if(type == "SET_APP_DATA") {
//       return {...state, [payload[0]]: payload[1] }
//     }
//     if(type == "DELETE_APP_DATA") {
//       return {...state, [payload]: undefined }
//     }
//     return state
//   }
//   const reducer = combineReducers({appdata})
//   const store = configureStore({reducer})
//   export const setRedux = (key, val) => {
//     store.dispatch({ type : "SET_APP_DATA", "payload": [key, val] })
//   }
//   export const getRedux = (key = undefined) => {
//     return store.getState().appdata[key]
//   }
//   export const removeRedux = (key = undefined) => {
//     store.dispatch({ type : "DELETE_APP_DATA", "payload": key })
//   }
//   export default store;