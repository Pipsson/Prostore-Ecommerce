import { cn } from "@/lib/utils";
import React from "react";

const ProductProce = ({ value, className } : {value :number ; className ? : string}) => {

    const stringValue  = value.toFixed(2);
    const [integerPart, decimalPart] = stringValue.split(".");


  return (<p className={cn("text-2xl ", className)}>
  <span className = "font-bold align-super "> $

  </span>
  {integerPart }
   <span className = "text-sm align-super "> {decimalPart}
  </span>
  </p>)
};

export default ProductProce;
