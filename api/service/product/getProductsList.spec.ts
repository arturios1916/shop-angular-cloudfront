import { Context } from "aws-lambda";
import { getProductsList } from "./getProductsList";
import { productsMock } from "./productsMock";

describe('getProductsList', () => {
  let fixture = getProductsList;
  let mockEvent: any;

  it('should return list', async () => {
    let result = await fixture(mockEvent, {} as Context);
    const expectedResponse = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'success',
        data: productsMock
      })
    }
    expect(result).toMatchObject(expectedResponse);
  })
});
