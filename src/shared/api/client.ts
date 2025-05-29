import { SERVER_URL } from "../constants";
import { APIResponse, IResponseFailure, IResponseSuccess } from "./types";

export const authTokenKey = "authToken";

export async function sendReq<T>(
  path: string | URL,
  options?: RequestInit,
): APIResponse<T> {
  let url: string = `${SERVER_URL}${path}`;
  if (path instanceof URL) {
    url = path.toString();
  }
  const resp = await fetch(url, options);
  if (resp.status === 204) {
    return { success: true, data: null as any, status: resp.status }
  }
  const data = await resp.json();
  if (!resp.ok) {
    return { message: data.detail, success: false, status: resp.status }
  }
  return { data, success: true, status: resp.status }
}

export async function GET<T>(path: string | URL): APIResponse<T> {
  return await sendReq(path);
}

async function reqWithData<T>(
  path: string | URL,
  data: object,
  reqMethod: string
): APIResponse<T> {
  return await sendReq(path, {
    method: reqMethod,
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
}
export async function POST<T>(
  path: string | URL,
  data: object,
): APIResponse<T> {
  return await reqWithData(path, data, "POST")
}

export async function PATCH<T>(
  path: string | URL,
  data: object,
): APIResponse<T> {
  return await reqWithData(path, data, "PATCH")
}

export async function DELETE(
  path: string | URL,
): APIResponse<null> {
  return await sendReq(path, {
    method: "DELETE",
  });
}


