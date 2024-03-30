export type ProductsRes = {
    data: {
      data: {
        _id: string;
        vendor?: any;
        created: string;
        updated: string;
        name: string;
        categorie?: any;
        tag?: any;
        status: string;
        createdBy?: any;
        updatedBy?: any;
      }[];
      page: number;
      perPage: number;
      total: number;
    };
    message: string;
  };

export type ProductsReq = {
    page: number;
    perPage: number;
  };