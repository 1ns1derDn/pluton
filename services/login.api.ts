//core
import { http } from "@/core/axios";
import { setRefreshToStorage, setTokenToStorage } from "@/core/utils";
// types
import { ILogin, ILoginResponse } from "@/types/login.types";

export const serverLogin = async (data: ILogin) => {
  try {
    const response = await http.post<ILoginResponse>("/api/v1/token/", data);
    setTokenToStorage(response.data.access);
    setRefreshToStorage(response.data.access);
  } catch (error) {
    throw error;
  }
};
