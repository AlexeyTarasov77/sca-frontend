import { DELETE, GET, PATCH } from "@/src/shared/api/client";
import { ICat, IListCatsResponse, IUpdateCatPayload } from "../types";

export const catsApi = {
  getAll: async () => {
    return await GET<IListCatsResponse>("/cats/");
  },
  deleteCat: async (catId: string) => {
    return await DELETE("/cats/" + catId);
  },
  updateCat: async (catId: string, data: IUpdateCatPayload) => {
    return await PATCH("/cats/" + catId, data);
  }
}
