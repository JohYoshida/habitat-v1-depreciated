import React, { Component } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import DB from "../../DB.js";
var DBEvents = require("react-native-db-models").DBEvents;

class AddQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
      text: "",
      author: "",
      source: ""
    };
  }

  componentDidMount() {
    DB.quotes.get_all(results => {
      let arr = [];
      for (item in results.rows) {
        arr.push(results.rows[item]);
      }
      const index = Math.floor(Math.random() * arr.length);
      const quote = arr[index];
      this.setState({ quote });
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.bold}>Quote</Text>
        <TextInput
          onChangeText={text => this.setState({ text })}
          placeholder={this.state.quote.text}
          multiline={true}
        />
        <Text style={styles.bold}>Author</Text>
        <TextInput
          onChangeText={author => this.setState({ author })}
          placeholder={this.state.quote.author}
          autoCapitalize="words"
        />
        <Text style={styles.bold}>Source</Text>
        <TextInput
          onChangeText={source => this.setState({ source })}
          placeholder={this.state.quote.source}
          autoCapitalize="words"
        />
        <Button onPress={this._addQuoteButton.bind(this)} title="Add Quote" />
      </View>
    );
  }

  _addQuoteButton() {
    DB.quotes.add(
      {
        text: this.state.text,
        author: this.state.author,
        source: this.state.source
      },
      addedData => {
        alert("Quote added.");
      }
    );
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold"
  }
});

export default AddQuote;
