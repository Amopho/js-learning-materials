import { ADD_STUDENT, DELETE_STUDENT } from "./types"

export const addStudentAction = (student) => {
    return {
        type: ADD_STUDENT,
        payload: student
    }
}

export const deleteStudentAction = (id) => {
    return {
        type: DELETE_STUDENT,
        payload: id
    }
}