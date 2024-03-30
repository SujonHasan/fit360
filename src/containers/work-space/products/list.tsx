import { ProductsRes } from "@/src/redux/services/workspace/products/type";
import { FC } from "react";
import { InitaialState } from ".";

const ProductsList: FC<{
  state: InitaialState;
  products: ProductsRes;
  loadNextPage: () => void;
  loadPreviousPage: () => void;
}> = ({ state, products, loadNextPage, loadPreviousPage }) => {
  return (
    <>
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
          disabled={
            !products ||
            !products?.data ||
            !products?.data?.data ||
            state.page * state.perPage >= products?.data?.data?.total
          }
        >
          {"Next >"}
        </button>
      </div>
    </>
  );
};

export default ProductsList;
