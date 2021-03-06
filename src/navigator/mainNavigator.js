import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen212638Navigator from '../features/BlankScreen212638/navigator';
import BlankScreen112637Navigator from '../features/BlankScreen112637/navigator';
import BlankScreen012636Navigator from '../features/BlankScreen012636/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen212638: { screen: BlankScreen212638Navigator },
BlankScreen112637: { screen: BlankScreen112637Navigator },
BlankScreen012636: { screen: BlankScreen012636Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
