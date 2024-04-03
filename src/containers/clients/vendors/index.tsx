"use client";
import Spinners from "@/src/components/Spinners";
import { useVendorsQuery } from "@/src/redux/services/clients/vendors/api";
import { useState } from "react";
import VendorList from "./list";

export type InitialState = {
  page: number;
  perPage: number;
};

export default function Vendors() {
  const [state, setState] = useState<InitialState>({
    page: 1,
    perPage: 10,
  });

  const vendors = useVendorsQuery({
    page: state.page,
    perPage: state.perPage,
  });

  // console.log("vendors ==   ", vendors?.error?.message);
  

  if (vendors.status === "pending") return <Spinners />;

  if (vendors.status === "rejected")
    return <p className="text-danger text-center">Error....... {vendors?.error?.message} </p>;

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
      <VendorList
        state={state}
        vendors={vendors}
        loadNextPage={loadNextPage}
        loadPrevioursPage={loadPrevioursPage}
      />
    </div>
  );
}
