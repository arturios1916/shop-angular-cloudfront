import { MessageUtil } from "../../utils/message";
import { Context } from "aws-lambda";
import { productsMock } from './productsMock'

export async function getProductsList(event: any, context: Context) {
  try {
    return await Promise.resolve(MessageUtil.success(productsMock));
  } catch (error: any) {
    return await Promise.resolve(MessageUtil.error(error.message))
  }
}
