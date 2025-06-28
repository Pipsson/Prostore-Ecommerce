"use server";

import { PrismaClient } from "../generated/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { Product } from "@/types";

export async function getLatestProducts(): Promise<Product[]> {
  const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {
      createdAt: "desc",
    },
  });

  return convertToPlainObject(data) as unknown as Product[];
}

// get product by slug
export async function getProductBySlug(slug: string) {
  const prisma = new PrismaClient();
  return await prisma.product.findFirst({
    where: {
      slug: slug,
    },
  });
}
