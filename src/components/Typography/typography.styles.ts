import styled from "styled-components";
import { TypographyVariants } from "./typography.interfaces";

const getVariantStyles = (variant: TypographyVariants) => {
  switch (variant) {
    case "title":
      return { fontSize: 32, fontWeight: 700 };

    case "description":
      return { fontSize: 16, color: "#444" };

    case "subTitle":
      return { fontSize: 22, fontWeight: 700 };

    default:
      return { fontSize: 20 };
  }
};

export const Typography = styled.p<{ variant: TypographyVariants }>`
  font-family: "Edu VIC WA NT Beginner", cursive;
  ${({ variant }) => getVariantStyles(variant)}
`;
