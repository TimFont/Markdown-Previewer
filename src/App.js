import React, { Component } from 'react';
import NavbarComp from './components/NavbarComp';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      markdown:''
    }
    this.changeMark = this.changeMark.bind(this);
  }

  changeMark(ev){
    if(ev.target){
      this.setState(({ markdown : ev.target.value}));
    }else {
      this.setState(({ markdown : ev }));
    }
  }

  render() {
    return (
      <div className="App">
        <NavbarComp />
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center mt-5 mb-5">
            <div className="col-xs-12 col-md-7">
              <Editor text={this.state.markdown} handler={this.changeMark} />
            </div>
            <div className="col-xs-12 col-md-10 mt-5">
              <Previewer mark={this.state.markdown} />
            </div>
          </div>  
        </div>
        
      </div>
    );
  }
}

export default App;
