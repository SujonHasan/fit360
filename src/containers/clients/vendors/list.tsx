import { VendorsRes } from "@/src/redux/services/clients/vendors/type";
import { FC } from "react";
import { InitialState } from ".";

const VendorList: FC<{
  state: InitialState;
  vendors?: VendorsRes;
  loadNextPage: () => void;
  loadPrevioursPage: () => void;
}> = ({ state, vendors, loadNextPage, loadPrevioursPage }) => {
  return (
    <>
      <div className="row justify-content-center gap-3">
        {vendors?.data?.data?.data.map((vendor) => (
          <div
            key={vendor?._id}
            className="card border-success col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <div className="card-body">
              <h5 className="card-title "> {vendor?.email} </h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                ShopName : {vendor.shopName}
              </h6>
              <p className="card-text">ShopOwner: {vendor.shopOwner}</p>
              <p className="card-text">Shop Address: {vendor.shopAddress}</p>
              <p className="card-text">ShopDetails: {vendor.shopDetails}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex gap-2 justify-content-center mt-3">
        <button
          className="btn btn-success"
          onClick={loadPrevioursPage}
          disabled={state.page == 1}
        >
          {"< Previous"}
        </button>

        <button
          className="btn btn-success"
          onClick={loadNextPage}
          disabled={
            !vendors ||
            !vendors?.data ||
            !vendors?.data?.data ||
            state.page * state.perPage >= vendors?.data?.data?.total
          }
        >
          {`Next >`}
        </button>
      </div>
    </>
  );
};

export default VendorList;
