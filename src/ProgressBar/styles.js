import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProgressContainer = styled.div`
  display: flex;
  width: 300px;
  height: 20px;
  background-color: #ccc;
  border-radius: 50px;
  overflow: hidden;
  margin-bottom: 10px;
`;
export const ProgressBar2 = styled.div`
  background-color: ${({ color }) => color || "#aaa"};
  width: 100%;
  height: 100%;
  transform: ${({ progress = 0 }) => `scaleX(${progress})`};
  transform-origin: left center;
  transition: transform 0.99s ease-in-out;
`;
