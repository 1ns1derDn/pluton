//core
import { https } from "@/core/axios";

//types
import { IBoughtSubscription } from "@/types/bought-subscription.types";

export const serverBoughtSubscription = async () => {
  try {
    const response = await https.get<IBoughtSubscription>("/api/v1/bought-subscription/");
    return response;
  } catch (error) {
    throw error;
  }
};
