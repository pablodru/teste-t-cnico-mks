import { styled } from "styled-components";
import "@fontsource/montserrat";

export default function Footer() {
	return (
		<SCFooter>
			<p>MKS sistemas © Todos os direitos reservados</p>
		</SCFooter>
	);
}

const SCFooter = styled.div`
	width: 100%;
	height: 34px;
	position: fixed;
	bottom: 0;
	background-color: #eeeeee;
	display: flex;
	align-items: center;
	justify-content: center;
	p {
		font-family: "Montserrat";
		font-weight: 400;
		font-size: 12px;
		line-height: 14px;
		color: #000000;
	}
`;
