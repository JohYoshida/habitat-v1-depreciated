import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import HabitList from "../components/habits/HabitList";

import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

export default class HabitsScreen extends React.Component {
  static navigationOptions = {
    title: "Habits"
  };
  constructor(props) {
    super(props);
    this.state = {
      habits: [],
    };
  }

  componentDidMount() {
    this._getHabits();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.habits}>
          <ScrollView>
            <HabitList
              getHabits={this._getHabits.bind(this)}
              habits={this.state.habits}
            />
          </ScrollView>
        </View>
        <View style={styles.buttons}>
          <Button
            onPress={() => this.props.navigation.navigate("AddHabit", {
              getHabits: this._getHabits.bind(this)
            })}
            title="Add New Habit"
            />
          </View>
      </View>
    );
  }

  _getHabits() {
    DB.habits.get_all(results => {
      let habits = [];
      for (i in results.rows) {
        habits.push(results.rows[i]);
      }
      this.setState({ habits });
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    justifyContent: "flex-end"
  },
  habits: {
    flex: 10
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});
