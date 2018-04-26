import React , { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class AddQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInputs: false,
      quoteInput: "",
      authorInput: "",
    };
  }

  render() {
    if (this.props.showInputs) {
      return (
        <View>
          <Text>Quote</Text>
          <TextInput
            onChangeText={(quoteInput) => this.setState({quoteInput})}
            placeholder="hell yea"
          />
          <Text>Author</Text>
          <TextInput
            onChangeText={(authorInput) => this.setState({authorInput})}
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
    DB.quotes.add({ text: this.state.quoteInput, author: this.state.authorInput }, (addedData) => {
      alert(addedData.text, addedData.author);
      console.log(addedData);
    });
  }
}

export default AddQuote;
