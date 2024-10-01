import Search from "@/components/quote/Search";
import { useCallback, useState } from "react";

const Test = () => {
  const [search, setSearch] = useState("");

  console.log("main test");
  const handelChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  return (
    <div>
      <h1>Test</h1>
      {search}
      <Search setSearchText={handelChange} />
    </div>
  );
};

export default Test;
