import React, {FC} from 'react';
import {HomeHeader} from '../components';
import {useDispatch} from 'react-redux';
import {TopTabNav} from '../navigator/topTabNavigation';
import {useNavigation} from '@react-navigation/native';
import {setToken} from '../slices';

export const HomeScreenHOC: FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <>
      <HomeHeader
        onPress={() => {
          dispatch(setToken(''));
          navigation.reset({
            index: 0,
            routes: [{name: 'login' as never}],
          });
        }}
      />
      <TopTabNav />
    </>
  );
};
