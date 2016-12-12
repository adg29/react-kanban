import React, { Component } from 'react';
import update from 'react-addons-update';
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
  deleteTask(cardId, taskId, taskIndex) {
    // Find the index of the card
    let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
    // Create a new object without the task 
    let nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {
          $splice: [[taskIndex, 1]]
        }
      }
    });
    // set the component state to the mutated object 
    this.setState({
      cards: nextState
    });
    // Call the API to remove the task on the server
    fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
      method: 'delete',
      headers: API_HEADERS
    });

  }
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

