import axios from 'axios';
import { useState } from 'react';

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const handleOnPress = async () => {
    // console.log('clicked');
    setLoading(true);
    try {
      // testando axios no projeto
      const resp = await axios.post('http://192.168.0.17:8080/auth', { email, password });
      console.log(resp.data);
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
