import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

class List extends Component {
  state = {
    names: [
      {
        id: 0,
        name: 'First',
        path: 'First',
      },
      {
        id: 1,
        name: 'Second',
        path: 'Second',
      },
      {
        id: 2,
        name: 'Third',
        path: 'Third',
      },
    ],
  };

  static navigationOptions = {
    title: 'Main Page',
  };

  render() {
    return (
      <View>
        {this.state.names.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.listContainer}
            onPress={() => alert(item.name)}>
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
