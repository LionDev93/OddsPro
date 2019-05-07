import React from 'react';
import { Root } from 'native-base';

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import LoadingScreen from './Loading';
import LandingScreen from './landing';
import FirstScreen from './first';
import OddsScreen from './odd'
import ProfileScreen from './profile';
import AllOddsScreen from './allOdds';
import DragDropTest from '../example';

const AuthNavigator = createStackNavigator(
  {
    landing: {
      screen: LandingScreen
    },
    
  },
  {
    headerMode: 'none',
    initialRouteName: 'landing'
  }
);

const MainStackNavigator = createStackNavigator(
  {
    first: FirstScreen,
    odd: OddsScreen,
    profile: ProfileScreen,
    all: AllOddsScreen,
    test: DragDropTest
  },
  {
    initialRouteName: 'first',
    headerMode: 'none'
  }
);

const AppNavigator = createSwitchNavigator(
  {
    loading: LoadingScreen,
    auth: AuthNavigator,
    app: MainStackNavigator
  },
  {
    initialRouteName: 'loading'
  }
);

export default createAppContainer(AppNavigator);
