import { useEffect } from "react";

const List = ({ setGrowth, log }) => {
  // run when prop changes
  useEffect(() => {
    console.log("I grab the knowledge from outter space");
  }, [log]);

  return (
    <div>
      <button onClick={() => setGrowth((prevState) => prevState - 100)}>
        youth elixir
      </button>
    </div>
  );
};

export default List;
