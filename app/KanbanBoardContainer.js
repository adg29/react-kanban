import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  'Content-Type': 'application/json',
  Authorization: 'adg29-react'
};

class KanbanBoardContainer extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      cards: [],
    };
  }


  addTask(cardId, taskName) {}
  deleteTask(cardId, taskId, taskIndex) {}
  toggleTask(cardId, taskId, taskIndex) {}

  componentDidMount() {
    fetch(API_URL + '/cards', {
      headers: API_HEADERS
    })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          cards: responseData
        });
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  }


  render() {
    return <KanbanBoard cards={ this.state.cards } taskCallbacks={ { toggle: this.toggleTask.bind(this), delete: this.deleteTask.bind(this), add: this.addTask.bind(this) } } />
  }
}
export default KanbanBoardContainer;

