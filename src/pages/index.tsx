import Product, { ProductType } from "@/components/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import "@fontsource/montserrat";

export default function Home({}) {
	const [products, setProducts] = useState<ProductType[]>([]);

	const fetchData = () => {
		axios
			.get(
				"https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
			)
			.then((res) => setProducts(res.data.products))
			.catch((err) => console.log("err", err));
	};

	console.log(products);

	useEffect(() => {
		fetchData();
	}, []);

	if (!products || products.length === 0) return <p>Carregando...</p>;

	return (
		<>
			<SCHome>
        {products.map(product => <Product key={product.id} product={product} />)}
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
  gap:20px;
  flex-wrap: wrap;
`;
