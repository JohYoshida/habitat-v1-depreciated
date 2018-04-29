import React from "react";
import { Button, View, Text } from "react-native";

import QuoteList from "../components/quotes/QuoteList";

import DB from "../DB.js";
var DBEvents = require("react-native-db-models").DBEvents;

export default class ViewQuotesScreen extends React.Component {
  static navigationOptions = {
    title: "View Quotes"
  };

  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  componentDidMount() {
    // Will run every time "View Quotes" button on QuotesScreen is pressed.
    this._getQuotes();
  }

  render() {
    return (
      <View>
        <QuoteList
          quotes={this.state.quotes}
          getQuotes={this._getQuotes.bind(this)}
        />
      </View>
    );
  }

  _getQuotes() {
    DB.quotes.get_all(results => {
      let quotes = [];
      for (i in results.rows) {
        quotes.push(results.rows[i]);
      }
      this.setState({ quotes });
    });
  }
}
