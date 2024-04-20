import { useState } from 'react';

import { useRequest } from './useRequest';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { authRequest, errorMessage, setErrorMessage, loading } = useRequest();
  const handleOnPress = async () => {
    try {
      authRequest({ email, password });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    setEmail,
    setPassword,
    setErrorMessage,
  };
};
