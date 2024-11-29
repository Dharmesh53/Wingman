import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "../../api/axios";
import { HomeLayout } from "../../layouts/home-layout";
import { RootState } from "../../store";
import { setProducts } from "../../store/product-slice";
import { Callout } from "../shared/callout";
import { Card } from "../shared/card";
import { Loading } from "../shared/loading";
import MaxWidthWrapper from "../shared/max-width-wrapper";

export function Home() {
  const dispatch = useDispatch();
  const { products, searchTerm } = useSelector(
    (state: RootState) => state.product,
  );

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetcher = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("/products");
      const data = response.data;
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setError(error?.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetcher();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <HomeLayout>
      {error && (
        <Callout type="error">
          <p>{error}</p>
        </Callout>
      )}

      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex w-full justify-center p-10">
          <MaxWidthWrapper>
            <div className="grid grid-flow-row gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts?.map((product, idx) => (
                <Card key={idx} data={product} />
              ))}
            </div>
          </MaxWidthWrapper>
        </div>
      )}
    </HomeLayout>
  );
}
