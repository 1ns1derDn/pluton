//core
import { https } from "@/core/axios";
import { IAvailablePeriods } from "@/types/available-periods.types";

export const serverAvailablePeriods = async () => {
  try {
    const response = await https.get<IAvailablePeriods[]>("/api/v1/meditation/available-periods/");
    return response;
  } catch (error) {
    throw error;
  }
};
