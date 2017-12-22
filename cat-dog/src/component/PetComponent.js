var React = require('react');

var compStyle = {
  display: 'inline-block',
  marginLeft: 'auto',
  marginRight:'auto'
};

var btnStyle={
  height: '25px',
  width: '70px',
  marginRight:'5px',
  marginLeft:'5px',
  marginTop:'10px'
};

class PetComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        likeCount : 0
    };
    // this.likeCount = 0;
    // this.handleLikeBtnClick= this.handleLikeBtnClick.bind(this)
    // this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this)
  }
  // handleLikeBtnClick(){
    // console.log(this.props.petName + ' Like');
    // this.setState({
    //   likeCount : this.state.likeCount + 1
    // });

    // this.setState(function(prevState){
    //   return{
    //     likeCount: prevState.likeCount + 1
    //   };
    // });

    // this.likeCount += 1;
    // this.forceUpdate(); or this.setState({});
  // };

  // handleDislikeBtnClick(){
    // this.setState({
    //   likeCount : this.state.likeCount - 1
    // });

    // this.setState(function(prevState){
    //   return{
    //     likeCount: prevState.likeCount - 1
    //   };
    //   });

    // this.likeCount -= 1;
    // this.forceUpdate(); or this.setState({});
  // };

  render(){
    return(
      <div style={compStyle}>
        <h1 style={{color:'green'}}>{this.props.petName} <span style={{color:'red'}} > Likes :  {this.props.likeCount}</span></h1>
        <img style={{width:250,height:250}} src={this.props.petImage} alt={"Cute" + this.props.petName} />
        <br />
        <button style={btnStyle} value={this.props.petName} onClick={this.props.onLikeBtnClick}>Like</button>
        <button style={btnStyle} value={this.props.petName} onClick={this.props.onDislikeBtnClick}>Dislike</button>
      </div>
    );
  }
}

module.exports = PetComponent;
