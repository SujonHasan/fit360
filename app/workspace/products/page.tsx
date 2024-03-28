"use client";

import Spinners from "@/app/components/Spinners";
import { useProductsQuery } from "@/app/redux/services/workspace/products/api";
import { useState } from "react";

export type InitaialState = {
  page: number;
  perPage: number;
};

export default function ProductsPage() {
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
    return (
      <p className="text-danger text-center">Error {products?.error?.error} </p>
    );

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
      <div className="row justify-content-center gap-3">
        {products?.data?.data?.data.map((product) => (
          <div
            key={product?._id}
            class="card border-success col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <div class="card-body">
              <h5 class="card-title "> {product.vendor?.email} </h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Product : {product.name}
              </h6>
              <p class="card-text">Categorie: {product.categorie?.name}</p>
              <p class="card-text">Tag: {product?.tag?.name}</p>
              <p class="card-text">CreatedBy: {product?.createdBy?.username}</p>
              <p class="card-text">UpdatedBy: {product?.updatedBy?.username}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex gap-2 justify-content-center mt-3">
        <button
          className="btn btn-success"
          onClick={loadPreviousPage}
          disabled={state.page === 1}
        >
          {"< Previous"}
        </button>
        <button
          className="btn btn-success"
          onClick={loadNextPage}
          disabled={state.page * state.perPage >= products?.data?.data?.total}
        >
          {"Next >"}
        </button>
      </div>
    </div>
  );
}
