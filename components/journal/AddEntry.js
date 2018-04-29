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
      <View>
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
    DB.journalEntry.add({ title, body, createdAt }, addedData => {
      this.props.getEntries();
      alert("Entry added.");
    });
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold"
  }
});

export default AddEntry;
