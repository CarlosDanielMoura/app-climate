import { ContainerDetails, SubTitleVento, SubTitleKm, Column } from "./styles";

const Card = ({ image, name, number, operador }) => {
  return (
    <ContainerDetails>
      <img src={image} alt="" />
      <Column>
        <SubTitleVento>{name}</SubTitleVento>
        <SubTitleKm>
          {number} <span>{operador}</span>
        </SubTitleKm>
      </Column>
    </ContainerDetails>
  );
};

export default Card;
