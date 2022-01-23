import React from "react";

export const Child = React.memo(() => {
  console.log("子供");
  return <div>子供の子供</div>;
});
