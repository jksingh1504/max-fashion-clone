import {
    legacy_createStore,
    applyMiddleware,
    compose,
    combineReducers,
  } from "redux";
  import thunk from "redux-thunk";
  import { AppReducer } from "./AppRedux/reducer";
  import { AuthReducer } from "./AuthRedux/reducer";
  

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const rootReducer = combineReducers({
    AppReducer,
    AuthReducer,
  });
  
  export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  