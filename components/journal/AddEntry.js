import React, { Component } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import moment from "moment";

import DB from "../../DB.js";
var DBEvents = require("react-native-db-models").DBEvents;

class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bold}>Title</Text>
        <TextInput
          onChangeText={title => this.setState({ title })}
          placeholder="Journal Entry"
          autoCapitalize="words"
        />
        <Text style={styles.bold}>Body</Text>
        <TextInput
          onChangeText={body => this.setState({ body })}
          placeholder="Captain's log, Stardate..."
          multiline={true}
        />
        <Button onPress={this._addEntryButton.bind(this)} title="Add Entry" />
      </View>
    );
  }

  _addEntryButton() {
    const { title, body } = this.state;
    const createdAt = moment().format("MMMM Do YYYY, h:mm a");
    DB.journalEntry.add({ title, body, createdAt }, () => {
      this.props.getEntries();
      alert("Entry added.");
      this.props.goBack();
    });
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
  bold: {
    fontWeight: "bold"
  }
});

export default AddEntry;
