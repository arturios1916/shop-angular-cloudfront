import { Handler } from "aws-lambda";

import { getProductsList } from './getProductsList';
import { getProductsById } from "./getProductsById";

export const get: Handler = getProductsList;
export const getById: Handler = getProductsById;
