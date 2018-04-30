import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import AddHabit from '../components/habits/AddHabit.js';

export default class HabitsScreen extends React.Component {
  static navigationOptions = {
    title: 'Habits',
  };
  constructor(props) {
    super(props);
    this.state = {
      isDatePickerVisible: false,
      showAddHabit: false,
    };
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  _toggleAddHabit() {
    if (this.state.showAddHabit) {
      this.setState({ showAddHabit: false, });
    } else {
      this.setState({ showAddHabit: true, });
    }
  }

  render () {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate("AddHabit")}
          title="Add New Habit"
        />
        <AddHabit toggle={this.state.showAddHabit} />
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          mode="time"
          is24Hour={false}
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
}
