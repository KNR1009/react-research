import React, { useEffect, useRef, useState } from "react";

export const HookTest = () => {
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const onBlur = () => {
    setText(inputRef.current.value);
  };

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        // onChange={onChange}
        defaultValue={"aaa"}
        onBlur={onBlur}
      />
      {/* <button >ぼたん</button> */}
    </div>
  );
};
