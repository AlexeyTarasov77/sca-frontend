import { ICatPartial } from "../model/types"

export interface IListCatsResponse {
  objects: ICatPartial[]
  first_page: number
  last_page: number
  total_records: number
  limit: number
  offset: number
}

export interface IUpdateCatPayload {
  salary: number
}

export interface ICreateCatPayload extends Omit<ICatPartial, "id"> { }
