import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MasterScreen from './Screens/MasterScreen';
import TextScreen from './Screens/Text';
import StyleScreen from './Screens/Styles';
import ButtonScreen from './Screens/Buttons';

const MainNavigator = createStackNavigator({
  Master: {screen: MasterScreen},
  TextScreen: {screen: TextScreen},
  StyleScreen: {screen: StyleScreen},
  ButtonScreen: {screen: ButtonScreen},
});
const App = createAppContainer(MainNavigator);

export default App;
