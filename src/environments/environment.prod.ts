import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://axpepxl0n4.execute-api.eu-central-1.amazonaws.com/dev',
    order: 'https://axpepxl0n4.execute-api.eu-central-1.amazonaws.com/dev',
    import: 'https://axpepxl0n4.execute-api.eu-central-1.amazonaws.com/dev',
    bff: 'https://axpepxl0n4.execute-api.eu-central-1.amazonaws.com/dev',
    cart: 'https://axpepxl0n4.execute-api.eu-central-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: false,
    bff: false,
    cart: false,
  },
};
