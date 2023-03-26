import { StatusCode } from "../../enum/statusCode";

export class BaseError extends Error {
  statusCode: number | StatusCode;

  constructor(message: string, statusCode: number | StatusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
