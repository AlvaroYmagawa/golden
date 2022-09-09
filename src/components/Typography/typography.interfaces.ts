import { ReactNode } from "react";
import { BaseComponent } from "../../interfaces/BaseComponent";

export type TypographyVariants =
  | "regular"
  | "subTitle"
  | "description"
  | "title";

export interface TypographyProps extends BaseComponent {
  children: ReactNode;
  variant?: TypographyVariants;
}
