import { styled } from "styled-components";

export const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: baseline;
`;

export const ContainerDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 6px;
  background: rgba(102, 96, 200, 0.6);
  backdrop-filter: blur(0px);
  gap: 12px;
  margin-top: 50px;
`;

export const SubTitleVento = styled.p`
  color: #e7e6fb;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SubTitleKm = styled.p`
  color: #e7e6fb;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  span {
    color: #dad8f7;
    text-align: center;
    font-family: "Lato", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
