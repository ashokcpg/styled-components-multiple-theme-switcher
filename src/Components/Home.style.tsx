import styled from "styled-components";

export const Wrapper = styled.section`
    height: 100vh;
	width: 100%;
	padding: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
    flex-direction: column;
	background-color: ${(props:any)=>props.theme.backgroundColor};
`;

export const Div1 = styled.div`
    position: relative;
	height: 80vh;
	width: 80vw;
	background-color: ${(props:any)=>props.theme.secondBg};
    `;

export const P1 = styled.p`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 20rem;
font-family: 'Courier New', Courier, monospace;
color: ${(props:any)=>props.theme.textColor};
padding: 1rem;
background-color: blue;
text-align: center;
`;

export const P2 = styled.p`
font-size: 2rem;
color: ${(props:any)=>props.theme.secondBg};
text-align: center;
`;

export const Button = styled.button`
margin-top: 2rem;
padding: 1rem 2rem;
cursor: pointer;
color: ${(props:any)=>props.theme.textColor};
background-color: ${(props:any)=>props.theme.secondBg};
border: 1px solid #000;
cursor: pointer;
`;

