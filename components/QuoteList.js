import React , { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import QuoteButtons from "./QuoteButtons";

import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class QuoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButtons: false,
      showEditor: false,
    };
  }

  render() {
    const quotes = [];
    if (this.props.quotes) {
      this.props.quotes.forEach(item => {
        quotes.push({
          author: item.author,
          text: item.text,
          source: item.source,
          key: item._id.toString()
        });
      });
    }

    return (
      <FlatList
        data={quotes}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              style={styles.quoteSection}
              onPress={this._toggleButtons.bind(this)}
              >
              <Text>
                {item.text}
              </Text>
              <Text style={styles.bold}>
                {item.author}
              </Text>
              <Text style={styles.italic}>
                {item.source}
              </Text>
            </TouchableOpacity>
            <QuoteButtons
              show={this.state.showButtons}
              showEditor={this.state.showEditor}
              editQuote={this._editQuote.bind(this, item.key)}
              deleteQuote={this._deleteQuote.bind(this)}
              text={item.text}
              author={item.author}
              source={item.source}
              id={item.key}
            />
          </View>
        )}
      />
    );
  }

  _toggleButtons() {
    if (this.state.showButtons) {
      this.setState({ showButtons: false });
    } else {
      this.setState({ showButtons: true });
    }
  }

  _editQuote(id) {
    console.log('edit', id);
    this.setState({ showEditor: true });
  }

  _deleteQuote() {
    console.log('delete');
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

export default QuoteList;
