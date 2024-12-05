import { defineQuery } from "next-sanity";
import { CouponCode } from "./couponCode";
import { sanityFetch } from "../live";

export const getActiveSaleByCouponCode = async (couponCode: CouponCode): Promise<{
  title?: string;
  description?: string;
  discountAmount?: number;
  couponCode?: string;
  isActive?: boolean;
} | null> => {
  const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
    *[
      _type == "sales" 
      && isActive == true 
      && couponCode == $couponCode
    ] | order(validFrom desc) [0]
  `);

  try {
    const activeSale = await sanityFetch({
      query: ACTIVE_SALE_BY_COUPON_QUERY,
      params: { couponCode },
    });
    return activeSale?.data ?? null;
  } catch (error) {
    console.error("Error fetching active sale by coupon code:", error);
    return null;
  }
};
