import { styled } from "styled-components";
import ProductSelected from "./ProductSelected";
import "@fontsource/montserrat";
import { useAppContext } from "@/contexts/appContext";

export default function Cart() {
	const { productsSelected, isOpen, setIsOpen } = useAppContext();

	const countProductOccurrences = () => {
		const idCountMap = new Map();

		productsSelected.forEach((product) => {
			const productId = product.id;

			if (idCountMap.has(productId)) {
				idCountMap.set(productId, idCountMap.get(productId) + 1);
			} else {
				idCountMap.set(productId, 1);
			}
		});

		return idCountMap;
	};

	const calculateTotal = () => {
		let total = 0;
		const uniqueProductIds = new Set(
			productsSelected.map((product) => product.id)
		);

		uniqueProductIds.forEach((productId) => {
			const product = productsSelected.find((p) => p.id === productId);
			if (product && product.price) {
				const productCount =
					countProductOccurrences().get(productId) || 0;
				total += Number(product.price) * productCount;
			}
		});

		return total;
	};

	if (isOpen) {
		const idOccurrences = countProductOccurrences();
		const total = calculateTotal();

		return (
			<>
				<SCCart>
					<SCTitle>
						<h3>Carrinho de compras</h3>
						<SCClose onClick={() => setIsOpen((prev) => !prev)}>
							{" "}
							X{" "}
						</SCClose>
					</SCTitle>
					<SCProducts>
						{[
							...new Set(
								productsSelected.map((product) => product.id)
							),
						].map((productId) => {
							const product = productsSelected.find(
								(p) => p.id === productId
							);
							if (product) {
								return (
									<ProductSelected
										key={productId}
										product={product}
										count={idOccurrences}
									/>
								);
							}
							return null;
						})}
					</SCProducts>
				</SCCart>
				<SCFinal>
					<SCTotal>
						<p>Total:</p>
						<p>R${total}</p>
					</SCTotal>
					<button>Finalizar Compra</button>
				</SCFinal>
			</>
		);
	} else {
		return null;
	}
}

const SCProducts = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 101px;
	justify-content: space-between;
	align-items: center;
	gap: 25px;
`;

const SCTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 75px;
`;

const SCCart = styled.div`
	width: 486px;
	height: 100vh;
	z-index: 5;
	background-color: #0f52ba;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	position: fixed;
	right: 0;
	top: 0;
	padding: 40px;
	h3 {
		width: 164.8px;
		height: 56px;
		font-family: "Montserrat";
		font-weight: 700;
		font-size: 27px;
		line-height: 33px;
		color: #ffffff;
	}
`;

const SCTotal = styled.div`
	width: 100%;
	height: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 50px;
	padding: 0 40px;
	p {
		font-family: "Montserrat";
		font-weight: 700;
		font-size: 28px;
		line-height: px;
		color: #ffffff;
	}
`;

const SCFinal = styled.div`
	bottom: 0;
	position: fixed;
	z-index: 6;
	width: 486px;
	right: 0;
	height: 150px;
	background-color: #0f52ba;
	button {
		border: 0px solid #000;
		font-family: "Montserrat";
		font-weight: 700;
		font-size: 28px;
		line-height: 15px;
		color: #ffffff;
		height: 97px;
		background-color: #000;
		width: 100%;
	}
`;

const SCClose = styled.div`
	width: 38px;
	height: 38px;
	background-color: #000;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 25px;
	font-family: "Montserrat";
	font-weight: 400;
	font-size: 20px;
	line-height: 15px;
	color: #ffffff;
	cursor: pointer;
`;
