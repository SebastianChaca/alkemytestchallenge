import { Input, Text, FormLabel, FormControl, Box } from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';

const SearchBar = ({ fetchData, url, isChecked, action, loading }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    if (value.length < 2) {
      setError(true);
      return;
    }
    fetchData('get', url(value), action);
    setValue('');
  };
  const handleChange = e => {
    setValue(e.target.value);
    setError(null);
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <FormControl display="flex" alignItems="end">
          <FormLabel>Buscar :</FormLabel>
          <Input
            variant="flushed"
            w="400px"
            borderColor="black"
            value={value}
            onChange={e => handleChange(e)}
            isDisabled={loading}
            placeholder={loading ? 'cargando...' : 'ingrese un ingrediente..'}
          />
        </FormControl>
        {error && (
          <Text
            textStyle="captionRegular"
            color="alkemy.error"
            textAlign="center"
            my="5px"
          >
            {'Ingrese mas de dos caracteres'}
          </Text>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
