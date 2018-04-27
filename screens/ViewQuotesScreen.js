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
      quotesArr: [],
    };
  }

  componentDidMount() {
    DB.quotes.get_all(results => {
      let arr = [];
      for (item in results.rows) {
        arr.push(results.rows[item]);
      }
      this.setState({
        quotesArr: arr,
      });
    });
  }

  render() {
    // DB.quotes.get_all(results => {
    //   let arr = [];
    //   for (item in results.rows) {
    //     arr.push(results.rows[item]);
    //   }
    //   this.setState({
    //     quotesArr: arr,
    //   });
    // });

    return (
      <View>
        <QuoteList arr={this.state.quotesArr} />
      </View>
    )
  }
}
