import { useAppSelector } from "@/store";
import { Link, useLocation } from "react-router-dom";

const Navigationbar = () => {
  const favouritesQuotes = useAppSelector((state) => state.favourite);
  const { pathname } = useLocation();

  return (
    <header className="py-3 bg-gray-50">
      <nav className="container mx-auto flex justify-between items-center pl-3">
        <h1 className="text-lg font-semibold">Life Quote</h1>
        <ul className="flex gap-4">
          <li>
            <Link to="/" className={pathname == "/" ? "font-bold" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/favourites"
              className={pathname == "/favourites" ? "font-bold" : ""}
            >
              Favourites
            </Link>
          </li>
          <li
            className="bg-black flex justify-center items-center rounded-full text-white text-[10px] font-bold"
            style={{
              position: "relative",
              top: "-8px",
              left: "-18px",
              width: "16px",
              height: "16px",
            }}
          >
            {favouritesQuotes.length}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigationbar;
