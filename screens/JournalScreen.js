import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import EntryList from "../components/journal/EntryList";

export default class JournalScreen extends React.Component {
  static navigationOptions = {
    title: 'Journal',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entries}>
          <EntryList />
        </View>
        <View style={styles.buttons}>
          <Button
            onPress={() => this.props.navigation.navigate("AddJournalEntry")}
            title="Create Journal Entry"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    justifyContent: "flex-end",
  },
  entries: {
    flex: 10,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
});
