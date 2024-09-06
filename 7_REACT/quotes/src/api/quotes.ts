// get one random quote
export const getRandomQuote = async () => {
  try {
    const responce = await fetch("https://dummyjson.com/quotes/random");
    return await responce.json();
  } catch (error) {
    throw error;
  }
};

// get one quote by id
export const getQuoteById = async (id: number) => {
  try {
    const responce = await fetch(`https://dummyjson.com/quotes/${id}`);
    return await responce.json();
  } catch (error) {
    throw error;
  }
};
