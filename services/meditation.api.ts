//core
import { https } from "@/core/axios";

export const serverMeditation = async (num1: number, num2: number) => {
  try {
    const response = await https.get(`/api/v1/meditation/${num1}/${num2}/`);
    return response;
  } catch (error) {
    throw error;
  }
};
