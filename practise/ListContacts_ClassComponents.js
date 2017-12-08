import React, { Component } from 'react';

class ListContacts extends Component{
  render(){
    // console.log("props",this.props);
    return(
      <ol className='contact-list'>
        {this.props.contacts.map((contacts) => (
          <li key={contacts.id} className="contact-list-item">
            <div className='contact-avatar' style={{
              backgroundImage : `url(${contacts.avatarURL})`
            }}/>
            <div className="contact-details">
              <p>{contacts.name}</p>
              <p>{contacts.email}</p>
            </div>
            <button className="contact-remove">
              Remove
            </button>
          </li>

        ))}
      </ol>
    )
  }
}

export default ListContacts;
