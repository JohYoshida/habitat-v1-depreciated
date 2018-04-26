import React , { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import EditQuote from "./EditQuote.js";
import QuoteButton from "./QuoteButton.js";
import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor: false,
      text: "",
      author: "",
      id: "",
    };
  }

  componentDidMount() {
    this._getQuote();
  }

  render() {
    if (!this.props.toggle) {
      return (
        <View>
          <QuoteButton onPress={this._getQuote.bind(this)}/>
          <Text style={styles.quoteText}>{this.state.text}</Text>
          <Text style={styles.quoteAuthor}>{this.state.author}</Text>
          <Button
            onPress={this._toggleEditQuote.bind(this)}
            title="Edit"
          />
          <EditQuote
            show={this.state.showEditor}
            text={this.state.text}
            author={this.state.author}
            id={this.state.id}
          />
          <Button
            onPress={this._deleteQuote.bind(this)}
            title="Delete"
            color="#f00"
          />
        </View>
      );
    } else {
      return (
        <View>
        </View>
      );
    }
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
  quoteText: {
    textAlign: "center",
    fontSize: 20,
    margin: 10,
  },
  quoteAuthor: {
    textAlign: "center",
    fontSize: 15,
    margin: 10,
    fontWeight: "bold",
  },
});

export default Quote;
