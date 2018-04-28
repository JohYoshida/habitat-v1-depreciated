import React , { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import EditQuote from "./EditQuote";
import DeleteQuote from "./DeleteQuote";

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
            quote={this.props.quote}
            submitEdits={this.props.submitEdits}
            getQuotes={this.props.getQuotes}
            toggleButtons={this.props.toggleButtons}
          />
        <DeleteQuote
          confirmed={this.props.confirmed}
          confirmDelete={this.props.confirmDelete}
          deleteQuote={this.props.deleteQuote}
        />
        </View>
      );
    } else {
      return <View></View>;
    }
  }
}

export default QuoteButtons;
