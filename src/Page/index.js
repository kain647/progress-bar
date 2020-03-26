import React from "react";
import { Container, ProgressBar, ProgressContainer } from "./styles";

export const Page = () => {
  return (
    <Container>
      <Progress value={2000} maxValue={5000} color={"#ff00ff"} />
      <Progress value={80} maxValue={100} color={"red"} />
      <Progress value={80} maxValue={100} color={"green"} height={10} />
      <Progress value={80} maxValue={100} color={"green"} height={50} rounded />
      <Progress
        value={120}
        maxValue={350}
        color={"yellow"}
        height={30}
        rounded
      />
    </Container>
  );
};

const Progress = props => {
  const { value, maxValue, color, rounded = false, height = 20 } = props;
  const progress = value / maxValue;
  return (
    <ProgressContainer height={height} rounded={rounded}>
      <ProgressBar progress={progress} color={color} />
    </ProgressContainer>
  );
};
