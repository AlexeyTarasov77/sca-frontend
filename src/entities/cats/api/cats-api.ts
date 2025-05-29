
import { DELETE, GET, PATCH, POST } from "@/src/shared/api/client";
import { ICreateCatPayload, IListCatsResponse, IUpdateCatPayload } from "./types";
import { ICatPartial } from "../model/types";

export const catsApi = {
  getAll: async () => {
    return await GET<IListCatsResponse>("/cats/");
  },
  deleteCat: async (catId: string) => {
    return await DELETE("/cats/" + catId);
  },
  updateCat: async (catId: string, data: IUpdateCatPayload) => {
    return await PATCH("/cats/" + catId, data);
  },
  createCat: async (data: ICreateCatPayload) => {
    return await POST<ICatPartial>("/cats/", data)
  }
}
