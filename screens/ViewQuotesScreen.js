import React from 'react';
import {Button, View, Text} from 'react-native';

import QuoteList from "../components/QuoteList";
import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

export default class ViewQuotesScreen extends React.Component {
  static navigationOptions = {
    title: 'View Quotes',
  };

  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
    };
  }

  componentDidMount() {
    // Will run every time "View Quotes" button on QuotesScreen is pressed.
    DB.quotes.get_all(results => {
      let quotes = [];
      for (i in results.rows) {
        quotes.push(results.rows[i])
      }
      this.setState({ quotes });
    });
  }

  render() {
    return (
      <View>
        <QuoteList quotes={this.state.quotes} />
      </View>
    )
  }
}
