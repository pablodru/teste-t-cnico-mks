import { styled } from "styled-components";
import "@fontsource/montserrat";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
	return (
		<SCHeader>
			<div>
				<h1>MKS</h1>
				<p>Sistemas</p>
			</div>
			<SCCartDiv>
				<FaShoppingCart style={{ width: "19px", height: "18px" }} />
				<p> 0 </p>
			</SCCartDiv>
		</SCHeader>
	);
}

const SCHeader = styled.div`
	width: 100%;
	height: 101px;
	background-color: #0f52ba;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 80px;
	div:nth-child(1) {
		display: flex;
		h1 {
			font-family: "Montserrat";
			font-weight: 600;
			font-size: 40px;
			line-height: 19px;
			color: #ffffff;
		}
		p {
			font-family: "Montserrat";
			font-weight: 300;
			font-size: 20px;
			line-height: 19px;
			color: #ffffff;
		}
	}
`;

const SCCartDiv = styled.div`
	width: 90px;
	height: 45px;
	background-color: #ffffff;
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15px;
	p {
		font-family: "Montserrat";
		font-weight: 700;
		font-size: 18px;
		line-height: 21px;
		color: #000000;
	}
`;
