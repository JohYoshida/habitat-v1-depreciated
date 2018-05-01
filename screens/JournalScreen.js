import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

import EntryList from "../components/journal/EntryList";

import DB from "../DB.js";
var DBEvents = require("react-native-db-models").DBEvents;

export default class JournalScreen extends React.Component {
  static navigationOptions = {
    title: "Journal"
  };

  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
  }

  componentDidMount() {
    this._getEntries();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entries}>
          <ScrollView>
            <EntryList
              getEntries={this._getEntries.bind(this)}
              entries={this.state.entries}
            />
          </ScrollView>
        </View>
        <View style={styles.buttons}>
          <Button
            onPress={() =>
              this.props.navigation.navigate("AddJournalEntry", {
                getEntries: this._getEntries.bind(this)
              })
            }
            title="Create Journal Entry"
          />
        </View>
      </View>
    );
  }

  _getEntries() {
    DB.journalEntry.get_all(results => {
      let entries = [];
      for (i in results.rows) {
        entries.push(results.rows[i]);
      }
      this.setState({ entries });
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    justifyContent: "flex-end"
  },
  entries: {
    flex: 10
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});
