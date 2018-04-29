import React , { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import moment from 'moment';

import DB from "../../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  render() {
    return (
      <View>
        <Text>Title</Text>
        <TextInput
          onChangeText={(title) => this.setState({title})}
          placeholder="Journal Entry"
          autoCapitalize="words"
        />
      <Text>Body</Text>
        <TextInput
          onChangeText={(body) => this.setState({body})}
          placeholder="Captain's log, Stardate..."
          multiline={true}
        />
        <Button
          onPress={this._addEntryButton.bind(this)}
          title="Add Entry"
        />
      </View>
    );
  }

  _addEntryButton() {
    const { title, body } = this.state;
    const createdAt = moment().format("MMMM Do YYYY, h:mm a");
    DB.journalEntry.add({ title, body, createdAt }, (addedData) => {
      alert("Entry added.");
    });
  }
}

export default AddEntry;
