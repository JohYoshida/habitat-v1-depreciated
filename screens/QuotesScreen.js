import React from "react";
import { Button, View, ScrollView, StyleSheet, Text, } from "react-native";
import AddQuote from "../components/AddQuote.js"
import Quote from "../components/Quote.js"
import QuoteButton from "../components/QuoteButton.js"
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
      buttonText: "Add Quote",
      toggle: false,
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Button
            onPress={this._toggle.bind(this)}
            title={this.state.buttonText}
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
            onPress={this._resetDB.bind(this)}
            title="Reset DB"
            color="#f01a1a"
          />
        </View>
      </ScrollView>
    );
  }

  _resetDB() {
    DB.quotes.erase_db(result => {
      alert("DB reset!");
    })
  }

  _toggle() {
    if (this.state.toggle) {
      this.setState({ toggle: false, buttonText: "Add Quote" });
    } else {
      this.setState({ toggle: true, buttonText: "See Quotes" });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
});
