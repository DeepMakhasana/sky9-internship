import { IProduct } from "../../types/products";

const ProductCard = ({ product }: { product: IProduct }) => {
  function extendFirstFourWords(sentence: string) {
    // Split the sentence into an array of words
    let wordsArray = sentence.split(" ");

    if (wordsArray.length > 4) {
      // Slice the first 4 words from the array
      let firstFourWords = wordsArray.slice(0, 4);
      // Join the words back into a string
      let extendedSentence = firstFourWords.join(" ");

      return extendedSentence;
    } else {
      return sentence;
    }
  }
  return (
    <div className="product-card-container">
      <div className="product-card">
        <div className="product-card-img">
          <img src={product.image} alt="produt" />
        </div>
        <div className="overlay">
          <h4 className="product-title">
            {extendFirstFourWords(product.title)}
          </h4>
          <div className="product-price">Price: ${product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
