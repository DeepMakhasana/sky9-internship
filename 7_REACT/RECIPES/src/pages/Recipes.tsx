import RecipeSlideBar from "../components/recipes/RecipeSlideBar.tsx";
import RecipesLoad from "../components/recipes/Recipes.tsx";
import RecipsSearch from "../components/recipes/RecipsSearch.tsx";

export const Recipes = () => {
  return (
    <section
      className="container-fluid mt-3 mt-lg-0"
      style={{ height: "calc(100vh - 88px)" }}
    >
      <div className="row">
        {/* filtering, sorting */}
        <RecipeSlideBar />
        {/* load recipes */}
        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-center">
            <h4>Recipes List</h4>
            {/* search */}
            <RecipsSearch />
          </div>
          <RecipesLoad />
        </div>
      </div>
    </section>
  );
};
