import {createStackNavigator, createAppContainer} from 'react-navigation';
import MasterScreen from './Screens/MasterScreen';

const MainNavigator = createStackNavigator({
  Master: {screen: MasterScreen},
});
const App = createAppContainer(MainNavigator);

export default App;
