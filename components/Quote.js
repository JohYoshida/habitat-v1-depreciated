import React , { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import EditQuote from "./EditQuote.js";
import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
    };
  }

  render() {
    if (this.props.showQuote) {
      return (
        <View>
          <Text style={styles.quoteText}>{this.props.text}</Text>
          <Text style={styles.quoteAuthor}>{this.props.author}</Text>
          <Button
            onPress={this._toggleEditQuote.bind(this)}
            title="Edit"
          />
        <EditQuote show={this.state.showEdit} text={this.props.text} author={this.props.author} id={this.props.id}/>
          <Button
            onPress={this._deleteQuote.bind(this)}
            title="Delete"
            color="#f00"
          />
        </View>
      );
    } else {
      return <View></View>;
    }
  }

  _toggleEditQuote() {
    if (this.state.showEdit) {
      this.setState({ showEdit: false });
    } else {
      this.setState({ showEdit: true });
    }
  }

  _deleteQuote() {
    console.log(this.props.id);
    DB.quotes.remove_id(this.props.id, () => {
      alert("Deleted!")
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
