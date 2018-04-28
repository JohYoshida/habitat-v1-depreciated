import React , { Component } from 'react';
import { FlatList } from 'react-native';

import QuoteListItem from "./QuoteListItem";

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
        extraData={this.state}
        renderItem={this._renderItem}
      />
    );
  }

  _renderItem = ({item}) => (
    <QuoteListItem
      id={item.key}
      quote={item}
      getQuotes={this.props.getQuotes}
    />
  );
}

export default QuoteList;
