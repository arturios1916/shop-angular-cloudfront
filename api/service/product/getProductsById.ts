import { BaseError } from '../../model/error/baseError';
import { MessageUtil } from '../../utils/message';
import { Context } from 'aws-lambda';
import { Product } from '../../model/product';
import { productsMock } from './productsMock'

export async function getProductsById(event: any, context: Context) {
  try {
    const product = productsMock.find((product: Product) => product.id === event.pathParameters.id);
    if (!product) {
      throw new BaseError('Product not found.', 404);
    }
    return await Promise.resolve(MessageUtil.success(product));

  } catch (error: any) {
    return await Promise.resolve(MessageUtil.error(error.message, error?.statusCode,))
  }

}
