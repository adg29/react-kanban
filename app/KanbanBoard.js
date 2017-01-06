import React, { Component, PropTypes } from 'react';
import List from './List';
import { render } from 'react-dom';

class KanbanBoard extends Component {
  render() {
    return (
      <div className="app">
        <List id='todo' title="To Do" cardCallbacks={this.props.cardCallbacks} cards={ this.props.cards.filter((card) => card.status === "todo") } taskCallbacks={this.props.taskCallbacks}  />
        <List id='in-progress' title="In Progress" cardCallbacks={this.props.cardCallbacks} cards={ this.props.cards.filter((card) => card.status === "in-progress") } taskCallbacks={this.props.taskCallbacks} />
        <List id='done' title="Done" cardCallbacks={this.props.cardCallbacks} cards={ this.props.cards.filter((card) => card.status === "done") } taskCallbacks={this.props.taskCallbacks} />
      </div> );
  }
}

KanbanBoard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object,
  cardCallbacks: PropTypes.object
};


export default KanbanBoard;
