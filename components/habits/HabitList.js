import React , { Component } from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';

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
        ItemSeparatorComponent={this._renderSeparator}
        ListEmptyComponent={this._renderEmpty}
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

  _renderEmpty = () => {
    return (
      <View style={styles.container}>
        <Text>Habits you add will appear here.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#CED0CE",
  },
});

export default HabitList;
