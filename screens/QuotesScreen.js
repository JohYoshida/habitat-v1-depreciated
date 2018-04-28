import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';

import Quote from "../components/quotes/Quote";

export default class QuotesScreen extends React.Component {
  static navigationOptions = {
    // title: "Quotes",
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    // Will only run once
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.quote}>
          <Quote />
        </View>
        <View style={styles.buttons}>
          <Button
            onPress={() => this.props.navigation.navigate("AddQuote")}
            title="Add a Quote"
            />
          <Button
            onPress={() => this.props.navigation.navigate("ViewQuotes")}
            title="View Quotes"
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    justifyContent: "flex-end",
  },
  quote: {
    flex: 10,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
});
