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

describe('POST/ products/filter', () => {
    it("Should return status 404 if no product is found with the given code.")

    it("Should return status 404 if no product is found with the given name.")

    describe("when is valid", () => {
        it("Should return status 200 if the product is found.")
    })
})

describe('GET/ products', () => {
    it("Should return status 404 if no game is found.", async () => {
        const response = await server.get("/games");

        expect(response.status).toEqual(httpStatus.NOT_FOUND);
        expect(response.body).toEqual(
            expect.objectContaining({})
        );
    })

    describe("when is valid", () => {
        it("should return status 200 with all products", async () => {
            await productsFactories.createProducts();

            const response = await server.get('/products');

            expect(response.status).toEqual(httpStatus.OK);
        })
    })
})