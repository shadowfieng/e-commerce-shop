import { ApiError } from "./api";
import { Response } from "express";
import { Request } from "express";
import { Send } from "express-serve-static-core";

export interface TypedRequestBody<T> extends Express.Request, Request {
  body: T;
}

export interface TypedResponse<T> extends Express.Response, Response {
  json: Send<T, this>;
}

export interface TypedResponseWithError extends Express.Response, Response {
  json: Send<ApiError, this>;
}
