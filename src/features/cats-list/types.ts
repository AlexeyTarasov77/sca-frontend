
export interface ICat {
  id: string;
  name: string;
  breed_name: string;
  salary: string
}

export interface IListCatsResponse {
  objects: ICat[]
  first_page: number
  last_page: number
  total_records: number
  limit: number
  offset: number
}

export interface IUpdateCatPayload {
  salary: number
}
