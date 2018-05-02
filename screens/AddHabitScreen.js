import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';

import AddHabit from "../components/habits/AddHabit";

import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

export default class AddHabitScreen extends React.Component {
  static navigationOptions = {
    title: 'Create Habit',
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <AddHabit getHabits={params.getHabits} />
      </View>
    )
  }
}
