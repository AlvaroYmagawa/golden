import { BaseComponent } from "../../interfaces/BaseComponent";

export type ButtonVariants = "outlined" | "filled";

export interface ButtonProps extends BaseComponent {
  onClick?: () => void;
  variant?: ButtonVariants;
  disabled?: boolean;
  content: string;
  type?: "submit" | "reset" | "button" | undefined;
}
