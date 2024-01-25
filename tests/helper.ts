import prisma from "../src/database/db";
import { Express } from "express";
import app from "../src/app";

export function init(): Promise<Express> {
  return Promise.resolve(app);
}

export async function cleanDbOrders() {
  await prisma.orders.deleteMany({});
}

export async function cleanDbProducts() {
  await prisma.products.deleteMany({});
}
export async function cleanDbFinish() {
  await prisma.finishes.deleteMany({});
}