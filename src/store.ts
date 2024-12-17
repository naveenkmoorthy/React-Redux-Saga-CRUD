import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import allReducers from "./reducers";
import { carSaga } from "./sagas/carSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(carSaga);

export default store;
