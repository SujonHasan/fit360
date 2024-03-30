"use client";

import Spinners from "@/src/components/Spinners";
import { useProductsQuery } from "@/src/redux/services/workspace/products/api";
import { useState } from "react";
import ProductsList from "./list";

export type InitaialState = {
  page: number;
  perPage: number;
};

export default function Products() {
  const [state, setState] = useState<InitaialState>({
    page: 1,
    perPage: 10,
  });

  const products = useProductsQuery(
    {
      page: state.page,
      perPage: state.perPage,
    },
    { refetchOnMountOrArgChange: true }
  );

  if (products.status === "pending") return <Spinners />;

  if (products.status === "rejected")
    return <p className="text-danger text-center">Error...... </p>;

  const loadNextPage = () => {
    setState((prevState) => ({
      ...prevState,
      page: prevState.page + 1,
    }));
  };

  const loadPreviousPage = () => {
    setState((prevState) => ({
      ...prevState,
      page: prevState.page - 1,
    }));
  };

  return (
    <div className="container text-center my-5">

      <ProductsList
      state={state}
      products={products}
      loadNextPage={loadNextPage}
      loadPreviousPage={loadPreviousPage}
      />
    </div>
  );
}
