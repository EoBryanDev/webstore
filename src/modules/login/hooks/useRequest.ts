import { useState } from 'react';

import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';
import { IRequestLogin } from '../../../shared/types/requestLogin';
import { IReturnLogin } from '../../../shared/types/returnLogin';
import { TUserType } from '../../../shared/types/userType';

export const useRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [user, setUser] = useState<TUserType | undefined>();

  const authRequest = async (body: IRequestLogin) => {
    setLoading(true);
    try {
      // testando axios no projeto pode ser que o ip mude !! cuidado
      // console.log(body);
      const response = await connectionAPIPost<IReturnLogin>('http://192.168.0.14:8080/auth', body);

      setUser(response.user);
    } catch (error) {
      setErrorMessage('E-mail or Password is incorrect!');
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    errorMessage,
    setErrorMessage,
    authRequest,
  };
};