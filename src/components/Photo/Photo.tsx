import { PhotoProps } from "./photo.interfaces";
import { Container, Image } from "./photo.styles";

export function Photo({ src, imagePosition = 'center', ...rest }: PhotoProps) {
  return (
    <Container {...rest}>
      <Image src={src} imagePosition={imagePosition} />
    </Container>
  );
}
