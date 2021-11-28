import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RecipeDetailCard from '../../Components/RecipeDetailCard/RecipeDetailCard';
const RecipeDetail = () => {
  const { id } = useParams();
  const { recipes } = useSelector(state => state.searchedRecipes);
  const recipe = recipes.find(r => r.id === parseInt(id));

  return (
    <div>
      <RecipeDetailCard recipe={recipe} />{' '}
    </div>
  );
};

export default RecipeDetail;
