import { Button, Text, Flex, Image } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import AddButton from '../AddButton/AddButton';
import RecipeStats from '../RecipeStats/RecipeStats';
import { useHistory } from 'react-router-dom';

const RecipeDetailCard = ({ recipe }) => {
  const history = useHistory();
  const ref = useRef();
  const handleBack = () => {
    history.push(`/createmenu`);
  };
  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, []);
  return (
    <Flex
      ref={ref}
      w="600px"
      bg="alkemy.form"
      borderRadius="10px"
      boxShadow="2xl"
      flexDir="column"
      alignItems="center"
      m="50px auto"
      p="30px"
    >
      <Text textStyle="title">{recipe?.title}</Text>
      <Image
        src={recipe.image}
        boxSize="300px"
        alt="recipe"
        objectFit="contain"
      />
      <div
        style={{ marginBottom: '20px' }}
        dangerouslySetInnerHTML={{ __html: `${recipe.summary}` }}
      ></div>
      <RecipeStats recipe={recipe} />
      <AddButton recipe={recipe} />
      <Button
        variant="outline"
        color="alkemy.primary"
        borderColor="alkemy.primary"
        w="100%"
        size="sm"
        onClick={() => handleBack()}
      >
        Volver
      </Button>
    </Flex>
  );
};

export default RecipeDetailCard;
