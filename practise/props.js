// First, we add the ContactList component, and then we use composition
// to by adding ContactList inside App's render method. Lastly we configure
// the components differently by passing different props.

import React, {Component} from 'react';

class Contactlist extends Component{
  render(){
    const people = this.props.contacts

    return  <ol>
      {people.map(people =>
        <li key={people.name}>{people.name}</li>
      )}
      </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contactlist contacts = {[{name:'ankit'},
              {name:'vilas'},
              {name:'vibha'},
              {name:'vipin'}]}/>
        <Contactlist contacts= {[{name:'omkar'},
              {name:'hitesh'},
              {name:'harshad'},
              {name:'tanay'}]}/>
        <Contactlist contacts = {[{name:'Kaus'},
              {name:'sayali'},
              {name:'sagar'},
              {name:'pankya'}]}/>
      </div>
    );
  }
}

export default App;
