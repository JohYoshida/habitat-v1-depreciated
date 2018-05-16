import React, { Component } from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";

import EntryListItem from "./EntryListItem";

class EntryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        ItemSeparatorComponent={this._renderSeparator}
        ListEmptyComponent={this._renderEmpty}
      />
    );
  }

  _renderItem = ({ item }) => (
    <EntryListItem
      id={item.key}
      entry={item}
      getEntries={this.props.getEntries}
    />
  );

  _renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  _renderEmpty = () => {
    return (
      <View style={styles.container}>
        <Text>Journal entries you add will appear here.</Text>
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

export default EntryList;
