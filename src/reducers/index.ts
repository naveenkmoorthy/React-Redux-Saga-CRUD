import carReducer from "./carReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cars: carReducer,
});

export type RootState = ReturnType<typeof allReducers>;

export default allReducers;
