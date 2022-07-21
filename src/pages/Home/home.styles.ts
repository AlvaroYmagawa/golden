import styled, { keyframes } from "styled-components";
import { Photo as PhotoC } from "../../components";

export const FakeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  background-color: #222;
  height: 100vh;
  padding: 0 25%;

  .jblTitle {
    font-size: 40px;
    font-weight: bold;
    color: #f1f1f1;
    text-transform: uppercase;
    font-family: "Oswald", sans-serif;
  }

  .jblSmall {
    margin: 16px 0;
    font-size: 28px;
    color: #eee;
    font-family: "Oswald", sans-serif;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 6px 12px #ffffff20;
  left: 0;
  background-color: #ff3300;
  .logo {
    border-radius: 8px;
  }
`;

export const Button = styled.div`
  cursor: pointer;
  border-radius: 8px;
  height: 50px;
  padding: 8px 16px;
  text-align: center;
  font-size: 24px;
  background-color: #ff3300;
  border: 0;
  justify-content: center;
  width: 50%;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  margin-top: 40px;
  font-family: "Oswald", sans-serif;

  &:hover {
    transition: all 0.3s ease;
    opacity: 0.7;
    transform: scale(0.98);
  }
`;

const show = keyframes`
  from {
    opacity: 0;
    bottom: -100vh
  }

  to {
    opacity: 1;
    bottom: 0;
  }
`;

export const Container = styled.div`
  position: relative;
  flex: 1;
  text-align: center;
  padding: 24px;
  animation: ${show} 3s ease-in;

  h1 {
    font-size: 50px;
    color: #111;
  }

  p,
  h1,
  h2,
  h3 {
    font-family: "Edu VIC WA NT Beginner", cursive;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 40px;

  .date {
    margin-bottom: 16px;
  }

  .alert {
    font-size: 20px;
    color: red;
    text-align: left;
    font-weight: bold;
  }

  .content {
    font-size: 30px;
    margin: 0 60px;
    color: #333;
  }
`;

export const Photo = styled(PhotoC)<{ rotate: number }>`
  margin-bottom: 24px;
  transform: rotate(${(props) => props.rotate}deg);
`;

export const Photos = styled.div``;
