import RecipeSlideBar from "../components/recipes/RecipeSlideBar.tsx";
import RecipesLoad from "../components/recipes/Recipes.tsx";

export const Recipes = () => {
  return (
    <section className="container-fluid" style={{ height: "calc(100vh - 88px)" }}>
      <div className="row">
        <RecipeSlideBar />
        <RecipesLoad />
      </div>
    </section>
  );
};
