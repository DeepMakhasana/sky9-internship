import { memo } from "react";

const Search = ({
  setSearchText,
}: {
  setSearchText: (value: string) => void;
}) => {
  console.log("search componet");
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default memo(Search);
