import { StatusCode } from "../enum/statusCode";

class Result {
  private statusCode: StatusCode | number;
  private message: string;
  private data?: any;

  constructor(statusCode: StatusCode | number, message: string, data?: any) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

  /**
   * Serverless: According to the API Gateway specs, the body content must be stringified
   */
  bodyToString () {
    return {
      statusCode: this.statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({
        message: this.message,
        data: this.data,
      }),
    };
  }
}

export class MessageUtil {
  static success(data: object): any {
    const result = new Result(StatusCode.success, 'success', data);

    return result.bodyToString();
  }

  static error(message: string, statusCode = StatusCode.badReq,) {
    const result = new Result(statusCode, message);

    console.log(result.bodyToString());
    return result.bodyToString();
  }
}
