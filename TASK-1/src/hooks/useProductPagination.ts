import { useEffect, useState } from "react";
import { useAppSelector } from "../store";
import {
  IProduct,
  IProductPagination,
  TProductReduxState,
} from "../types/products";

export const useProductPagination = (limit: number): IProductPagination => {
  const productData = useAppSelector((state) => state.product);
  const { products } = productData;
  const [page, setPage] = useState(1);
  const [paginationData, setPaginationData] = useState<IProduct[]>([]);

  const total = Math.ceil(products.length / limit);

  const numberOfPage = Array.from({ length: total }, (_, index) => index + 1);
  console.log("numberOfPage: ", numberOfPage);

  // set the next page
  const next = () => {
    setPage((pre) => pre + 1);
  };

  // set the previous page
  const previous = () => {
    setPage((pre) => pre + 1);
  };

  // set any seleted page throgh page number
  const randomPage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  // first case:    second case:
  // limit => 5     limit => 5
  // skip => 0      skip => 5
  // page => 1      page => 2

  // main pagination handling logic
  const handelPagination = () => {
    if (page && page > 1) {
      const start = (page - 1) * limit;
      const end = (page - 1) * limit + 5;
      setPaginationData(() => products.slice(start, end));
    } else {
      setPaginationData(() => products.slice(0, limit));
    }
  };

  useEffect(() => {
    handelPagination();
  }, [page, productData]);

  return {
    next,
    previous,
    randomPage,
    numberOfPage,
    products: paginationData,
  };
};
