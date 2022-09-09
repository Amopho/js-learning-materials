import { ADD_STUDENT, DELETE_STUDENT } from "../actions/types";

const initialState = {
    students: [],
    grades: []
}

export const studentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STUDENT:
            return {
                ...state,
                students: [action.payload, ...state.students]
            };

        case DELETE_STUDENT:
            return {
                ...state,
                students: state.students.filter(student => student.id !== action.payload)
            }

        default:
            return state;
    }
}