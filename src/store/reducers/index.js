import { combineReducers } from "redux";
import { reducers as frutaReducers } from "./frutas.reducer.js";

export const reducers = combineReducers({
  frutas: frutaReducers,
});
