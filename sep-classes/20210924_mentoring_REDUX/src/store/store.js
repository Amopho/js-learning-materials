import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { allReducers } from "./reducers/allReducers";


export const myStore = createStore(
    allReducers ,
    composeWithDevTools()
);