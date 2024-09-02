import { ChangeEvent, useState } from "react";
import useFetchData from "../../hooks/useFetchData.ts";
import { useRecipes } from "../../contexts/recipes/recipes-consumer.tsx";

// get by tag name
const RecipesTag = ({ getByTag }: { getByTag: (tag: string) => void }) => {
  const tags = useFetchData("/recipes/tags");
  const [readMore, setReadMore] = useState(false);

  if (tags.isLoading) return <p className="col-lg-3">Loading...</p>;
  if (tags.error) return <p className="col-lg-3">Error: {tags.error}</p>;

  const handelTagChange = (e: ChangeEvent<HTMLInputElement>) => {
    getByTag(e.target.value);
  };
  return (
    <>
      <h5 className="h5 mb-3">#tags</h5>
      {tags?.data?.slice(0, readMore == false ? 10 : tags.data.length).map((tag: string, i: number) => (
        <div className="form-check form-check-inline py-1" key={tag}>
          <input
            className="form-check-input border-2"
            type="radio"
            name="inlineRadioOptions"
            id={`tag${i + 0}`}
            value={tag}
            onChange={handelTagChange}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            {tag}
          </label>
        </div>
      ))}
      <p className="text-primary mt-1" style={{ cursor: "pointer" }} onClick={() => setReadMore((pre) => !pre)}>
        show {readMore ? "less" : "more"}
      </p>
    </>
  );
};

// get by meal type
const RecipesMealType = ({ getByMealType }: { getByMealType: (tag: string) => void }) => {
  const MEAL_TYPE = ["Dinner", "Lunch", "Dessert", "Snack", "Side Dish", "Appetizer", "Breakfast", "Beverage"];
  const handelMealChange = (e: ChangeEvent<HTMLInputElement>) => {
    getByMealType(e.target.value);
  };
  return (
    <div className="mb-4">
      <h5 className="h5 mb-3">According to meal</h5>
      {MEAL_TYPE.map((meal: string, i: number) => (
        <div className="form-check form-check-inline py-1" key={meal}>
          <input
            className="form-check-input border-2"
            type="radio"
            name="inlineRadioOptions"
            id={`meal${i + 0}`}
            value={meal}
            onChange={handelMealChange}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            {meal}
          </label>
        </div>
      ))}
    </div>
  );
};

const SortRecipes = ({ sortRecipes }: { sortRecipes: (parameter: string) => void }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handelParameterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    sortRecipes(e.target.value);
  };
  return (
    <div className="mb-4">
      <h5 className="h5 mb-3">Sorting option</h5>
      <select
        className="form-select"
        value={selectedOption}
        onChange={handelParameterChange}
      >
        <option value="">Sort by option</option>
        <option value="caloriesPerServing">Sort by calories</option>
        <option value="difficulty">Sort by difficulty level</option>
        <option value="rating">Sort by rating</option>
      </select>
    </div>
  );
};

const RecipeSlideBar = () => {
  const { getByTag, getByMealType, sortRecipes } = useRecipes();

  return (
    <div className="col-lg-3">
      <RecipesMealType getByMealType={getByMealType} />
      <RecipesTag getByTag={getByTag} />
      <SortRecipes sortRecipes={sortRecipes} />
    </div>
  );
};

export default RecipeSlideBar;
