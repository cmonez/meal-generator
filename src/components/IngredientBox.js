import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 600px;
`;

const CenteredBox = styled.div`
  background-color: blue;
  width: 75%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Row = styled.div`
  background-color: pink;
  width: 100%;
  min-height: 20%;
  display: flex;
`;

const Image = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  height: 100%;
  width: 15%;
  background-size: contain;
  background-repeat: no-repeat;
`;

const IngredientBox = ({ meals }) => {
  const rowOfPhotos = meals.map((meal, i) => {
    return (
      <Row>
        <Image imageUrl={meals[i].strMealThumb}></Image>
      </Row>
    );
  });
  return (
    <Container>
      <CenteredBox>{rowOfPhotos}</CenteredBox>
    </Container>
  );
};

export default IngredientBox;
