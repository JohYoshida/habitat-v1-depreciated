import React from 'react';
import {Button, View, ScrollView, StyleSheet, Text} from 'react-native';

import Quote from "../components/Quote";

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

  render() {
    return (
      <ScrollView>
        <View>
          <Quote />
          <Button
            onPress={() => this.props.navigation.navigate("AddQuote")}
            title="Add a Quote"
          />
          <Button
            onPress={() => this.props.navigation.navigate("ViewQuotes")}
            title="View Quotes"
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

});
