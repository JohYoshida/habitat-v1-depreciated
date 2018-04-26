import React , { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class EditQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteInput: null,
      authorInput: null,
    };
  }

  render() {
    if (this.props.show) {
      return (
        <View>
          <Text>Quote</Text>
          <TextInput
            onChangeText={(quoteInput) => this.setState({quoteInput})}
            defaultValue={this.props.text}
          />
          <Text>Author</Text>
          <TextInput
            onChangeText={(authorInput) => this.setState({authorInput})}
            defaultValue={this.props.author}
          />
          <Button
            onPress={this._editQuote.bind(this)}
            title="Submit Edits"
          />
        </View>
      );
    } else {
      return <View></View>;
    }
  }

  _editQuote() {
    let text = this.props.text;
    if (this.state.quoteInput) {
      text = this.state.quoteInput
    }
    let author = this.props.author;
    if (this.state.authorInput) {
      author = this.state.authorInput;
    }
    DB.quotes.update_id(this.props.id, { text, author }, (addedData) => {
      alert("Quote updated");
    });
  }
}

export default EditQuote;
