import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import {
  reducer as ethProviderReducer,
  web3Reducer as userSessionReducer,
} from "../../features/MetamaskAuth/reducer";
///MetamaskAuth/reducer";
import { reducer as web3ConnectionReducer } from "../HOCs/withWeb3/reducer";

import rootSaga from "../sagas";

import createSagaMiddleware from "@redux-saga/core";
const defaultInitialState = {
  metamaskProviderState: ethProviderReducer(),
  userSessionState: userSessionReducer(),
};
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

export function initializeStore(initialState = defaultInitialState) {
  const sagaMiddleware = createSagaMiddleware();
  const rootReducer = combineReducers({
    metamaskProviderState: ethProviderReducer,
    userSessionState: userSessionReducer,
    web3ConnectionState: web3ConnectionReducer,
  });
  return {
    ...createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(...[sagaMiddleware, logger]))
    ),
    runSaga: sagaMiddleware.run(rootSaga),
  };
}
