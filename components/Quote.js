import React , { Component } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import EditQuote from "./EditQuote.js";
import GetQuoteButton from "./GetQuoteButton.js";
import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor: false,
      text: "",
      author: "",
      source: "",
      id: "",
    };
  }

  componentDidMount() {
    this._getQuote();
  }

  render() {
    return (
      <View style={styles.container} >
        <ScrollView style={styles.scrollView} >
          <Text style={styles.text}>{this.state.text}</Text>
          <Text style={styles.author}>{this.state.author}</Text>
          <Text style={styles.source}>{this.state.source}</Text>
        </ScrollView>
        <GetQuoteButton
          style={styles.getQuoteButton}
          onPress={this._getQuote.bind(this)}
        />
      </View>
    );
  }

  _getQuote() {
    DB.quotes.get_all(results => {
      let arr = [];
      for (item in results.rows) {
        arr.push(results.rows[item]);
      }
      const index = Math.floor(Math.random() * arr.length);
      const quote = arr[index];
      this.setState({
        showEditor: false,
        text: quote.text,
        author: quote.author,
        source: quote.source,
        id: quote._id,
      });
    });
  }

  _toggleEditQuote() {
    if (this.state.showEditor) {
      this.setState({ showEditor: false });
    } else {
      this.setState({ showEditor: true });
    }
  }

  _deleteQuote() {
    DB.quotes.remove_id(this.state.id, () => {
      alert("Deleted!")
      this._getQuote();
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  getQuoteButton: {
    flex: 1,
    marginBottom: 30,
  },
  scrollView: {
    flex: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    margin: 10,
  },
  author: {
    textAlign: "center",
    margin: 10,
    marginBottom: 0,
    fontSize: 15,
    fontWeight: "bold",
  },
  source: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 15,
    fontStyle: "italic",
  },
});

export default Quote;
