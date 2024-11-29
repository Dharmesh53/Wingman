import { useCallback, useEffect, useState } from "react";

import axios from "../../api/axios";
import { HomeLayout } from "../../layouts/home-layout";
import { Callout } from "../shared/callout";
import { Card } from "../shared/card";
import { Loading } from "../shared/loading";
import MaxWidthWrapper from "../shared/max-width-wrapper";

export function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetcher = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("/products");
      const data = response.data;
      setProducts(data);
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
              {products?.map((product, idx) => (
                <Card key={idx} data={product} />
              ))}
            </div>
          </MaxWidthWrapper>
        </div>
      )}
    </HomeLayout>
  );
}
