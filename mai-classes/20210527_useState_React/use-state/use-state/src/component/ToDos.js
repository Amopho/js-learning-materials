const ToDos = (props) => {
  const userToDos = props.list.map((toDo, i) => (
    <li key={i}>
      <input
        type="checkbox"
        defaultChecked={toDo.done}
        onChange={() => props.check(toDo.id)}
      />
      {toDo.title}
      <i
        onClick={() => {
          console.log(toDo.id);
          props.remove(toDo.id);
        }}
      >
        🗑
      </i>
    </li>
  ));
  return <ul>{userToDos}</ul>;
};

export default ToDos;
