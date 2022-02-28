import {selectToken} from '../slices';
import {RootScreens} from '../utils';

export const useInitialRouteName = (): RootScreens => {
  const authKey = selectToken();

  if (authKey) return RootScreens.home;
  else return RootScreens.login;
};
