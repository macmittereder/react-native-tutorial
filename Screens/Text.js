import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class TextScreen extends Component {
  static navigationOptions = {
    title: 'Text Examples Page',
  };

  render() {
    return (
      <View>
        <Text>Basic Text</Text>
        <Text style={{backgroundColor: '#444', color:'#fff'}}>Different Background Color Text</Text>
        <Text style={{fontSize: 24}}>Font Size</Text>
        <Text style={{margin:10}}>Cool Margin</Text>
        <Text style={{textAlign:'right'}}>Right Justified</Text>
      </View>
    );
  }
}

export default TextScreen;
