type TRating = {
  rate: number;
  count: number;
};

// product data type
export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: TRating;
}

// redux slice state type
export type TProductReduxState = {
  isLoading: boolean;
  error: string | null;
  products: IProduct[];
};

// interface of useProductPagination hook
export interface IProductPagination {
  next: () => void;
  previous: () => void;
  randomPage: (pageNumber: number) => void;
  numberOfPage: number[];
  products: IProduct[];
}
