import { styled } from "styled-components";
import "@fontsource/montserrat";
import { ProductType } from "@/components/Product";
import { useAppContext } from "@/contexts/appContext";

export default function ProductSelected({
	product,
	count,
}: {
	product: ProductType;
	count: Map<any, any>;
}) {
	const { setProductsSelected } =
		useAppContext();
	const productCount = count.get(product.id) || 0;

	function deleteProduct() {
		setProductsSelected((prev) => {
			const indexToDelete = prev.findIndex((p) => p.id === product.id);

			if (indexToDelete !== -1) {
				const updatedList = [
					...prev.slice(0, indexToDelete),
					...prev.slice(indexToDelete + 1),
				];
				return updatedList;
			}

			return prev;
		});
	}

	function addProduct(){
		setProductsSelected(prev => [...prev, product])
	}

	return (
		<>
			<SCProduct>
				<img src={product.photo} />
				<SCName> {product.name} </SCName>
				<SCQtd>
					<p>Qtd</p>
					<div>
						<button
							onClick={deleteProduct}
							style={{ borderRight: "1px solid #BFBFBF" }}
						>
							-
						</button>
						<p> {productCount} </p>
						<button
							onClick={addProduct}
							style={{ borderLeft: "1px solid #BFBFBF" }}
						>
							+
						</button>
					</div>
				</SCQtd>
				<p> R${Number(product.price).toFixed(0)} </p>
			</SCProduct>
		</>
	);
}

const SCProduct = styled.div`
	width: 385px;
	height: 101px;
	background-color: #fff;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	border-radius: 7px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px;
	img {
		width: 70px;
		height: 60px;
		object-fit: contain;
	}
	p:last-child {
		font-family: "Montserrat";
		font-weight: 700;
		font-size: 14px;
		line-height: 17px;
		color: #000;
	}
`;

const SCName = styled.p`
	font-family: "Montserrat";
	font-weight: 400;
	font-size: 13px;
	line-height: 17px;
	width: 113px;
	height: 33px;
`;

const SCQtd = styled.div`
	width: 50px;
	min-height: 19px;
	p {
		font-family: "Montserrat";
		font-weight: 400;
		font-size: 5px;
		line-height: 6px;
	}
	div {
		width: 50px;
		height: 19px;
		border: 1px solid #bfbfbf;
		font-family: "Montserrat";
		font-weight: 400;
		font-size: 10px;
		line-height: 9px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-radius: 5px;
		box-shadow: 0 0 0.5px rgba(0, 0, 0, 0.5);
		p {
			font-family: "Montserrat";
			font-weight: 400;
			font-size: 10px;
			line-height: 10px;
		}
	}
	button {
		border: 0;
		background-color: #fff;
		font-family: "Montserrat";
		font-weight: 400;
		font-size: 10px;
		line-height: 10px;
	}
`;
