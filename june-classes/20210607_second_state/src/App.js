import React, { useState, useEffect } from "react";
import List from "./components/List";
import "./App.css";

let born = false;
function App() {
  const [growth, setGrowth] = useState(0);
  const [log, setLog] = useState(false);
  const [mature, setMature] = useState(false);

  /* Run only once on MOUNT - component birth, runs only on MOUNT -because of passing an EMPTY argument- []); */
  useEffect(() => {
    console.log("I ve just arrived");
  }, []);

  // // stop useEffect
  // useEffect(() => {
  //   console.log("I ve just arrived");
  // }, []);

  useEffect(() => {
    if (born) {
      document.title = "you are mature and stopped growing";
    }
  }, [mature]);
  // Run every time when state changes - not passing ANY argument
  useEffect(() => {
    if (born) {
      console.log("grow and learn");
    } else {
      born = true;
    }
    if (growth > 1000) {
      setMature(true);
    }
  });

  function growHandle() {
    setGrowth(growth + 100);
  }

  return (
    <React.Fragment>
      <h2>Use Effect</h2>
      {/* remounting/ mounting an update - */}
      <h3>size: {growth}</h3>
      <button onClick={growHandle}>remounting</button>
      {/* run useEffect on PROP change */}
      <List setGrowth={setGrowth} log={log} />
    </React.Fragment>
  );
}

export default App;
