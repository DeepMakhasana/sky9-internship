import React, { useState } from "react";
import "../App.css";
import TestOne from "../components/test/TestOne";
import TestTwo from "../components/test/TestTwo";
import TestThree from "../components/test/TestThree";

const Test = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <TestOne count={count} setCount={setCount} />
      <TestTwo count={count} setCount={setCount} />
      <TestThree count={count} setCount={setCount} />
    </div>
  );
};

export default Test;
