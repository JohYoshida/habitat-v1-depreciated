import React , { Component } from 'react';
import { Button, } from 'react-native';

class DeleteQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.confirmed === false) {
      return (
        <Button
          title="Delete"
          onPress={this.props.confirmDelete}
          color="#f00"
        />
      );
    } else {
      return (
        <Button
          title="Are you sure?"
          onPress={this.props.deleteQuote}
          color="#c20000"
        />
      );
    }
  }
}

export default DeleteQuote;
