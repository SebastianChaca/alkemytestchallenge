import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
const Listitem = ({ title, item, caption, price, calories }) => {
  return (
    <Flex
      justifyContent="space-between"
      w="100%"
      alignItems="center"
      my="5px"
      pr="10px"
    >
      <Text textStyle={caption ? 'captionSemiBold' : 'semiBold'}>
        {title} :{' '}
      </Text>
      <Text textStyle={caption ? 'captionRegular' : 'regular'}>
        {price && '$'} {item} {calories && ' kcal'}
      </Text>
    </Flex>
  );
};

export default Listitem;
