import { useEffect } from 'react';
import { useRequest } from '../../login/hooks/useRequest';
import { ContainerSplash, ImageLogoSplash } from '../styles/splash.style';
import { useNavigation } from '../../../../react-navigation';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';
import { URL_USER } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/methods.enum';
import { MenuUrl } from '../../../shared/enums/MenuUrl.enum';
import { getAuthorizationToken } from '../../../shared/functions/connection/auth';

const Splash = () => {
  const { reset } = useNavigation();
  const { request } = useRequest();
  const { setUser } = useUserReducer();

  useEffect(() => {
    const findUser = async () => {
      let returnUser = undefined;
      const token = await getAuthorizationToken();
      if (token) {
        returnUser = await request({
          url: URL_USER,
          method: MethodEnum.GET,
          saveGlobal: setUser,
        });
      }
      return returnUser;
    };

    const verifyLogin = async () => {
      const [returnUser] = await Promise.all([
        findUser(),
        new Promise<void>((r) => setTimeout(r, 5000)),
      ]);
      if (returnUser) {
        reset({
          index: 0,
          routes: [{ name: MenuUrl.HOME }],
        });
      } else {
        reset({
          index: 0,
          routes: [{ name: MenuUrl.LOGIN }],
        });
      }
    };

    verifyLogin();
  }, []);
  return (
    <ContainerSplash>
      <ImageLogoSplash resizeMode="contain" source={require('../../../assets/images/logo.png')} />
    </ContainerSplash>
  );
};

export default Splash;
