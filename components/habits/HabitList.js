import React , { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import HabitListItem from "./HabitListItem";

class HabitList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const habits = [];
    if (this.props.habits) {
      this.props.habits.forEach(item => {
        habits.push({
          name: item.name,
          notifyAt: item.notifyAt,
          repeat: item.repeat,
          key: item._id.toString()
        });
      });
    }

    return (
      <FlatList
        data={habits}
        extraData={this.state}
        renderItem={this._renderItem}
        itemSeparatorComponent={this._renderSeparator}
      />
    );
  }

  _renderItem = ({item}) => (
    <HabitListItem
      id={item.key}
      habit={item}
      getHabits={this.props.getHabits}
    />
  );

  _renderSeparator = () => {
    return <View style={styles.separator}/>;
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "86%",
    backgroundColor: "#CED0CE",
  },
});

export default HabitList;
