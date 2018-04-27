import React , { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import EditQuote from "./EditQuote";

import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class QuoteButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    if (this.props.show) {
      return (
        <View>
          <Button
            title="Edit"
            onPress={this.props.editQuote}
          />
          <EditQuote
            show={this.props.showEditor}
            text={this.props.text}
            author={this.props.author}
            source={this.props.source}
            id={this.props.id}
          />
          <Button
            title="Delete"
            onPress={this.props.deleteQuote}
            color="#f00"
          />
        </View>
      );
    } else {
      return <View></View>;
    }
  }
}

export default QuoteButtons;
