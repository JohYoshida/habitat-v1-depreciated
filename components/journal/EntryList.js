import React , { Component } from 'react';
import { FlatList } from 'react-native';

import EntryListItem from "./EntryListItem";

class EntryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <FlatList
        data={[{key: "1"}]}
        extraData={this.state}
        renderItem={this._renderItem}
      />
    );
  }

  _renderItem = ({item}) => (
    <EntryListItem
      id={item.key}
      getQuotes={this.props.getQuotes}
    />
  );
}

export default EntryList;
