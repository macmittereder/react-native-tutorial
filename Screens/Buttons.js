import React, {Component} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export class ButtonScreen extends Component {
  static navigationOptions = {
    title: 'Buttons Examples Page',
  };

  render() {
    return (
      <View>
        <Button title="Cool Button" />
        <Button title="Clear Button" type="clear" />
        <Button title="Outline Button" type="outline" />
        <Button
          title="Awesome Icon"
          icon={<Icon name="arrow-right" size={20} color="white" />}
        />
      </View>
    );
  }
}

export default ButtonScreen;
