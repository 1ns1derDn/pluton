//core
import { http } from "@/core/axios";

export const serverCreatePayment = async (data: any) => {
  try {
    const response = await http.post("/api/v1/create-payment/", data);
    return response;
  } catch (error) {
    throw error;
  }
};
