import React , { Component } from 'react';
import { Button, View } from 'react-native';

import EditHabit from "./EditHabit";
import DeleteHabit from "./DeleteHabit";

class HabitButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    if (this.props.show) {
      return (
        <View>
          <Button
            title="Edit"
            onPress={this.props.editHabit}
          />
          <EditHabit
            show={this.props.showEditor}
            habit={this.props.habit}
            editHabit={this.props.editHabit}
            submitEdits={this.props.submitEdits}
            getHabits={this.props.getHabits}
            toggleButtons={this.props.toggleButtons}
          />
          <DeleteHabit
            confirmed={this.props.confirmed}
            confirmDelete={this.props.confirmDelete}
            deleteHabit={this.props.deleteHabit}
          />
        </View>
      );
    } else {
      return <View></View>;
    }
  }
}

export default HabitButtons;
