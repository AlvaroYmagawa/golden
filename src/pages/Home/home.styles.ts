import styled from "styled-components";
import { Button as ButtonC } from "../../components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5%;
  max-width: 500px;
  margin: 0 auto;
`;

export const Button = styled(ButtonC)`
  margin-bottom: 16px;
  width: 100%;
`;
