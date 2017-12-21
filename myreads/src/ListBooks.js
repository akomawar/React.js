import React, { Component } from 'react'

class ListBooks extends Component{
  render(){
    return(
      <div className='list-books'>

        <div className='list-books-title'>
          <h1 className="top-bar-heading">MyReads</h1>
        </div>

        <div className="list-books-content">
          <h2>Currently Reading</h2>
          <h2>Want to Read</h2>
          <h2>Read</h2>
        </div>

      </div>
    )
  }
}


export default ListBooks
