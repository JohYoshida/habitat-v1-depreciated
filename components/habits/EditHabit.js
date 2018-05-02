import React , { Component } from 'react';
import { Button, Picker, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

import DB from "../../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class EditHabit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      notifyAt: null,
      repeat: null,
      isDateTimePickerVisible: false
    };
  }

  render() {
    if (this.props.show) {
      const { name, notifyAt, repeat } = this.props.habit;
      return (
        <View style={styles.container}>
          <Text style={styles.bold} >Title</Text>
          <TextInput
            onChangeText={(name) => this.setState({name})}
            defaultValue={name}
            autoCapitalize="words"
          />
          <TouchableOpacity onPress={this._showDateTimePicker}>
            <Text style={styles.bold}>Notify at</Text>
            <Text>{ this.state.notifyAt ? this.state.notifyAt : notifyAt }</Text>
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
            selectedValue={this.state.repeat ? this.state.repeat : repeat}
            onValueChange={(itemValue, itemIndex) => this.setState({repeat: itemValue})}>
            <Picker.Item label="Never" value="never" />
            <Picker.Item label="Every Day" value="day" />
            <Picker.Item label="Every Week" value="week" />
          </Picker>
          <Button
            onPress={this._editHabit.bind(this)}
            title="Submit Edits"
          />
        </View>
      );
    } else {
      return <View></View>;
    }
  }

  _editHabit() {
    let { name, notifyAt, repeat, key } = this.props.habit;
    if (this.state.name) {
      name = this.state.name;
    }
    if (this.state.notifyAt) {
      notifyAt = this.state.notifyAt;
    }
    if (this.state.repeat) {
      repeat = this.state.repeat;
    }
    DB.habits.update_id(key, { name, notifyAt, repeat }, () => {
      alert("Habit updated.");
      this.props.toggleButtons();
      this.props.editHabit();
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
    margin: 5,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default EditHabit;
