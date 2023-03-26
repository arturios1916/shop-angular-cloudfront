import { Context } from 'aws-lambda';
import { getProductsById } from './getProductsById';
import { productsMock } from './productsMock';

describe('getProductsById', () => {
  let fixture = getProductsById;
  let mockEvent: any;

  beforeEach(() => {
    mockEvent = {};
  })

  it('should return value', async () => {
    mockEvent = { pathParameters: { id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa" } };
    let expectedProduct = productsMock.find(e => e.id === mockEvent.pathParameters.id);
    const expectedResponse = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'success',
        data: expectedProduct
      })
    }
    let result = await fixture(mockEvent, {} as Context);
    expect(result).toMatchObject(expectedResponse);
  });

  it('should return error with specified text', async () => {
    mockEvent = { pathParameters: { id: "7567ec4b-b10c-48c5-9345-c73c48a80aa" } };
    const expectedResponse = {
      statusCode: 404,
      body: JSON.stringify({
        message: 'Product not found.',
      })
    };
    let result =  await fixture(mockEvent, {} as Context);
    expect(result).toMatchObject(expectedResponse);
  });

  it('should return basic error', async () => {
    const expectedResponse = {
      statusCode: 400,
    }
    let result =  await fixture(mockEvent, {} as Context);
    expect(result).toMatchObject(expectedResponse);
  });
})
