import { useRecipes } from "../../contexts/recipes/recipes-consumer.tsx";

const RecipesPagination = () => {
  const { recipesData, page, nextPage, previousPage, setCustomPage } = useRecipes();
  
  if (recipesData?.total === undefined) {
    return <></>;
  }
  if (recipesData?.total <= 10) {
    return <></>;
  }

  console.log("child - Recipes pagination");

  return (
    <div className="py-4">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li
            className={`page-item ${page + 1 <= 1 && "disabled"}`}
            style={{ cursor: "pointer" }}
            onClick={() => !(page + 1 <= 1) && previousPage()}
          >
            <div className="page-link">Previous</div>
          </li>
          {recipesData?.total &&
            [...Array(Math.ceil(recipesData?.total / 10))].map((_, i) => (
              <li
                className={`page-item ${page + 1 === i + 1 && "active"}`}
                style={{ cursor: "pointer" }}
                onClick={() => setCustomPage(i + 1)}
                key={i}
              >
                <div className="page-link">{i + 1}</div>
              </li>
            ))}
          <li
            className={`page-item ${
              page + 1 >= (recipesData?.total as number) / 10 && "disabled"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() =>
              !(page + 1 >= (recipesData?.total as number) / 10) && nextPage()
            }
          >
            <div className="page-link">Next</div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default RecipesPagination;
