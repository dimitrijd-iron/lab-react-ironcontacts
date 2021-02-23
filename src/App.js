import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

import React, { Component } from "react";

class App extends Component {
  state = {
    top5: contacts.slice(0, 5),
  };

  randomContact = () => {
    console.log("random clicked");
    const randomDude = Math.floor(Math.random() * contacts.length);
    const newState = [...this.state.top5];
    newState.push(contacts[randomDude]);
    this.setState({ top5: newState });
    console.log(this.state.top5);
  };

  sortByName = () => {
    console.log("sort name clicked");
    const newState = [...this.state.top5];
    newState.sort((first, second) => (first.name < second.name ? -1 : 1));
    this.setState({ top5: newState });
  };

  sortByPopularity = () => {
    console.log("sort popularity clicked");
    const newState = [...this.state.top5];
    newState.sort((first, second) =>
      first.popularity > second.popularity ? -1 : 1
    );
    this.setState({ top5: newState });
  };

  deleteContact = (contactId) => {
    console.log("delete clicked", contactId);
    const newState = [...this.state.top5];
    this.setState({ top5: newState.filter((el) => el.id !== contactId) });
  };

  render() {
    return (
      <div className="App">
        <h1>IronConctacts</h1>
        <button onClick={this.randomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.top5.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      alt={contact.name}
                      width="50px"
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(1)}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.deleteContact(contact.id);
                      }}
                    >
                      Delete contact
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
