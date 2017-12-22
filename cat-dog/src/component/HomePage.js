var React = require('react');
var PetComponent = require('./PetComponent');

var style = {
  textAlign:'center',
  color:"orange",
  fontSize:'2em'
};

var btnStyle = {
  marginTop:'30px',
  marginRight: '5px',
  height:'25px'
};

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      CatLikesCount : 0,
      DogLikesCount : 0
    }
    // used in ref
    // this.CatCompInstRef = null;
    // this.DogCompInstRef = null;
    this.handleLikeBtnClick= this.handleLikeBtnClick.bind(this)
    this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this)
    this.handleShowResultBtnClick = this.handleShowResultBtnClick.bind(this);
    this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this);
  }

  handleLikeBtnClick(event){
    var petName = event.target.value;
    if(petName === 'CAT'){
      this.setState(function(prevState){
        return{
            CatLikesCount : prevState.CatLikesCount + 1
          };
        });
    }
    else if(petName === 'DOG'){
      this.setState(function(prevState){
        return{
          DogLikesCount : prevState.DogLikesCount + 1
        };
      });
    };
  };

  handleDislikeBtnClick(event){
    var petName = event.target.value;
    if(petName === 'CAT'){
      this.setState(function(prevState){
        return{
            CatLikesCount : prevState.CatLikesCount - 1
          };
        });
    }
    else if(petName === 'DOG'){
      this.setState(function(prevState){
        return{
          CatLikesCount : prevState.CatLikesCount,
          DogLikesCount : prevState.DogLikesCount - 1
        };
      });
    };
  }

  handleShowResultBtnClick(){
    // Ref Components
    // var CatLikesCount = this.CatCompInstRef.state.likeCount;
    // var DogLikesCount = this.DogCompInstRef.state.likeCount;
    var CatLikesCount = this.CatLikesCount;
    var DogLikesCount = this.DogLikesCount;

          if(CatLikesCount > DogLikesCount){
            console.log('cat is the winner');
          }else if(CatLikesCount < DogLikesCount){
            console.log('dog is the winner');
          }else{
            console.log('Game is a tie');
          }

  }
  handleStartOverBtnClick(){
    console.log('Start Over: ',this.handleStartOverBtnClick);
  }
  render(){
    return(
      <div>
        <h1 style={style}>Hello Ankit <span style={{color:'blue'}}>Komawar</span>!</h1>
        <div style={{marginTop:5, textAlign:'center'}}>
          <PetComponent
                petName="CAT"
                petImage="http://eskipaper.com/images/cat-cute-1.jpg"
              //  ref = {function(compInst){
              //    this.CatCompInstRef = compInst;
              //  }.bind(this)}
                likeCount = {this.state.CatLikesCount}
                onLikeBtnClick = {this.handleLikeBtnClick}
                onDislikeBtnClick = {this.handleDislikeBtnClick}
          />

          <PetComponent
              petName="DOG"
              petImage="http://www.viralnovelty.net/wp-content/uploads/2015/01/13.jpg"
              // ref = {function(compInst){
              //   this.DogCompInstRef = compInst;
              // }.bind(this)}
              likeCount = {this.state.DogLikesCount}
              onLikeBtnClick = {this.handleLikeBtnClick}
              onDislikeBtnClick = {this.handleDislikeBtnClick}
          />
        </div>
        <div style={{textAlign:'center'}}>
          <button style={btnStyle} onClick={this.handleShowResultBtnClick}>Show Result</button>
          <button style={btnStyle} onClick={this.handleStartOverBtnClick}>Start Over</button>
        </div>
      </div>
    );
  };
};


module.exports = HomePage;
