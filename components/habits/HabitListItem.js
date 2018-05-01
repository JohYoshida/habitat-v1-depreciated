import React , { PureComponent } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import HabitButtons from "./HabitButtons";

import DB from "../../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class HabitListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showButtons: false,
      showEditor: false,
      confirmed: false,
    };
  }

  render() {
    const { name, notifyAt, repeat, key } = this.props.habit;
    return (
      <View>
        <TouchableOpacity
          style={styles.habitSectioin}
          onPress={this._toggleButtons.bind(this)}
        >
          <Text style={styles.bold}>{name}</Text>
          <Text style={styles.italic}>{notifyAt}</Text>
          <Text style={styles.italic}>{repeat}</Text>
        </TouchableOpacity>
        <HabitButtons
          show={this.state.showButtons}
          confirmed={this.state.confirmed}
          showEditor={this.state.showEditor}
          habit={this.props.habit}
          getHabits={this.props.getHabits}
          editHabit={this._editHabit.bind(this)}
          deleteHabit={this._deleteHabit.bind(this, key)}
          confirmDelete={this._confirmDelete.bind(this)}
          toggleButtons={this._toggleButtons.bind(this)}
        />
      </View>
    );
  }

  _editHabit(key) {
    if (this.state.showEditor) {
      this.setState({ showEditor: false, confirmed: false });
    } else {
      this.setState({ showEditor: true, confirmed: false });
    }
  }

  _confirmDelete() {
    this.setState({ confirmed: true });
  }

  _deleteHabit(key) {
    DB.habits.remove_id(key, () => {
      alert("Deleted!");
      this.props.getHabits();
      this.setState({ confirmed: false });
    });
  }

  _toggleButtons() {
    if (this.state.showButtons) {
      this.setState({ showButtons: false, confirmed: false, showEditor: false });
    } else {
      this.setState({ showButtons: true, confirmed: false });
    }
  }
}

const styles = StyleSheet.create({
  habitSectioin: {
    margin: 10,
    marginTop: 0,
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
});

export default HabitListItem;
