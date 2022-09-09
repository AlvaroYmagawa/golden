import { PhotoProps } from "./photo.interfaces";
import { Container, Image } from "./photo.styles";

export function Photo({
  src,
  imagePosition = "center",
  rotate = 0,
  ...rest
}: PhotoProps) {
  return (
    <Container rotate={rotate} {...rest}>
      <Image src={src} imagePosition={imagePosition} />
    </Container>
  );
}
