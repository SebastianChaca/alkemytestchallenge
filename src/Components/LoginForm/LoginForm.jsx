import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Heading,
  InputGroup,
  InputRightElement,
  Text,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useFormik } from 'formik';
import alkemyUrl from '../../Utils/alkemyUrl';
import useFetch from '../../Hooks/useFetch';
import { setCurrentUser } from '../../Redux/Actions/userActions';
const LoginForm = () => {
  const { error, fetchData, loading } = useFetch();
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const validate = values => {
    const errors = {};
    if (!values.password) {
      errors.password = 'Required';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: async values => {
      fetchData('post', `http://challenge-react.alkemy.org/`, setCurrentUser, {
        email: values.email,
        password: values.password,
      });
    },
  });

  return (
    <Box
      w={{ base: '300px', sm: '300px', md: '400px' }}
      margin="auto"
      border="1px"
      borderColor="gray.300"
      p="30px"
      borderRadius="10px"
      mt="5%"
      mb="30px"
    >
      <Heading textAlign="center" mt="10px">
        Bienvenido
      </Heading>
      <Text color="red" textAlign="center" mb="5px">
        {error}
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <FormControl mb="10px">
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input
            name="email"
            type="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <FormErrorMessage mb="5px">{formik?.errors?.email}</FormErrorMessage>
        </FormControl>

        <FormControl mb="10px">
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <InputGroup display="block">
            <Input
              name="password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <InputRightElement width="3rem">
              <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage mb="5px">
            {formik?.errors?.password}
          </FormErrorMessage>
        </FormControl>

        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          width="full"
          boxShadow="lg"
          disabled={loading || !formik.values.email || !formik.values.password}
        >
          Iniciar sesión
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
