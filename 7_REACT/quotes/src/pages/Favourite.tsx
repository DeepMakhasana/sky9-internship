import Quote from "@/components/quote/Quote";
import { useAppSelector } from "@/store";


const Favourite = () => {
  const favouriteQuotes = useAppSelector((state) => state.favourite);

  return (
    <div className="flex flex-col gap-4 mt-4">
      {favouriteQuotes.length === 0 && (
        <p className="text-center">No any favourite quotes.</p>
      )}
      {favouriteQuotes.map((quote) => (
        <Quote quote={quote} isDeleteable={true} />
      ))}
    </div>
  );
};

export default Favourite;
