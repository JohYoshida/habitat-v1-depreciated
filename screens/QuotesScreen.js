import React from "react";
import { Button, View, SectionList, ScrollView, StyleSheet, Text, } from "react-native";
import AddQuote from "../components/AddQuote.js"
import Quote from "../components/Quote.js"
import QuoteButton from "../components/QuoteButton.js"
import QuoteList from "../components/QuoteList.js"
import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

export default class QuotesScreen extends React.Component {
  static navigationOptions = {
    // title: 'Quotes',
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      toggleButtonText: "Add Quote",
      viewQuotesButtonText: "View All Quotes",
      toggle: false,
      showQuoteList: false,
      quotesArr: [],
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Button
            onPress={this._toggle.bind(this)}
            title={this.state.toggleButtonText}
            color="#1c8613"
          />
          <AddQuote
            toggle={this.state.toggle}
          />
          <Quote
            toggle={this.state.toggle}
          />
        </View>
        <View>
          <Button
            title={this.state.viewQuotesButtonText}
            onPress={this._toggleQuoteList.bind(this)}
          />
          <QuoteList show={this.state.showQuoteList} arr={this.state.quotesArr}/>
        </View>
      </ScrollView>
    );
  }

  _toggle() {
    if (this.state.toggle) {
      this.setState({ toggle: false, toggleButtonText: "Add Quote" });
    } else {
      this.setState({ toggle: true, toggleButtonText: "See Quotes" });
    }
  }

  _toggleQuoteList() {
    if (this.state.showQuoteList) {
      this.setState({
        showQuoteList: false,
        viewQuotesButtonText: "View All Quotes"
      });
    } else {
      DB.quotes.get_all(results => {
        let arr = [];
        for (item in results.rows) {
          arr.push(results.rows[item]);
        }
        this.setState({
          showQuoteList: true,
          viewQuotesButtonText: "Hide Quotes",
          quotesArr: arr
        });
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
});
