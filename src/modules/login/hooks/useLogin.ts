import { useState } from 'react';

import { useRequest } from './useRequest';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export const useLogin = () => {
  const user = useSelector((state: RootState) => state.userReducer.user)
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { authRequest, errorMessage, setErrorMessage, loading } = useRequest();
  const handleOnPress = async () => {
    try {
      
      authRequest({ email, password });
      console.log(user);
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
