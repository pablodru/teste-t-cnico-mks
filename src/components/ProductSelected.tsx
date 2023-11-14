import { styled } from "styled-components";
import "@fontsource/montserrat";

export default function ProductSelected() {
	return (
		<>
			<SCProduct>
				<img src="https://imgnike-a.akamaihd.net/360x360/01279515.jpg" />
				<SCName> Apple Watch Series 4 GPS </SCName>
				<SCQtd>
					<p>Qtd</p>
					<div>
						<button style={{ borderRight: "1px solid #BFBFBF" }}>
							-
						</button>
						<p> 1 </p>
						<button style={{ borderLeft: "1px solid #BFBFBF" }}>
							+
						</button>
					</div>
				</SCQtd>
				<p> R$399 </p>
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
