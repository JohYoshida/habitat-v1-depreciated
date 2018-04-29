import React , { PureComponent } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import EntryButtons from "./EntryButtons";

import DB from "../../DB.js";
var DBEvents = require('react-native-db-models').DBEvents;

class EntryListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showButtons: false,
      showEditor: false,
      confirmed: false,
    };
  }

  render() {
    const { title, body, createdAt, updatedAt, key } = this.props.entry;
    const created = "Created at " + createdAt;
    let updated;
    if (updatedAt) {
      updated = "Updated at " + updatedAt;
    }
    return (
      <View>
        <TouchableOpacity
          style={styles.entrySection}
          onPress={this._toggleButtons.bind(this)}
        >
          <Text style={styles.bold}>{title}</Text>
          <Text>{body}</Text>
          <Text style={styles.italic}>{created}</Text>
          <Text style={styles.italic}>{updated}</Text>
        </TouchableOpacity>
        <EntryButtons
          show={this.state.showButtons}
          confirmed={this.state.confirmed}
          showEditor={this.state.showEditor}
          entry={this.props.entry}
          getEntries={this.props.getEntries}
          editEntry={this._editEntry.bind(this, key)}
          deleteEntry={this._deleteEntry.bind(this, key)}
          confirmDelete={this._confirmDelete.bind(this)}
          toggleButtons={this._toggleButtons.bind(this)}
        />
      </View>
    );
  }

  _editEntry(key) {
    if (this.state.showEditor) {
      this.setState({ showEditor: false, confirmed: false });
    } else {
      this.setState({ showEditor: true, confirmed: false });
    }
  }

  _confirmDelete() {
    this.setState({ confirmed: true });
  }

  _deleteEntry(key) {
    DB.journalEntry.remove_id(key, () => {
      alert("Deleted!");
      this.props.getEntries();
      this.setState({ confirmed: false });
    });
  }

  _toggleButtons() {
    if (this.state.showButtons) {
      this.setState({ showButtons: false, confirmed: false });
    } else {
      this.setState({ showButtons: true, confirmed: false });
    }
  }
}

const styles = StyleSheet.create({
  entrySection: {
    margin: 10,
    marginTop: 0,
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
});

export default EntryListItem;
