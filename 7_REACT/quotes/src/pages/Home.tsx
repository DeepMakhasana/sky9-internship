import { getRandomQuote } from "@/api/quotes";
import Quote from "@/components/quote/Quote";
import FavouriteQuote from "@/components/quote/FavouriteQuote";
import { Button } from "@/components/ui/button";
import { QuoteType } from "@/types/quotes";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const Home = () => {
  const [randomQuote, setRandomQuote] = useState<QuoteType | null>(null);
  const [readCount, setReadCount] = useState<number>(1);

  useEffect(() => {
    getRandomQuote()
      .then((data) => {
        setRandomQuote(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [readCount]);
  return (
    <div
      className="flex justify-center items-end flex-col gap-4"
      style={{ height: "calc(100vh - 52px)" }}
    >
      <FavouriteQuote quote={randomQuote} readCount={readCount} />
      {/* main random quote */}
      <Quote quote={randomQuote} />
      {/* --- */}
      <Button onClick={() => setReadCount((pre) => pre + 1)}>
        <ChevronRight className="mr-2 h-4 w-4" /> Next
      </Button>
    </div>
  );
};

export default Home;
