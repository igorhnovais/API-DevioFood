import supertest from 'supertest';
import app from '../../src/app';
import httpStatus from 'http-status';

import { cleanDbOrders, cleanDbProducts, init } from '../helper';
import productsFactories from '../factories/products';

beforeAll(async() => {
    await init();
});

beforeEach(async() => {
    await cleanDbOrders();
    await cleanDbProducts();
});

const server= supertest(app);

describe('POST/ orders', () => {
    it("Should return status 422 if any information is missing in the order.", async () => {
    })

    describe("when is valid", () => {
        it("Should return status 201 and the order information.", async () => {
        })
    })
})