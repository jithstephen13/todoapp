// TODO: use this store variable to create a store.

import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { productReducer } from "./product/product.reducer";

// Note: you can delete the line below, but remember to create a new store variable


const rootReducer=combineReducers({
   PostManeger:productReducer,
  // FeedManeger:,
  AuthManager:authReducer
})
const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const logger=(store)=>next =>
// action => {

//   if (typeof action === 'function') {
//     action(store.dispatch).then(next)
//   }

//   return next(action)
// }

export const store = legacy_createStore(rootReducer,composer(applyMiddleware(thunk)));
// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
