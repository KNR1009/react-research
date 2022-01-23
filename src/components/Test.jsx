import React from "react";
import { Child } from "./Child";

export const Test = React.memo((props) => {
  console.log("子供");
  const { changeText } = props;

  return (
    <>
      <input type="text" onChange={changeText} />
      <Child></Child>
    </>
  );
});
