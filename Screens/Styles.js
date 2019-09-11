import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class StylesScreen extends Component {
  static navigationOptions = {
    title: 'Style Examples Page',
  };

  render() {
    return (
      <View>
        <Text>Basic Text</Text>
        <Text style={styles.firstText}>Different Background Color Text</Text>
        <Text style={styles.secondText}>Font Size</Text>
        <Text style={styles.thirdText}>Cool Margin</Text>
        <Text style={styles.fourthText}>Right Justified</Text>
      </View>
    );
  }
}

export default StylesScreen;

const styles = StyleSheet.create({
  firstText: {
    backgroundColor: '#444',
    color: '#fff',
  },
  secondText: {
    fontSize: 24,
    color: '#890fff',
  },
  thirdText: {
    fontSize: 36,
    margin: 10,
  },
  fourthText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
