import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MasterScreen from './Screens/MasterScreen';
import TextScreen from './Screens/Text';
import StyleScreen from './Screens/Styles';

const MainNavigator = createStackNavigator({
  Master: {screen: MasterScreen},
  TextScreen: {screen: TextScreen},
  StyleScreen: {screen: StyleScreen},
});
const App = createAppContainer(MainNavigator);

export default App;
