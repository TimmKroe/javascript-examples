import React, { Component } from 'react'

import List from './components/List'
import Form from './components/Form'

class App extends Component {
  state = {
    todos: []
  }

  handleSubmit () {
    // todo
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
