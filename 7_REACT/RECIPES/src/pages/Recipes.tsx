// import RecipeSlideBar from "../components/recipes/RecipeSlideBar.tsx";
// import RecipesLoad from "../components/recipes/RecipesLoad.tsx";
// import RecipsSearch from "../components/recipes/RecipsSearch.tsx";
import { lazy, Suspense } from "react";

const RecipeSlideBar = lazy(
  () => import("../components/recipes/RecipeSlideBar.tsx")
);
const RecipesLoad = lazy(() => import("../components/recipes/RecipesLoad.tsx"));
const RecipsSearch = lazy(
  () => import("../components/recipes/RecipsSearch.tsx")
);

export const Recipes = () => {
  console.log("Parent - Recipes");
  return (
    <section
      className="container-fluid mt-3 mt-lg-0"
      style={{ height: "calc(100vh - 88px)" }}
    >
      <div className="row">
        {/* filtering, sorting */}
        <Suspense fallback={<p>lazy loading..</p>}>
          <RecipeSlideBar />
        </Suspense>
        {/* load recipes */}
        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-center">
            <h4>Recipes List</h4>
            {/* search */}
            <Suspense fallback={<p>lazy loading..</p>}>
              <RecipsSearch />
            </Suspense>
          </div>
          <Suspense fallback={<p>lazy loading..</p>}>
            <RecipesLoad />
          </Suspense>
        </div>
      </div>
    </section>
  );
};
