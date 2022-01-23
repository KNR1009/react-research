import React, { useState, useCallback } from "react";

// import { HookTest } from "./components/HookTest";
import { Test } from "./components/Test";

function App() {
  console.log("親");
  const [text, setText] = useState("");

  // const changeText = (e) => {
  //   setText(e.target.value);
  // };
  const changeText = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );

  return (
    <>
      <p>App component</p>
      <p>{text}</p>
      <br />
      <Test changeText={changeText} />
    </>
  );
}

export default App;
