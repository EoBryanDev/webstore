import { useState } from 'react';

import { useRequest } from './useRequest';

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { authRequest, errorMessage, setErrorMessage, loading, user } = useRequest();
  const handleOnPress = async () => {
    authRequest({ email, password });
    console.log(user);
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
