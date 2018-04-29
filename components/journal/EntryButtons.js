import React, { Component } from "react";
import { Button, View } from "react-native";

import EditEntry from "./EditEntry";
import DeleteEntry from "./DeleteEntry";

class EntryButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    if (this.props.show) {
      return (
        <View>
          <Button title="Edit" onPress={this.props.editEntry} />
          <EditEntry
            show={this.props.showEditor}
            entry={this.props.entry}
            editEntry={this.props.editEntry}
            submitEdits={this.props.submitEdits}
            getEntries={this.props.getEntries}
            toggleButtons={this.props.toggleButtons}
          />
          <DeleteEntry
            confirmed={this.props.confirmed}
            confirmDelete={this.props.confirmDelete}
            deleteEntry={this.props.deleteEntry}
          />
        </View>
      );
    } else {
      return <View />;
    }
  }
}

export default EntryButtons;
