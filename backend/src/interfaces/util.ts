import { Send } from "express-serve-static-core";

export interface TypedRequestBody<T> extends Express.Request {
  body: T;
}

export interface TypedResponse<T> extends Express.Response {
  json: Send<T, this>;
}
