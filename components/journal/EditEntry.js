import React, { Component } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import moment from "moment";

import DB from "../../DB.js";
var DBEvents = require("react-native-db-models").DBEvents;

class EditEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      body: null
    };
  }

  render() {
    if (this.props.show) {
      const { title, body } = this.props.entry;
      return (
        <View style={styles.container}>
          <Text style={styles.bold}>Title</Text>
          <TextInput
            onChangeText={title => this.setState({ title })}
            defaultValue={title}
            autoCapitalize="words"
          />
          <Text style={styles.bold}>Body</Text>
          <TextInput
            onChangeText={body => this.setState({ body })}
            defaultValue={body}
            multiline={true}
          />
          <Button onPress={this._editEntry.bind(this)} title="Submit Edits" />
        </View>
      );
    } else {
      return <View />;
    }
  }

  _editEntry() {
    let { title, body, key } = this.props.entry;
    if (this.state.title) {
      title = this.state.title;
    }
    if (this.state.body) {
      body = this.state.body;
    }
    const updatedAt = moment().format("MMMM Do YYYY, h:mm a");
    DB.journalEntry.update_id(key, { title, body, updatedAt }, addedData => {
      alert("Entry updated.");
      this.props.toggleButtons();
      this.props.editEntry();
      this.props.getEntries();
    });
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 140
  },
  bold: {
    fontWeight: "bold"
  }
});

export default EditEntry;
