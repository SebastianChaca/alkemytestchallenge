import { Input, Text } from '@chakra-ui/react';
import { useState } from 'react';

const SearchBar = ({ fetchData, url, action, loading }) => {
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
        <Input
          borderRadius="10px"
          w="400px"
          m="10px"
          borderColor="black"
          value={value}
          onChange={e => handleChange(e)}
          isDisabled={loading}
          placeholder={loading ? 'cargando...' : 'ingrese un ingrediente..'}
        />
        {error && (
          <Text textStyles="captionSemibold" color="alkemy.error">
            Ingrese mas de dos caracteres
          </Text>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
