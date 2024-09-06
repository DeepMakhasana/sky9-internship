import { QuoteType } from "@/types/quotes";
import { QuoteIcon, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/store";
import { remove } from "@/store/slice/favouriteQuote";

const Quote = ({
  quote,
  isDeleteable = false,
}: {
  quote: QuoteType | null;
  isDeleteable?: boolean;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-gray-100 flex justify-center min-w-full min-h-40">
      {quote ? (
        <div className="min-h-full p-10 flex items-end flex-col rounded gap-2">
          {isDeleteable && (
            <Button
              variant={"outline"}
              size="icon"
              onClick={() => {
                console.log(quote.id);
                dispatch(remove(quote.id));
              }}
            >
              <Trash />
            </Button>
          )}
          <h4 className="font-serif text-2xl">
            <QuoteIcon />
            {quote?.quote}
          </h4>
          <p className="font-light">- {quote?.author}</p>
        </div>
      ) : (
        <p className="min-h-full font-light flex items-center">Loading...</p>
      )}
    </div>
  );
};

export default Quote;
