import { BaseComponent } from "../../interfaces/BaseComponent";

export type ImagePosition = "center" | "top" | "bottom";

export interface PhotoProps extends BaseComponent {
  src?: string;
  imagePosition?: ImagePosition;
  rotate?: number;
}
