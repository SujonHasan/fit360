export type VendorsRes = {
    data: {
        data: {
            _id: string,
            email: string,
            shopName: string,
            shopOwner: string,
            shopAddress: string,
            shopDetails: string,
            status: string,
        }[],
        page: number,
        perPage: number,
        total: number
    }
    message: string
}

export type VendorsReq = {
    page: number,
    perPage: number,
}