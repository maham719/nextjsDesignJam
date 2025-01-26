import {sanityFetch} from "../live"

export const searchproductbyname = async  (searchParam: string) => {
    const PRODUCT_SEARCH_QUERY = defineQuery ('
        *[_type=="product" && name match $searchParam]
        ');
}