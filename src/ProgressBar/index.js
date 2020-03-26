import React from "react";
import { Container, ProgressContainer, ProgressBar2 } from "./styles";

const ProgressBar = () => {
  return (
    <Container>
      <Progress value={40} maxValue={100} color={"#e91e1e"} />
      <Progress value={60} maxValue={100} color={"#546bef"} />
      <Progress value={80} maxValue={100} color={"#58b661"} />
    </Container>
  );
};

const Progress = props => {
  const { value, maxValue, color } = props;
  const progress = value / maxValue;
  return (
    <ProgressContainer>
      <ProgressBar2 progress={progress} color={color} />
    </ProgressContainer>
  );
};

export default ProgressBar;
