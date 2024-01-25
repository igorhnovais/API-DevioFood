import supertest from 'supertest';
import app from '../../src/app';
import httpStatus from 'http-status';

import { cleanDbFinish, cleanDbOrders, cleanDbProducts, init } from '../helper';
import ordersFactories from '../factories/orders';
import productsFactories from '../factories/products';
import finishFactories from '../factories/finishes';

beforeAll(async() => {
    await init();
});

beforeEach(async() => {
    await cleanDbOrders();
    await cleanDbProducts();
    await cleanDbFinish();
});

const server= supertest(app);

describe('POST/ orders', () => {
    it("Should return status 422 if any information is missing in the order.", async () => {
        const response = await server.post("/orders").send({});
        expect(response.status).toEqual(httpStatus.UNPROCESSABLE_ENTITY);
        expect(response.body).toEqual(
            expect.objectContaining({})
        )
    })

    describe("when is valid", () => {
        it("Should return status 201 and the order information.", async () => {
            const product = await productsFactories.createProducts()
            const objOrder = {
                productId: product.id,
                nameCustumer: "joao",
                observation: "sem obs",
                transshipment: 0,
                total: 4050,
                drop: false,
                description: "bla bla",
                aditional: "bacon",
                quantity: 1
            }

            const response = await server.post("/orders").send(objOrder);
            expect(response.status).toEqual(httpStatus.CREATED);
        })
    })
})

describe('POST/ orders/finish/:name', () => {
    it("Should return status 404 if any information is missing in the order.", async () => {
        const response = await server.post("/orders/finish/joao");
        expect(response.status).toEqual(httpStatus.NOT_FOUND);
        expect(response.body).toEqual(
            expect.objectContaining({})
        )
    })

    describe("when is valid", () => {
        it("Should return status 201 if order is finished.", async () => {
            const product = await productsFactories.createProducts()
            await ordersFactories.createOrders(product.id);

            const response = await server.post("/orders/finish/joao");
            expect(response.status).toEqual(httpStatus.CREATED);

        })
    })
})

describe('GET/ orders/:nameCustomer', () => {
    it("Should return status 404 if no customer is found.", async () => {
        const response = await server.post("/orders/finish/jo");
        expect(response.status).toEqual(httpStatus.NOT_FOUND);
        expect(response.body).toEqual(
            expect.objectContaining({})
        )
    })

    describe("when is valid", () => {
        it("Should return status 200 with all the order information.", async () => {
            const product = await productsFactories.createProducts()
            const order = await ordersFactories.createOrders(product.id);
            await finishFactories.finishOrder(order.nameCustumer);

            const response = await server.post("/orders/finish/joao");
            expect(response.status).toEqual(httpStatus.CREATED);
        })
    })
})

describe('GET/ orders-finish', () => {
    it("Should return status 404 if no customer is found.", async () => {
        const response = await server.get("/orders-finish");
        expect(response.status).toEqual(httpStatus.OK);
        expect(response.body).toEqual(
            expect.objectContaining({})
        )
    })

    describe("when is valid", () => {
        it("Should return status 200 with all the order finished information.", async () => {
            const product = await productsFactories.createProducts()
            const order = await ordersFactories.createOrders(product.id);
            await finishFactories.finishOrder(order.nameCustumer);

            const response = await server.get("/orders-finish");
            expect(response.status).toEqual(httpStatus.OK);
        })
    })
})

describe('DELETE/ orders/:id', () => {
    it("Should return status 404 if the order is not found.", async () => {
        const product = await productsFactories.createProducts()
        const order = await ordersFactories.createOrders(product.id);

        const response = await server.delete(`/orders/${order.id -1}`);
        expect(response.status).toEqual(httpStatus.NOT_FOUND);
        expect(response.body).toEqual(
            expect.objectContaining({})
        )
    })

    describe("when is valid", () => {
        it("Should return status 200 when the order is deleted.", async () => {
            const product = await productsFactories.createProducts()
            const order = await ordersFactories.createOrders(product.id);

            const response = await server.delete(`/orders/${order.id}`);
            expect(response.status).toEqual(httpStatus.OK);

        })
    })
})

describe('PUT/ orders-update', () => {
    it("Should return status 404 if the order is not found.", async () => {
        const obj = {
            nameCustumer: 'ze'
        }

        const response = await server.put("/orders-update").send(obj);
        expect(response.status).toEqual(httpStatus.NOT_FOUND);
        expect(response.body).toEqual(
            expect.objectContaining({})
        )
    })

    it("Should return status 400 if the order has already been fulfilled.", async () => {
        const product = await productsFactories.createProducts()
        const order = await ordersFactories.createOrders(product.id);

        const obj = {
            nameCustumer: order.nameCustumer
        }

        await server.put("/orders-update").send(obj);
        const response = await server.put("/orders-update").send(obj);
        expect(response.status).toEqual(httpStatus.BAD_REQUEST);
        expect(response.body).toEqual(
            expect.objectContaining({})
        )
    })

    describe("when is valid", () => {
        it("Should return status 200 if the order is successfully fulfilled", async () => {
            const product = await productsFactories.createProducts()
            const order = await ordersFactories.createOrders(product.id);

            const obj = {
                nameCustumer: order.nameCustumer
            }

            const response = await server.put("/orders-update").send(obj);
            expect(response.status).toEqual(httpStatus.OK);
        })
    })
})