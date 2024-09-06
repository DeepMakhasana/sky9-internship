// quote type
export type QuoteType = {
  id: number;
  quote: string;
  author: string;
};

// Pagination Parameter type
interface PaginationParameter {
  limit: number;
  skip: number;
  total: number;
}

// quote list type
export interface QuotesType extends PaginationParameter {
  quotes: QuoteType[];
}
