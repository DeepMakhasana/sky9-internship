import { ChangeEvent, useEffect, useState } from "react";
import searchIcon from "../../assets/search.png";
import { useDebounce } from "../../hooks/useDebounce";
import { useRecipes } from "../../contexts/recipes/recipes-consumer";

const RecipsSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { searchByRecipeName, initialize } = useRecipes();
  const debounceSearchQuery = useDebounce(searchQuery);

  const handelSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (debounceSearchQuery) {
      searchByRecipeName(debounceSearchQuery);
      // setSearchQuery(debounceSearchQuery);
    }else {
      initialize();
    }
    
  }, [debounceSearchQuery]);

  console.log("child - Recipes search");

  return (
    <div className="input-group flex-nowrap" style={{ maxWidth: "300px" }}>
      <span className="input-group-text" id="addon-wrapping">
        <img src={searchIcon} alt="search" />
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Search recipes.."
        value={searchQuery}
        onChange={handelSearchChange}
      />
    </div>
  );
};

export default RecipsSearch;
