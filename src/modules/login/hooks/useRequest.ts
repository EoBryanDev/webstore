import { useState } from 'react';

import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';
import { IRequestLogin } from '../../../shared/types/requestLogin';
import { IReturnLogin } from '../../../shared/types/returnLogin';
import { TUserType } from '../../../shared/types/userType';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../../store/reducers/userReducer';

export const useRequest = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  // const [user, setUser] = useState<TUserType | undefined>();

  const authRequest = async (body: IRequestLogin) => {
    setLoading(true);
    try {
      // testando axios no projeto pode ser que o ip mude !! cuidado
      // console.log(body);
      const response = await connectionAPIPost<IReturnLogin>('http://192.168.0.14:8080/auth', body);

      dispatch(setUserAction(response.user));
    } catch (error) {
      setErrorMessage('E-mail or Password is incorrect!');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    errorMessage,
    setErrorMessage,
    authRequest,
  };
};
