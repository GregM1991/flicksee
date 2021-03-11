import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  grid-column: span 3;
  background-image: props => props.image;
  background-color: red;
  border-radius: 12px;
  height: 350px;
  justify-content: flex-end;
`;

const Header = styled.h3``;

const Description = styled.p`
  color: #fff;
  font-weight: 100;
`;

const MovieCard = ({ image, title, description }) => (
  <Container img={image}>
    <Header>{title}HEADER</Header>
    <Description>
      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum, dolor
      sit amet consectetur adipisicing elit. Tenetur, repudiandae.
      {description}
    </Description>
  </Container>
);

export default MovieCard;
