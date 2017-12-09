import React, { Component } from 'react';

class ContactList extends Component {
  render(){
    const people = this.props.contact
    return(
      <div>
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
        <ContactList contact={[{name:'Ankit'},{name:'tanay'},{name:'kaus'}]}/>
        <ContactList contact={[{name:'omkar'},{name:'hitesh'},{name:'deepansh'}]}/>
        <ContactList contact={[{name:'kunal'},{name:'vikss'},{name:'arjun'}]}/>
      </div>
    );
  }
}

export default App;
