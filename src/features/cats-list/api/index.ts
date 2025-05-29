import { DELETE, GET } from "@/src/shared/api/client";
import { ICat } from "../types";

export const catsApi = {
  getAll: async (): Promise<ICat[]> => {
    const resp = await GET<ICat[]>("/cats/");
    if (!resp.success) {
      throw new Error(resp.message)
    }
    return resp.data;
  },
  deleteCat: async (catId: string) => {
    const resp = await DELETE("/cats/" + catId);
    if (!resp.success) {
      throw new Error(resp.message)
    }
    return resp.data;
  }
}
