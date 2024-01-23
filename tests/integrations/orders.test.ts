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

describe('POST/ orders/finish', () => {
    it("Should return status 404 if any information is missing in the order.", async () => {
    })

    describe("when is valid", () => {
        it("Should return status 201 if order is finished.", async () => {
        })
    })
})

describe('GET/ orders', () => {
    it("Should return status 404 if no customer is found.", async () => {
    })

    it("Should return status 422 if the customer's name is empty.", async () => {
    })

    describe("when is valid", () => {
        it("Should return status 200 with all the order information.", async () => {
        })
    })
})

describe('GET/ orders/finish', () => {
    it("Should return status 404 if no customer is found.", async () => {
    })

    describe("when is valid", () => {
        it("Should return status 200 with all the order finished information.", async () => {
        })
    })
})

describe('DELETE/ orders/:id', () => {
    it("Should return status 404 if the order is not found.", async () => {
    })

    describe("when is valid", () => {
        it("Should return status 200 when the order is deleted.", async () => {
        })
    })
})

describe('PUT/ orders-update', () => {
    it("Should return status 404 if the order is not found.", async () => {
    })

    it("Should return status 400 if the order has already been fulfilled.", async () => {
    })

    describe("when is valid", () => {
        it("Should return status 200 if the order is successfully fulfilled", async () => {
        })
    })
})