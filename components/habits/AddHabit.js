import React , { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import DB from "../../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class AddHabit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.bold}>Habit</Text>
        <TextInput
          onChangeText={(name) => this.setState({name})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
});

export default AddHabit;
