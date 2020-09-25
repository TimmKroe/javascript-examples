import React, { Component } from 'react'

import List from './components/List'
import Form from './components/Form'

class App extends Component {
  state = {
    todos: [
      'Eintrag 1'
    ]
  }

  handleSubmit = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const { todos } = this.state

    return (
      <div className="container">
        <Form handleSubmit={this.handleSubmit} />
        <List todos={todos} />
      </div>
    )
  }
}

export default App
