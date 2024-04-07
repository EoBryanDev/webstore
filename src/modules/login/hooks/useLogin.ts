import { useState } from 'react';

import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const handleOnPress = async () => {
    // console.log('clicked');
    setLoading(true);
    try {
      // testando axios no projeto pode ser que o ip mude !! cuidado
      await connectionAPIPost('http://192.168.0.14:8080/auth', { email, password });
    } catch (error) {
      setErrorMessage('E-mail or Password is incorrect!');
      console.log(error);
    } finally {
      setLoading(false);
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
