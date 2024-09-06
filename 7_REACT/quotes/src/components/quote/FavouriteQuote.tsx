import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { QuoteType } from "@/types/quotes";
import { HeartIcon } from "lucide-react";
import { useAppDispatch } from "@/store";
import { add, remove } from "@/store/slice/favouriteQuote";

const FavouriteQuote = ({
  quote,
  readCount,
}: {
  quote: QuoteType | null;
  readCount: number;
}) => {
  const dispatch = useAppDispatch();
  const favouriteIconRef: any = useRef<HTMLButtonElement>();

  const handelFavouriteIcon = () => {
    if (favouriteIconRef.current.style.color == "gray") {
      favouriteIconRef.current.style.color = "black";
      dispatch(remove(quote?.id));
    } else {
      favouriteIconRef.current.style.color = "gray";
      dispatch(add(quote));
    }
  };

  useEffect(() => {
    favouriteIconRef.current.style.color = "black";
  }, [readCount]);

  console.log(quote);
  return (
    <div className="w-full flex justify-between items-center">
      <Button variant={"outline"}>{readCount}</Button>
      <Button
        variant={"outline"}
        ref={favouriteIconRef}
        onClick={handelFavouriteIcon}
        style={{ color: "black" }}
      >
        <HeartIcon className="mr-2 h-4 w-4" />
        Favourite
      </Button>
    </div>
  );
};

export default FavouriteQuote;
