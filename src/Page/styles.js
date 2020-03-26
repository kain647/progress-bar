import styled from "styled-components";
import { Flex } from "../styled-system";

export const Container = styled(Flex).attrs({
  display: "flex"
})`
  flex-direction: column;
`;
/*export const Header = styled(Flex).attrs({
  justifyContent: "center",
  alignItems: "center",
  width: "300px",
  height: "50px",
  bg: "#dadada"
})``;*/

export const ProgressContainer = styled.div`
  display: flex;
  width: 200px;
  height: ${({ height }) => `${height}px`};
  justify-content: flex-start;
  align-items: center;
  background-color: #ccc;
  margin-bottom: 10px;
  border-radius: ${({ height, rounded }) => (rounded ? `${height}px` : 0)};
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  background-color: ${({ color }) => color || "#aaa"};
  width: ${({ progress = 0 }) => `${progress}%`};
  height: 100%;
  transition: width 0.25s ease-in-out;
`;

/*export const ProgressBar2 = styled.div`
  background-color: ${({ color }) => color || "#aaa"};
  width: 100%;
  height: 100%;
  transform: ${({ progress = 0 }) => `scaleX(${progress})`};
  transform-origin: left center;
  transition: transform 0.25s ease-in-out;
`;*/
