import { Link } from "react-router-dom";
import { useRecipes } from "../../contexts/recipes/recipes-consumer.tsx";
import { lazy, Suspense } from "react";
// import RecipesPagination from "./RecipesPagination.tsx";
const RecipesPagination = lazy(() => import("./RecipesPagination.tsx"));

const RecipesLoad = () => {
  const { recipesData, isLoading, error } = useRecipes();

  if (isLoading) return <p className="col-lg-9">Loading...</p>;

  if (error) return <p className="col-lg-9">{`Error: ${error}`}</p>;

  console.log("child - Recipes load");

  return (
    <>
      <div
        id="recipes"
        className="row g-2 justify-content-center justify-content-md-start my-3"
      >
        {recipesData?.recipes?.map((recipe) => (
          <div className="col-12 col-sm-6 col-md-4" key={recipe.id}>
            <Link className="nav-link" to={`/recipes/${recipe.id}`}>
              <div className="card" style={{ cursor: "pointer" }}>
                <div
                  style={{ minHeight: "200px" }}
                  className="d-flex justify-content-center align-items-center py-4 py-sm-0"
                >
                  <img
                    src={recipe.image}
                    style={{ objectFit: "cover" }}
                    className="card-img-top w-50 mx-auto"
                    alt="product"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <div className="d-flex gap-1 flex-column justify-content-between my-2">
                    <p className="my-0">
                      <strong>Difficulty level:</strong> {recipe.difficulty}
                    </p>
                    <p className="my-0">
                      <strong>Cooking time:</strong>{" "}
                      {recipe.prepTimeMinutes + recipe.cookTimeMinutes}
                    </p>
                    <p className="my-0">
                      <strong>Calories:</strong> {recipe.caloriesPerServing}
                    </p>
                  </div>
                  <div className="d-flex gap-2 my-2">
                    {recipe.mealType.map((meal) => (
                      <span key={meal}>#{meal}</span>
                    ))}
                  </div>
                  {/* <button className="btn btn-primary">Add to cart</button> */}
                </div>
                <div className="card-footer">
                  <p className="my-0 d-flex justify-content-between">
                    <span>Rating: {recipe.rating}</span>
                    <span>Review Count: {recipe.reviewCount}</span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* pagination */}
      <Suspense fallback={<p>lazy loding...</p>}>
        <RecipesPagination />
      </Suspense>
    </>
  );
};

export default RecipesLoad;
