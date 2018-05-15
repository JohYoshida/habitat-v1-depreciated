import React from "react";
import { Button, View, Text } from "react-native";

import AddQuote from "../components/quotes/AddQuote";

export default class AddQuoteScreen extends React.Component {
  static navigationOptions = {
    title: "Add a Quote"
  };

  render() {
    return (
      <View>
        <AddQuote goBack={this.props.navigation.goBack} />
      </View>
    );
  }
}
