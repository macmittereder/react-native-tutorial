import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

class List extends Component {
  state = {
    names: [
      {
        id: 0,
        name: 'Text Examples',
        path: 'TextScreen',
      },
      {
        id: 1,
        name: 'Style Examples',
        path: 'StyleScreen',
      },
      {
        id: 2,
        name: 'Button Examples',
        path: 'ButtonScreen',
      },
    ],
  };

  static navigationOptions = {
    title: 'Main Page',
  };

  openView = path => {
    this.props.navigation.navigate(path);
  };

  render() {
    return (
      <View>
        {this.state.names.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.listContainer}
            onPress={() => this.openView(item.path)}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default List;

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});
