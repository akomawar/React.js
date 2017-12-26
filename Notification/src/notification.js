var React = require('react');
var ReactDOM = require('react-dom');
var NotificationSystem = require('react-notification-system');

class MyComponent extends React.Component {
  constructor(props){
    super(props);
    this._notificationSystem = null;
      console.log('ankit'+this._notificationSystem);
  }
  handleBtnClick(event){
    event.preventDefault();
    if(this._notificationSystem){
      this._notificationSystem.addNotification({message: 'Hello Ankit', level:'success'});
    }
  }
    // var _notificationSystem = this.btnCompInstRef;
  render(){
    return(
      <div>
        <button onClick={this.handleBtnClick.bind(this)}>Hello</button>
        <NotificationSystem ref = {(n) => {this._notificationSystem = n}} />
      </div>
    );
  };
};


// ReactDOM.render(
//   <MyComponent />,
//   document.getElementById('root')
// );
