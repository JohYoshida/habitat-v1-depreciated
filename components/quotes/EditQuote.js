import React, { Component } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import DB from "../../DB.js";
var DBEvents = require("react-native-db-models").DBEvents;

class EditQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
      author: null,
      source: null
    };
  }

  render() {
    if (this.props.show) {
      const { text, author, source } = this.props.quote;
      return (
        <View style={styles.container}>
          <Text style={styles.bold}>Quote</Text>
          <TextInput
            onChangeText={text => this.setState({ text })}
            defaultValue={text}
            multiline={true}
          />
          <Text style={styles.bold}>Author</Text>
          <TextInput
            onChangeText={author => this.setState({ author })}
            defaultValue={author}
          />
          <Text style={styles.bold}>Source</Text>
          <TextInput
            onChangeText={source => this.setState({ source })}
            defaultValue={source}
          />
          <Button onPress={this._editQuote.bind(this)} title="Submit Edits" />
        </View>
      );
    } else {
      return <View />;
    }
  }

  _editQuote() {
    let { text, author, source, key } = this.props.quote;
    if (this.state.text) {
      text = this.state.text;
    }
    if (this.state.author) {
      author = this.state.author;
    }
    if (this.state.source) {
      source = this.state.source;
    }
    DB.quotes.update_id(key, { text, author, source }, addedData => {
      alert("Quote updated.");
      this.props.toggleButtons();
      this.props.getQuotes();
    });
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  bold: {
    fontWeight: "bold"
  }
});

export default EditQuote;
