import {RootScreens} from '../utils';
import {useAppSelector} from '.';

export const useInitialRouteName = (): RootScreens => {
  const authKey = useAppSelector(state => state.user.token);

  if (authKey) return RootScreens.home;
  else return RootScreens.login;
};
