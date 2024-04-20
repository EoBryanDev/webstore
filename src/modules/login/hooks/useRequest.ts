import { useState } from 'react';

import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';
import { IRequestLogin } from '../../../shared/types/requestLogin';
import { IReturnLogin } from '../../../shared/types/returnLogin';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../../../shared/enums/MenuUrl.enum';
import { setAuthorizationToken } from '../../../shared/functions/connection/auth';

export const useRequest = () => {
  const { reset } = useNavigation();
  const { setUser } = useUserReducer();
  const { setModal } = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  // const [user, setUser] = useState<TUserType | undefined>();

  const authRequest = async (body: IRequestLogin) => {
    setLoading(true);
    try {
      // testando axios no projeto pode ser que o ip mude !! cuidado
      // console.log(body);
      const response = await connectionAPIPost<IReturnLogin>('http://192.168.0.14:8080/auth', body);
      setAuthorizationToken(response.accessToken);
      setUser(response.user);
      reset({
        index: 0,
        routes: [{ name: MenuUrl.HOME }],
      });
    } catch (error) {
      setModal({ visible: true, title: 'Error', text: 'User or password is invalid!' });
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
