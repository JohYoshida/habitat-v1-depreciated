import React , { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class QuoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const quotes = [];
    // this.props.arr.forEach(item => {
    //   quotes.push({ author: item.author, text: item.text });
    // })

    this.props.arr.forEach(item => {
      console.log(item);
      quotes.push({ author: item.author, text: item.text, key: item._id.toString() });
    });

    if (this.props.show) {
      return (
        <FlatList
          data={quotes}
          renderItem={({item}) => (
            <View style={styles.quoteSection}>
              <Text>
                {item.text}
              </Text>
              <Text style={styles.bold}>
                {item.author}
              </Text>
            </View>
          )}
        />
      );
    } else {
      return (
        <View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  quoteSection: {
    margin: 10,
    marginTop: 0,
  },
});

export default QuoteList;