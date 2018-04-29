import React from 'react';
import { Button, View, Text } from 'react-native';

import AddEntry from "../components/journal/AddEntry";

import DB from "../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

export default class AddJournalScreen extends React.Component {
  static navigationOptions = {
    title: 'Create Journal Entry',
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <AddEntry getEntries={params.getEntries}/>
      </View>
    )
  }
}
