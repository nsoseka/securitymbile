import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../screens/Home';
import Background from '../screens/Background';
import Search from '../screens/Search';


const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    Search: {
      screen: Search,
      navigationOptions: ({ navigation }) => ({
        headerTitle: `Searching for '${navigation.state.params.query}'`,
        headerLeft: null,
      }),
    },
    Background: {
      screen: Background,
      navigationOptions: {
        headerTitle: 'Background History',
      },
    },
  }, {
    headerMode: 'screen',
  },
);


const prevGetStateForAction = HomeStack.router.getStateForAction;

HomeStack.router = {
  ...HomeStack.router,
  getStateForAction(action, state) {
    if (state && action.type === 'ReplaceCurrentScreen') {
      const routes = state.routes.slice(0, state.routes.length - 1);
      routes.push(action);
      return {
        ...state,
        routes,
        index: routes.length - 1,
      };
    }
    return prevGetStateForAction(action, state);
  }
};


// const BackgroundStack = StackNavigator(
//   {
//     Background: {
//       screen: Background,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: navigation.state.params.title
//       }),
//     },
//   }
// );



// Background: {
//   screen: BackgroundStack,
// },

export default StackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
  }, {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none',
  },
);



