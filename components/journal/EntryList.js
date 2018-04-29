import React , { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import EntryListItem from "./EntryListItem";

class EntryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const entries = [];
    if (this.props.entries) {
      this.props.entries.forEach(item => {
        entries.push({
          title: item.title,
          body: item.body,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          key: item._id.toString()
        });
      });
    }

    return (
      <FlatList
        data={entries}
        extraData={this.state}
        renderItem={this._renderItem}
        itemSeparatorComponent={this._renderSeparator}
      />
    );
  }

  _renderItem = ({item}) => (
    <EntryListItem
      id={item.key}
      entry={item}
      getEntries={this.props.getEntries}
    />
  );

  _renderSeparator = () => {
    return <View style={styles.separator}/>;
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "86%",
    backgroundColor: "#CED0CE",
  },
});

export default EntryList;
