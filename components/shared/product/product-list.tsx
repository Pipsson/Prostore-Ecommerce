import React from "react";
import ProductCard from "./product-card";
import { Product } from "@/types/";

// below component takes some of data and a title as props
// So we should destructure the props
// The question make means the given title is optional

const ProductList = ({ data, title, limit }: { data: Product[]; title?: string ; limit? : number;}) => {
    const limitedData =  limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">
        {
            title ? title : "Products"
        }
        </h2>
        {data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {limitedData.map((product : Product) => (
                <div key={product.id} className="border p-4 rounded-lg">
                    <ProductCard  product={product} key={product.slug}/>
                   
                </div>
                ))}
            </div>                                                                                                    
        )
         : (
            <div>
             <p>
             No products available at the moment.
             </p>
            </div>
        )}
    </div>
  );
};

export default ProductList;
