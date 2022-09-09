import styled from "styled-components";
import { Typography as TypographyC } from "../../../components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5%;
`;

export const Title = styled(TypographyC)``;

export const LovesPoint = styled(TypographyC)`
  margin-bottom: 16px;

  strong {
    color: red;
    font-size: 16px;
    margin-right: 8px;
  }
`;

export const Typography = styled(TypographyC)`
  margin-bottom: 16px;
`;
