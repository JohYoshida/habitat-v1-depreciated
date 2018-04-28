import React , { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import QuoteButtons from "./QuoteButtons";

import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class QuoteListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButtons: false,
      showEditor: false,
      confirmed: false,
    };
  }

  render() {
    const { text, author, source, key } = this.props.quote;
    return (
      <View>
        <TouchableOpacity
          style={styles.quoteSection}
          onPress={this._toggleButtons.bind(this)}
        >
          <Text>{text}</Text>
          <Text style={styles.bold}>{author}</Text>
          <Text style={styles.italic}>{source}</Text>
        </TouchableOpacity>
        <QuoteButtons
          show={this.state.showButtons}
          confirmed={this.state.confirmed}
          showEditor={this.state.showEditor}
          quote={this.props.quote}
          getQuotes={this.props.getQuotes}
          editQuote={this._editQuote.bind(this, key)}
          deleteQuote={this._deleteQuote.bind(this, key)}
          confirmDelete={this._confirmDelete.bind(this, key)}
          toggleButtons={this._toggleButtons.bind(this)}
        />
      </View>
    );
  }

  _editQuote(key) {
    if (this.state.showEditor) {
      this.setState({ showEditor: false, });
    } else {
      this.setState({ showEditor: true, });
    }
  }

  _confirmDelete() {
    this.setState({ confirmed: true });
  }

  _deleteQuote(key) {
    DB.quotes.remove_id(key, () => {
      alert("Deleted!");
      this.props.getQuotes();
      this.setState({confirmed: false });
    });
  }

  _toggleButtons() {
    if (this.state.showButtons) {
      this.setState({ showButtons: false });
    } else {
      this.setState({ showButtons: true });
    }
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  quoteSection: {
    margin: 10,
    marginTop: 0,
  },
});

export default QuoteListItem;
