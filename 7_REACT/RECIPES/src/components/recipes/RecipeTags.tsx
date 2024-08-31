import { useState } from "react";
import useFetchData from "../../hooks/useFetchData.ts";

const RecipeTags = () => {
  const tags = useFetchData("/recipes/tags");
  const [readMore, setReadMore] = useState(false);

  if (tags.isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="col-lg-3">
      <h5 className="h5 mb-3">#tags</h5>
      {tags?.data?.slice(0, readMore == false ? 10 : tags.data.length).map((tag: string, i: number) => (
        <div className="form-check form-check-inline">
          <input
            className="form-check-input border-2"
            type="radio"
            name="inlineRadioOptions"
            id={`tag${i + 0}`}
            value={tag}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            {tag}
          </label>
        </div>
      ))}
      <p className="text-primary mt-1" style={{ cursor: "pointer" }} onClick={() => setReadMore((pre) => !pre)}>
        show {readMore ? "less" : "more"}
      </p>
    </div>
  );
};

export default RecipeTags;
