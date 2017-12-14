import React, { Component } from 'react'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    screen: 'list', //list or create
    contacts: []
  }
  componentDidMount(){
    ContactsAPI.getAll().then((contacts)=>{
      this.setState({ contacts })
    })
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: this.state.contacts.filter((c) => c.id !== contact.id)
    }))
    ContactsAPI.remove(contact)
  }

  navigateToCreate = (contact) =>{
    this.setState({screen:'create'})
  }

  render(){
    return(
      <div>
        {this.state.screen === "list" && (
          <ListContacts
            onDeleteContact={this.removeContact}
            contacts={this.state.contacts}
            onNavigate={this.navigateToCreate}
          />

        )}
        {this.state.screen === "create" &&(
          <CreateContact/>
        )}
      </div>
    )
  }
}


export default App
