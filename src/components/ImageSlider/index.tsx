import React from "react";
import { View } from "react-native";

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from "./styles";

interface Props {
  imagesUrl: string[];
}

const ImageSlider: React.FC<Props> = ({ imagesUrl }) => {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        {imagesUrl.map((image) => {
          return <CarImage resizeMode="contain" source={{ uri: image }} />;
        })}
      </CarImageWrapper>
    </Container>
  );
};

export default ImageSlider;
