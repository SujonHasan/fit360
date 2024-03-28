"use client";
import Spinners from "@/app/components/Spinners";
import { useVendorsQuery } from "@/app/redux/services/clients/vendors/api";
import React, { useState } from "react";

export type InitialState = {
  page: number;
  perPage: number;
};

export default function VendorsPage() {
  const [state, setState] = useState<InitialState>({
    page: 1,
    perPage: 10,
  });

  const vendors = useVendorsQuery({
    page: state.page,
    perPage: state.perPage,
  });

  if (vendors.status === "pending") return <Spinners />;

  if (vendors.status === "rejected")
    return (
      <p classNameName="text-danger text-center">
        Error {vendors?.error?.error}{" "}
      </p>
    );

  const loadNextPage = () => {
    setState((prevstate) => ({
      ...prevstate,
      page: prevstate.page + 1,
    }));
  };

  const loadPrevioursPage = () => {
    setState((prevstate) => ({
      ...prevstate,
      page: prevstate.page - 1,
    }));
  };

  return (
    <div className="container text-center">
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
          disabled={state.page * state.perPage >= vendors?.data?.data?.total}
        >
          {`Next >`}
        </button>
      </div>
    </div>
  );
}
