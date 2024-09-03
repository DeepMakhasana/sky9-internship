import React, { useEffect, useState } from "react";

const Product = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    return (async () =>
      await setTimeout(() => {
        console.log("attacked..");

        return () => null;
      }, [2000]))();

    const timeout = setTimeout(() => {
      console.log("product");
    }, [5000]);
    return () => console.log("clean up");
  }, [toggle]);
  return (
    <div>
      <h3>Product</h3>
      <button onClick={() => setToggle((pre) => !pre)}>Stop</button>
    </div>
  );
};

export default Product;
