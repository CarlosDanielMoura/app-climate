import { styled } from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  gap: 30px;
`;

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 1090px;
  height: 100%;
  max-height: 480px;

  @media (max-width: 320px) {
    padding: 10px;
  }
  @media (max-width: 425px) {
    padding: 10px;
  }
`;

export const ContainerLeft = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100%;
  max-height: 480px;
  border-radius: 10px;
  background: url(${(props) => props.url}),
    lightgray -153.664px -10px / 164.027% 109.583% no-repeat;
  backdrop-filter: blur(10px);
`;

export const ContainerRigth = styled.div`
  width: 100%;
  max-width: 578px;
  height: 100%;
  max-height: 480px;
  background: yellow;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
`;

export const RowCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-right: 32px;
  align-items: center;
  margin-top: 34px;
  gap: 5px;

  svg {
    color: #9d99e4;
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  color: #c2bff4;
  text-align: right;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Number = styled.p`
  height: 100%;
  color: #fff;
  font-family: "Lato", sans-serif;
  font-size: 88px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ContainerNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 61.5px;
`;

export const Celsius = styled.p`
  height: 100%;
  color: #dad8f7;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 14px;
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: baseline;
`;

export const ContainerInput = styled.div`
  width: 100%;
  height: 30px;
  max-width: 1090px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  height: 100%;
  width: 50%;
  border: none;
  border-radius: 6px;
  background: rgba(102, 96, 200, 0.6);
  backdrop-filter: blur(0px);
  color: white;
  font-size: 14px;
  padding: 5px;
  caret-color: white;
  text-align: center;

  &:focus {
    outline: none;
    text-align: center;
  }
  &::placeholder {
    color: white;
    font-size: 14px;
    text-align: center;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  border: none;
  border-radius: 6px;
  background: rgba(102, 96, 200, 0.6);
  backdrop-filter: blur(0px);
  transform: scale(1);
  transition: ease-in 0.3s;

  svg {
    color: white;
    font-size: 16px;
  }

  &:hover {
    transform: scale(1.2);
    transition: ease-in-out 0.3s;
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const RowTemp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;

  p:nth-child(1) {
    color: #fff;
    text-align: center;
    font-family: "Lato", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p:nth-child(2) {
    color: #c2bff4;
    font-family: "Lato", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Imgtype = styled.img`
  margin-top: 30px;
  width: 60px;
`;

export const TitleImg = styled.p`
  margin-top: 30px;
  color: #fff;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
