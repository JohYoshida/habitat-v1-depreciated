import React , { Component } from 'react';
import { Button, Picker, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

import DB from "../../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class AddHabit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      notifyAt: "",
      repeat: "never",
      isDateTimePickerVisible: false,
    };
  }

  componentDidMount() {
    const notifyAt = moment().format("h:mm a");
    this.setState({ notifyAt });
  }

  render() {
    return (
      <View>
        <Text style={styles.bold}>Habit</Text>
        <TextInput
          onChangeText={(name) => this.setState({name})}
        />
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text style={styles.bold}>Notify at </Text>
          <Text>{this.state.notifyAt}</Text>
        </TouchableOpacity>
        <DateTimePicker
          mode="time"
          is24Hour={false}
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
        <Text style={styles.bold}>Repeat</Text>
        <Picker
          selectedValue={this.state.repeat}
          onValueChange={(itemValue, itemIndex) => this.setState({repeat: itemValue})}>
          <Picker.Item label="Never" value="never" />
          <Picker.Item label="Every Day" value="day" />
          <Picker.Item label="Every Week" value="week" />
        </Picker>
        <Button
          onPress={this._addHabitButton.bind(this)}
          title="Add Habit"
        />
      </View>
    );
  }

  _addHabitButton() {
    const { name, notifyAt, repeat } = this.state;
    DB.habits.add({ name, notifyAt, repeat }, () => {
      alert("Habit added.");
      this.props.getHabits();
    });
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    const notifyAt = moment(date).format("h:mm a");
    this.setState({ notifyAt });
    this._hideDateTimePicker();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  bold: {
    fontWeight: "bold",
  },
  notifyAt: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default AddHabit;
