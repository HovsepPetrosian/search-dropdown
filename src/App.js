import React, { Component } from 'react'
import { Users } from './data/MOCK_DATA (2)'
import './App.css'
import Table from './Table'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm: ""
    }
  }

  
  render() {
    return (
      <div className='App'>
        <input
          type='text'
          placeholder='search ...'
          onChange={event => {this.setState({searchTerm: event.target.value})}}
        />
        {Users.filter((user) => user.first_name.includes(this.state.searchTerm)).map((val, key) => {
          return (
            <div className='user' key={key}>
              <p> {val.first_name} </p>
            </div>
          )
        })}
        

      </div>
    )
  }
}
