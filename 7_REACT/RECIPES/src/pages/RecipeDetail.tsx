import { useParams } from "react-router-dom";
import { useRecipes } from "../contexts/recipes/recipes-consumer";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const { recipesData } = useRecipes();
  const data = recipesData?.recipes.filter(
    (recipe) => recipe.id === Number(recipeId)
  )[0];
  console.log("data", data);
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 img-fluid">
          <img src={data?.image} className="w-75 rounded" alt={data?.name} />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="h4 my-4">{data?.name}</h1>
          <p className="my-1">
            <strong>Difficulty level:</strong> {data?.difficulty}
          </p>
          <p className="my-1">
            <strong>Cooking time:</strong>{" "}
            {Number(data?.prepTimeMinutes) + Number(data?.cookTimeMinutes)}
          </p>
          <p className="my-1">
            <strong>Calories:</strong> {data?.caloriesPerServing}
          </p>
          <div className="d-flex gap-2 my-2">
            {data?.mealType.map((meal) => (
              <span key={meal}>#{meal}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="row my-5 g-4">
        <div className="col-12 col-md-6">
          <h4>Ingredients</h4>
          <ul className="d-flex flex-column gap-2 my-2">
            {data?.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="col-12 col-md-6">
          <h4>Instructions</h4>
          <ul className="d-flex flex-column gap-2 my-2">
            {data?.instructions.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
