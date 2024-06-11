//core
import { https } from "@/core/axios";

// types
import { IFeedback } from "@/types/feedback.types";

export const serverFeedback = async (data: IFeedback) => {
  try {
    const response = await https.post("/api/v1/create_feedback/", data);
    return response;
  } catch (error) {
    throw error;
  }
};
