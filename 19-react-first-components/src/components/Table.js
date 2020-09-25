import React, {Component} from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ben</td>
            <td>1+</td>
          </tr>
          <tr>
            <td>Gustav</td>
            <td>2-</td>
          </tr>
          <tr>
            <td>Peter</td>
            <td>1-2</td>
          </tr>
          <tr>
            <td>Jürgen</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table