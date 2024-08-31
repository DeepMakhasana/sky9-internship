import RecipeTags from "../components/recipes/RecipeTags.tsx";

export const Recipes = () => {
  return (
    <section className="container-fluid">
      <h1 className="display-6 mb-4">All Recipes</h1>
      <div className="row">
        <RecipeTags />
        <div className="col-lg-9">main</div>
      </div>
    </section>
  );
};
