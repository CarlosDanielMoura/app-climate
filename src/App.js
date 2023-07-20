import LogoFundo from "./assets/fundo.png";
import Fundo_tempo from "./assets/bg-temp-now.jpeg";
import Vento from "./assets/vento.svg";
import Umidade from "./assets/umidade.svg";

import Card from "./components/Card";

import { HiMapPin } from "react-icons/hi2";

import {
  Container,
  Wrapper,
  ContainerLeft,
  ContainerRigth,
  Row,
  Header,
  Title,
  Number,
  ContainerNumber,
  Celsius,
  ContainerInput,
  Input,
  Button,
  Column,
  RowTemp,
  Imgtype,
  TitleImg,
  RowCard,
} from "./styles/styles";

import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import api from "./services/api";

function App() {
  const [search, setSearch] = useState("");
  const [climate, setClimate] = useState("");

  const handleClickSearch = async () => {
    try {
      const response = await api.get(
        `?q=${search}&units=metric&appid=7b8c0d8073cfe57c6d7f8765a07c55e6&lang=pt`
      );

      if (response.status === 200) {
        setClimate(response.data);
        setSearch("");
        console.log(climate);
      }
    } catch (error) {
      console.log("Erro do servidor");
    }
  };

  return (
    <Container url={LogoFundo}>
      <ContainerInput>
        <Input
          type="text"
          placeholder="Pesquisar cidade..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleClickSearch}>
          <BsSearch />
        </Button>
      </ContainerInput>

      {climate.city ? (
        <Wrapper>
          <ContainerLeft url={Fundo_tempo}>
            <Row>
              <Header>
                <HiMapPin />
                <Title> {climate.city.name}</Title>
              </Header>
            </Row>

            <Row>
              <ContainerNumber>
                <Number>{climate.list[0].main.temp}</Number>
                <Celsius>°C</Celsius>
              </ContainerNumber>
            </Row>
            <Row>
              <Column>
                <RowTemp>
                  <p>{climate.list[0].main.temp_min}°</p>
                  <p>{climate.list[0].main.temp_max}°</p>
                </RowTemp>
              </Column>
            </Row>

            <Row>
              <Imgtype
                src={`https://openweathermap.org/img/wn/${climate.list[0].weather[0].icon}.png`}
                alt=""
              />
              <TitleImg>{climate.list[0].weather[0].description}</TitleImg>
            </Row>

            <RowCard>
              <Card
                image={Vento}
                name="Vento"
                number={climate.list[0].wind.speed}
                operador="Km/h"
              />
              <Card
                image={Umidade}
                name="Umidade"
                number={climate.list[0].main.humidity}
                operador="%"
              />
            </RowCard>
          </ContainerLeft>
        </Wrapper>
      ) : null}
    </Container>
  );
}

export default App;
