import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface IFoodPlate {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface IProps {
  food: IFoodPlate;
}

const Food: React.FC<IProps> = ({ food }: IProps) => {
  return (
    <Container>
      <header>
        <img src={food.strCategoryThumb} alt={food.strCategory} />
      </header>
      <section className="body">
        <h2>{food.strCategory}</h2>
        <p>{food.strCategoryDescription}</p>
      </section>
      <section className="footer">
        <Link to={`/recipe/${food.idCategory}`}>Ver receita</Link>
      </section>
    </Container>
  );
};

export default Food;
