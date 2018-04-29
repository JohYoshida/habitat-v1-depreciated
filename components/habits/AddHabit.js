import React , { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

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
    if (this.props.toggle) {
      return (
        <View>
          <Text>Habit</Text>
          <TextInput
            onChangeText={(name) => this.setState({name})}
          />
        </View>
      );
    } else {
      return <View></View>;
    }
  }
}

export default AddHabit;
