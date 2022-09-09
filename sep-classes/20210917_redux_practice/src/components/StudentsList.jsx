import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addStudentAction,
  deleteStudentAction,
} from "./store/actions/studentsActions";

export const StudentsList = () => {
  const [input, setInput] = useState("");

  const students = useSelector((state) => state.studentsReducer.students);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddStudent = () => {
    let newStudent = { name: input, id: Date.now() };
    dispatch(addStudentAction(newStudent));
  };

  const handleDel = (id) => {
    dispatch(deleteStudentAction(id));
  };

  return (
    <ul>
      <input type="text" name="" onChange={handleChange} />
      <input type="button" value="add" onClick={handleAddStudent} />
      {students.map((student) => (
        <li key={student.id} onClick={() => handleDel(student.id)}>
          {student.name}
        </li>
      ))}
    </ul>
  );
};
