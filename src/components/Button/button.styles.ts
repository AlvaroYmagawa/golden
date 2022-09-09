import styled from "styled-components";
import { ButtonVariants } from "./button.interfaces";

const getVariantStyles = (variant: ButtonVariants, disabled: boolean) => {
  const backgroundColor = "brown";
  const fontColor = '#fff';

  if (disabled)
    return {
      backgroundColor: "gray",
      color: fontColor,
      fontSize: 16,
      border: `1px solid gray`,
      pointsEvent: "none",
    };

  switch (variant) {
    case "outlined":
      return {
        border: `1px solid ${backgroundColor}`,
      };

    default:
      return {
        backgroundColor: backgroundColor,
        color: fontColor,
        fontSize: 16,
        border: `1px solid ${backgroundColor}`,
      };
  }
};

export const Button = styled.button<{
  variant: ButtonVariants;
  disabled: boolean;
}>`
  ${({ variant, disabled }) => getVariantStyles(variant, disabled)}

  border-radius: 8px;
  padding: 16px 30px;
  transition: opacity 0.6s ease;
  font-weight: 700;
  font-size: 16px;

  &:hover {
    opacity: 0.4;
  }
`;
