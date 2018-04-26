import React , { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class EditQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
      author: null,
    };
  }

  render() {
    if (this.props.show) {
      return (
        <View style={styles.container}>
          <Text>Quote</Text>
          <TextInput
            onChangeText={(text) => this.setState({text})}
            defaultValue={this.props.text}
          />
          <Text>Author</Text>
          <TextInput
            onChangeText={(author) => this.setState({author})}
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
    if (this.state.text) {
      text = this.state.text
    }
    let author = this.props.author;
    if (this.state.author) {
      author = this.state.author;
    }
    DB.quotes.update_id(this.props.id, { text, author }, (addedData) => {
      alert("Quote updated.");
    });
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 140,
  },
});

export default EditQuote;
