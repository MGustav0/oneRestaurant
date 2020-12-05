import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import apiMealDB from '../../services/apiMealDB';

import Header from '../../components/Header';

import { Container, FoodContainer, Intro, Recipe } from './styles';

// interface ArticleParams {
//   id: string;
// }

interface IFoodPlate {
  idMeal: number;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
}

const Contact: React.FC = () => {
  // const { params } = useRouteMatch<ArticleParams>();

  const [foods, setFoods] = useState<IFoodPlate[]>([]);

  useEffect(() => {
    apiMealDB.get(`1/lookup.php?i=52764`).then(response => {
      const foodDetails = response.data;

      setFoods(foodDetails.meals);
    });
  }, []);

  return (
    <>
      <Header />

      <Container>
        {foods.map(food => (
          <FoodContainer key={food.idMeal}>
            <img src={food?.strMealThumb} alt={food?.strMeal} />
            <Intro>
              <h1>{food?.strMeal}</h1>
              <h2>{food?.strCategory}</h2>
              <h3>{food?.strArea}</h3>
            </Intro>

            <Recipe>
              <p>{food?.strInstructions}</p>

              {console.log(food.strYoutube)}

              <div>
                <ReactPlayer url={food.strYoutube} />
              </div>
            </Recipe>
          </FoodContainer>
        ))}
      </Container>
    </>
  );
};

export default Contact;
