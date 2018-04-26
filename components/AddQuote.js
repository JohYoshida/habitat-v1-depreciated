import React , { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class AddQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      author: "",
    };
  }

  render() {
    if (this.props.toggle) {
      return (
        <View>
          <Text>Quote</Text>
          <TextInput
            onChangeText={(text) => this.setState({text})}
            placeholder="hell yea"
          />
          <Text>Author</Text>
          <TextInput
            onChangeText={(author) => this.setState({author})}
            placeholder="me"
          />
          <Button
            onPress={this._addQuoteButton.bind(this)}
            title="Add Quote"
          />
        </View>
      );
    } else {
      return <View></View>;
    }
  }

  _addQuoteButton() {
    DB.quotes.add({
      text: this.state.text,
      author: this.state.author
     }, (addedData) => {
      alert("Quote added.");
    });
  }
}

export default AddQuote;
