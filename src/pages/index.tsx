import Product, { ProductType } from "@/components/Product";
import { useQuery } from "react-query";
import { styled } from "styled-components";
import "@fontsource/montserrat";

const fetchProducts = async () => {
  const res = await fetch(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
  );
  const data = await res.json();
  return data.products;
};

export default function Home() {
  const { data: products, isLoading, isError } = useQuery<ProductType[]>("products", fetchProducts);

  if (isLoading || !products) return <p>Carregando...</p>;

  if (isError) return <p>Erro ao carregar os produtos</p>;

  return (
    <>
      <SCHome>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </SCHome>
    </>
  );
}

const SCHome = styled.div`
  margin: 100px auto;
  min-width: 940px;
  max-width: 950px;
  min-height: 601px;
  max-height: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;
