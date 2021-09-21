import React from "react";
import { StatusBar } from "react-native";
import { Container, CarList, Header, TotalCars, HeaderContent } from "./styles";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import Car from "../../components/Car";

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

const Home: React.FC = () => {
  const carData = {
    brand: "audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 300,
    },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[
          carData,
          carData,
          carData,
          carData,
          carData,
          carData,
          carData,
          carData,
          carData,
          carData,
          carData,
        ]}
        renderItem={({ item }) => <Car data={item as CarData} />}
      />
    </Container>
  );
};

export default Home;
