import Prod from "./Prod";
import SimilarProduct from "../SimilarProduct";
import { Product } from "../../Type/Type";

import Details from "../Details";

export default function ProductInfo(product: Product) {
  console.log(product);
  return (
    <>
      <div className="mx-auto grid w-full max-w-[1092px] gap-10 px-5 lg:grid-cols-2">
        <Prod product={product} />
      </div>

      <Details product={product} />

      <SimilarProduct />
    </>
  );
}
