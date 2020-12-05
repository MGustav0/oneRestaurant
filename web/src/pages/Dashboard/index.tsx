import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import apiMealDB from '../../services/apiMealDB';

import Food from '../../components/Food';

import { FoodsContainer } from './styles';

interface IFoodPlate {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const Dashboard: React.FC = () => {
  const [foods, setFoods] = useState<IFoodPlate[]>([]);

  useEffect(() => {
    apiMealDB.get(`1/categories.php`).then(response => {
      const foodDetails = response.data;

      setFoods(foodDetails.categories);
    });
  }, []);

  return (
    <>
      <Header />

      <FoodsContainer data-testid="foods-list">
        {foods.map(food => (
          <Food key={food.idCategory} food={food} />
        ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
