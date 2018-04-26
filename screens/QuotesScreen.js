import React from "react";
import { AsyncStorage, Button, View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AddQuote from "../components/AddQuote.js"
import Quote from "../components/Quote.js"
import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

export default class QuotesScreen extends React.Component {
  static navigationOptions = {
    title: 'Quotes',
  };
  constructor(props) {
    super(props);
    this.state = {
      showInputs: false,
      showQuote: false,
      quoteInput: "",
      authorInput: "",
      randomQuote: "",
      randomAuthor: "",
      randomID: "",
    };
  }

  componentDidMount() {
    this._getRandomQuote;
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Button
            onPress={this._toggleQuoteInput.bind(this)}
            title="Toggle"
            color="#1c8613"
            />
          <AddQuote showInputs={this.state.showInputs}/>
          <TouchableOpacity
            style={styles.ideaButton}
            onPress={this._getRandomQuote.bind(this)}
            >
            <Ionicons
              style={styles.icon}
              name={Platform.OS === 'ios' ? `ios-egg${focused ? '' : '-outline'}` : 'md-egg'}
              color="#e8e7d2"
              />
          </TouchableOpacity>
          <Quote showQuote={this.state.showQuote} text={this.state.randomQuote} author={this.state.randomAuthor} id={this.state.randomID}/>
          <Button
            onPress={this._resetDB.bind(this)}
            title="Reset DB"
            color="#f01a1a"
            />
        </View>
      </ScrollView>
    );
  }

  _addQuoteButton() {
    DB.quotes.add({ text: this.state.quoteInput, author: this.state.authorInput }, (addedData) => {
      alert(addedData.text, addedData.author);
      console.log(addedData);
    });
    this.setState({ showInputs: false });
  }

  _getRandomQuote() {
    DB.quotes.get_all(results => {
      let arr = [];
      for (item in results.rows) {
        arr.push(results.rows[item]);
      }
      const index = Math.floor(Math.random() * arr.length)
      const quote = arr[index];
      this.setState({ showQuote: true, randomQuote: quote.text, randomAuthor: quote.author, randomID: quote._id });
    });
  }

  _resetDB() {
    DB.quotes.erase_db(result => {
      alert("DB reset!");
    })
  }

  _toggleQuoteInput() {
    if (this.state.showInputs) {
      this.setState({ showInputs: false });
    } else {
      this.setState({ showInputs: true });
    }
  }
}

const styles = StyleSheet.create({
  ideaButton: {
    alignItems: "center",
    padding: 20,
    margin: 30,
    marginLeft: 110,
    marginRight: 110,
    backgroundColor: "#486cc9",
    borderRadius: 100,
  },
  icon: {
    fontSize: 100,
  },
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
