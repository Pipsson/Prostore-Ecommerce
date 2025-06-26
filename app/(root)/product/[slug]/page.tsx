import { getProductBySlug } from "@/lib/actions/product.actions";
import React from "react";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductProce from "@/components/shared/product/product-price";

const ProductPageDetails = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2">{/* images column */}</div>
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand}
                {product.category}
              </p>
            </div>
            <h1 className="h3-bold">{product.name}</h1>
            <p>
              {product.rating.toNumber()} of {product.numReviews.toString()}{" "}
              reviews
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <ProductProce
                value={Number(product.price)}
                className="w-24 rounded-full bg-green-100 text-green-600 px-5 py-2"
              />
            </div>
            <div className="mt-10">
              <p className="font-semibold">
                Description
              </p>
              <p>{product.description}</p>
            </div>
          </div>
          {/* Actions column */}
          <div>
            <Card>
              <CardContent className="p-4 ">
                <div className="mb-2 flex justify-between ">
                  <div>Price</div>
                  <div>
                    <ProductProce
                      value={Number(product.price)}
                    />
                  </div>
                </div>
                <div className="mb-2 flex justify-between ">
                  <div>Status</div>
                  {
                    product.stock > 0 ? (
                      <Badge variant="outline" className="bg-green-100 text-green-600">
                        In Stock
                      </Badge>
                    ) : (
                      <Badge variant="destructive" className="bg-red-100 text-red-600">
                        Out of Stock
                      </Badge>
                    )
                  }
                </div>
                {
                  product.stock > 0 && (
                    <div className="flex-center ">
                      <Button className="w-full">Add to Cart</Button>
                    </div>
                  )
                }
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
    </>
  );
};

export default ProductPageDetails;
