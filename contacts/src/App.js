import React, { Component } from 'react';

class ContactList extends Component {
  render(){
    const people = [{name:'Ankit'},
      {name:'Omkar'},
      {name:'Tanay'},
      {name:'kaus'}
    ]
    return(
      <div>
        <h1>Hello World</h1>
        <ol>
          {
            people.map((people)=>
            <li key={people.name}>{people.name}</li>
          )}
        </ol>
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList/>
      </div>
    );
  }
}

export default App;
