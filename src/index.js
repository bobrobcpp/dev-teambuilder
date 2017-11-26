import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FeedList from './components/feed_list.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {

    };

    }


    render(){

      return (
        <div>
        <FeedList />
        </div>
        )
    }
  }



ReactDOM.render(<App />, document.querySelector('#root'));
