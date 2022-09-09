import { combineReducers } from "redux";
import { studentsReducer } from "./studentsReducer";

export const allReducers = combineReducers({
    studentsReducer,
    // auth: authReducer,
    // teachers: teachersReducer
})