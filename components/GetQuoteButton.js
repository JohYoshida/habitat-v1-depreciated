import React , { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class GetQuoteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.quoteButton}
        onPress={this.props.onPress}
      >
        <Ionicons
          style={styles.icon}
          name={Platform.OS === 'ios' ? `ios-egg${focused ? '' : '-outline'}` : 'md-egg'}
          color="#e8e7d2"
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  quoteButton: {
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
});

export default GetQuoteButton;
