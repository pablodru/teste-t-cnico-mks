import { styled } from "styled-components";
import { FaShoppingBag } from "react-icons/fa";
import "@fontsource/montserrat";

export type ProductType = {
	id: number;
	name: string;
	brand: string;
	description: string;
	price: string;
	photo: string;
	createdAt: string;
	updatedAt: string;
};

interface ProductProps {
	product: ProductType;
}

export default function Product({ product }: ProductProps) {

    function buy () {

    }

	return (
		<SCProduct>
			<div>
				<img src={product.photo} />
				<h2> {product.name} </h2>
				<p>{product.description}</p>
			</div>
			<div onClick={buy}>
				<FaShoppingBag
					style={{ width: "12px", height: "13px", color: "#fff" }}
				/>
				<p>COMPRAR</p>
			</div>
			<div>
				<p> R${Number(product.price)} </p>
			</div>
		</SCProduct>
	);
}

const SCProduct = styled.div`
	width: 218px;
	height: 285px;
	background-color: #ffffff;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	position: relative;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

	div:nth-child(1) {
		display: flex;
		flex-direction: column;
		padding: 10px;
		justify-content: space-between;
		gap: 5px;
		img {
			width: 100%;
			min-height: 140px;
			max-height: 140px;
			object-fit: contain;
		}
		h2 {
			font-family: "Montserrat";
			font-weight: 400;
			font-size: 16px;
			line-height: 19px;
			color: #2c2c2c;
			max-width: 124px;
		}
		p {
			font-family: "Montserrat";
			font-weight: 300;
			font-size: 10px;
			line-height: 12px;
			color: #2c2c2c;
		}
	}

	div:nth-child(2) {
		width: 100%;
		height: 32px;
		background-color: #0f52ba;
		position: absolute;
		bottom: 0;
		border-radius: 15px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0 40px;
		p {
			font-family: "Montserrat";
			font-weight: 600;
			font-size: 14px;
			line-height: 18px;
			color: #ffffff;
		}
	}

	div:nth-child(3) {
		min-width: 64px;
		height: 26px;
		position: absolute;
		right: 10px;
		bottom: 108px;
		display: flex;
		border-radius: 10px;
		align-items: center;
		justify-content: center;
		background-color: #373737;
		p {
			font-family: "Montserrat", sans-serif;
			font-weight: 700;
			font-size: 15px;
			line-height: 15px;
			color: #ffffff;
		}
	}
`;
