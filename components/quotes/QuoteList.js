import React, { Component } from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";

import QuoteListItem from "./QuoteListItem";

class QuoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButtons: false,
      showEditor: false
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
        extraData={this.state}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._renderSeparator}
        ListEmptyComponent={this._renderEmpty}
      />
    );
  }

  _renderItem = ({ item }) => (
    <QuoteListItem
      id={item.key}
      quote={item}
      getQuotes={this.props.getQuotes}
    />
  );

  _renderSeparator = () => {
    return <View style={styles.separator}/>;
  }

  _renderEmpty = () => {
    return (
      <View style={styles.container}>
        <Text>Quotes you add will appear here.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#CED0CE",
  },
});

export default QuoteList;
