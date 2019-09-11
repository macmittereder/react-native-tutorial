import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MasterScreen from './Screens/MasterScreen';
import TextScreen from './Screens/Text';

const MainNavigator = createStackNavigator({
  Master: {screen: MasterScreen},
  TextScreen: {screen: TextScreen},
});
const App = createAppContainer(MainNavigator);

export default App;
