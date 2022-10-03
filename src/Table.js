import React, { Component } from 'react'
import { Users } from './data/MOCK_DATA (2)'

export default class Table extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm: ""
    }
  }
    render() {
        return (
            <div>
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
